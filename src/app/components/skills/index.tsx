export default function Skills() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div>
        <h2 className="my-4">Softskills</h2>
        <ul className="list-disc">
          <li>Liderança</li>
          <li>Comunicação clara</li>
          <li>Gestão de conflitos </li>
          <li>Inteligência emocional</li>
          <li>Negociação</li>
          <li>Pensamento crítico</li>
          <li>Organização e foco</li>
          <li>Flexibilidade e adaptação</li>
        </ul>
      </div>

      <div>
        <h2 className="my-4">HardSkills</h2>
        <ul className="list-disc">
          <li>Gestão de cronograma</li>
          <li>Metodologias ágeis</li>
          <li>Gestão de riscos – Identificar, analisar e mitigar riscos do projeto.</li>
          <li>Orçamentação e controle de custos</li>
          <li>Análise de dados</li>
          <li>Análise de indicadores (KPIs, OKRs)</li>
          <li>Elaboração de documentação e relatórios</li>
          <li>Criação de fluxogramas</li>
        </ul>
      </div>
    </div>
  );
}
