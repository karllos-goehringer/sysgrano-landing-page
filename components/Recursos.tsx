import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="flex flex-col sm:flex-row items-start gap-5 p-7 sm:p-8 bg-[#f4ede3] border border-[#4B2E1B]/10 rounded-[20px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#7D9773]/20 text-[#4a6243] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#4B2E1B] mb-2.5 leading-snug">
          {title}
        </h3>
        <p className="text-base text-[#3E3B37] leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Recursos() {
  const features = [
    {
      title: "Venda no momento certo",
      description:
        "Acompanhe as análises da cotação de café que identifica os melhores momentos para você fazer a venda.",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
    {
      title: "Controle de estoque",
      description:
        "Acompanhe tudo o que entra e sai da propriedade, evitando perdas e compras sem necessidade.",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      title: "Cálculo de gastos",
      description:
        "O produtor consegue saber exatamente quanto custa produzir o seu café.",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" />
          <line x1="8" x2="16" y1="6" y2="6" />
          <line x1="16" x2="16" y1="14" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </svg>
      ),
    },
    {
      title: "Acompanhamento de tarefas",
      description:
        "Saiba o que fazer no dia a dia: poda, adubação, colheita, secagem e muito mais. Tome decisões estratégicas a partir de detalhes sobre o clima.",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Histórico de safras",
      description:
        "Compare o rendimento de cada Talhão e Safra a cada colheita para entender quais manejos trouxeram melhor resultado e se planejar.",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
    },
    {
      title: "Relatórios automáticos",
      description:
        "Visualize relatórios e gráficos precisos, gerados em tempo real, que mostram os resultados obtidos em cada etapa.",
      icon: (
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="recursos" className="py-20 sm:py-28 bg-[#fffdf9]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-[#7f3f3f] tracking-wide mb-4">
            <span className="w-7 h-[2px] bg-[#C97C7C] rounded-full inline-block" />
            <span>Principais Recursos da Sysgrano</span>
            <span className="w-7 h-[2px] bg-[#C97C7C] rounded-full inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-tight mb-5">
            Solução completa para o ecossistema da{" "}
            <span className="text-[#5c7753]">cafeicultura</span>
          </h2>

          <p className="text-lg text-[#3E3B37] leading-relaxed max-w-2xl mx-auto">
            Do plantio à venda, a Sysgrano reúne em um só lugar tudo o que o produtor precisa para decidir melhor e produzir com mais rentabilidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
