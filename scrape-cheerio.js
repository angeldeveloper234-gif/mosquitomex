const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

async function scrapePage(url, name) {
    console.log(`Navigating to ${url}...`);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
            }
        });
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Remove scripts, styles, and other noise
        $('script, style, noscript, svg, iframe, nav, footer').remove();

        let content = '';

        // Extract headings and paragraphs logically
        $('h1, h2, h3, h4, p, a.button, a.btn, li').each((i, el) => {
            const tag = $(el).prop('tagName').toLowerCase();
            let text = $(el).text().trim().replace(/\s+/g, ' ');
            if (!text) return;

            if (tag.match(/^h[1-6]$/)) {
                content += `\n\n## [${tag.toUpperCase()}] ${text}\n`;
            } else if (tag === 'p') {
                content += `${text}\n`;
            } else if (tag === 'li') {
                content += `- ${text}\n`;
            } else if (tag === 'a') {
                content += `[CTA/BUTTON: ${text}]\n`;
            }
        });

        // Also get title and description
        const title = $('title').text().trim();
        const description = $('meta[name="description"]').attr('content') || '';

        const report = `# ${name} Analysis\n\n## URL: ${url}\n\n## Meta\nTitle: ${title}\nDescription: ${description}\n\n## Structured Copy\n${content}\n`;
        const outPath = path.join(__dirname, `${name}.md`);
        fs.writeFileSync(outPath, report);
        console.log(`Saved ${outPath}`);
    } catch (e) {
        console.error(`Error scraping ${url}:`, e.message);
    }
}

async function main() {
    await scrapePage('https://moshield.com/', 'moshield_home');
    await scrapePage('https://moshield.com/services/', 'moshield_services');
    await scrapePage('https://moshield.com/about-us/', 'moshield_about');
    console.log('Done.');
}

main();
