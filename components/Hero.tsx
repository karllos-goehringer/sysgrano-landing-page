import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f4ede3] py-16 sm:py-24"
    >
      <Image
        src="/assets/image/imagem_fundo.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="scale-105 object-cover blur-[3px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#E1D3C1]/75 to-[#f4ede3]/80"
      />
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B2E1B] leading-[1.15] tracking-tight mb-6">
              A gestão do ciclo da safra{" "}
              <span className="text-[#5c7753] block sm:inline">na palma da mão</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#3E3B37] leading-relaxed mb-8 max-w-xl">
              Com a Sysgrano você controla suas Propriedades, Talhões, Armazém,
              Despesas, Vendas e Atividades do Ciclo da sua Safra em um só
              lugar, de forma simples e intuitiva.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="#recursos"
                className="hero-cta-shine relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#4B2E1B] text-[#E1D3C1] font-semibold text-base shadow-md hover:bg-[#3E3B37] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#C97C7C]"
              >
                Conhecer recursos
              </Link>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-none">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Decorative backplate */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[40px] bg-[#7D9773] opacity-35 z-0"
              />
              {/* Phone Image */}
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl bg-white/20">
                <Image
                  src="/assets/app-prints/principal.png"
                  alt="Tela inicial do app Sysgrano no celular"
                  width={720}
                  height={1600}
                  className="w-full h-auto object-cover rounded-[40px] transition-transform duration-500 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
