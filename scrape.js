const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapePage(page, url, name) {
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    
    // Extract textual structure
    const data = await page.evaluate(() => {
        const extractText = (element) => {
            let result = '';
            for (const node of element.childNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent.trim();
                    if (text) result += text + ' ';
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const tag = node.tagName.toLowerCase();
                    if (['script', 'style', 'noscript', 'svg'].includes(tag)) continue;
                    
                    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
                        result += `\n\n## [${tag.toUpperCase()}] ` + node.innerText.trim() + `\n`;
                    } else if (tag === 'a') {
                        result += ` [LINK: ${node.innerText.trim()}] `;
                    } else if (tag === 'button') {
                        result += ` [BUTTON: ${node.innerText.trim()}] `;
                    } else {
                        result += extractText(node);
                    }
                }
            }
            return result;
        };
        
        return extractText(document.body);
    });

    // Also get standard clean text
    const cleanText = await page.evaluate(() => document.body.innerText);

    const report = `# ${name} Analysis\n\n## URL: ${url}\n\n## Structured Copy and Elements\n${data}\n\n## Raw Inner Text\n${cleanText}\n`;
    const outPath = path.join(__dirname, `${name}.md`);
    fs.writeFileSync(outPath, report);
    console.log(`Saved ${outPath}`);
}

async function main() {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await scrapePage(page, 'https://moshield.com/', 'moshield_home');
        await scrapePage(page, 'https://moshield.com/services/', 'moshield_services');
        await scrapePage(page, 'https://moshield.com/about/', 'moshield_about');
    } catch (e) {
        console.error('Error during scraping:', e);
    }

    await browser.close();
    console.log('Done.');
}

main();
