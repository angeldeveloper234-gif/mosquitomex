/**
 * Marca visible de dato pendiente de confirmación.
 *
 * Existe para que NUNCA haya que inventar un dato para llenar un hueco. Si no
 * sabemos el horario de atención, la página dice que no lo sabemos — no se
 * pone "Lun a Vie 9 a 18" porque suena razonable. Es más fácil completar un
 * corchete que desinventar un dato que ya se publicó.
 *
 * Es deliberadamente visible y feo: un pendiente discreto se queda en
 * producción para siempre. Para encontrarlos todos: grep -rn "PorConfirmar" src/
 */
export function PorConfirmar({ children }: { children: React.ReactNode }) {
  return (
    <mark className="inline-block bg-[#FFF4CC] text-[#7A5C00] border border-[#E8C766] rounded px-2 py-0.5 text-[0.8125rem] font-bold not-italic">
      [CONFIRMAR: {children}]
    </mark>
  )
}
