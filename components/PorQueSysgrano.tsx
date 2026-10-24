import Image from "next/image";
import Link from "next/link";

export default function PorQueSysgrano() {
  return (
    <section id="porque" className="py-20 sm:py-28 bg-[#E1D3C1] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Media */}
          <div className="flex-1 flex justify-center w-full max-w-lg lg:max-w-none order-2 lg:order-1">
            <div className="relative w-full max-w-[480px]">
              {/* Decorative backplate */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 sm:-translate-x-4 translate-y-3 sm:translate-y-4 rounded-[40px] bg-[#7D9773] opacity-45 z-0"
              />
              <div className="relative z-10 w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-[40px] overflow-hidden shadow-xl">
                <Image
                  src="/assets/image/foto-retexturizada.png"
                  alt="Cafeicultor inspecionando grãos em lavoura de café"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="flex-1 flex flex-col items-start max-w-xl order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-[#7f3f3f] tracking-wide mb-4">
              <span className="w-7 h-[2px] bg-[#C97C7C] rounded-full inline-block" />
              <span>Por que escolher a Sysgrano</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-tight mb-6">
              Inteligência e eficiência na gestão{" "}
              <span className="text-[#5c7753]">cafeeira</span> ao alcance das suas mãos
            </h2>

            <p className="text-base sm:text-lg text-[#3E3B37] leading-relaxed mb-8 opacity-90 text-justify sm:text-left">
              A Sysgrano foi desenvolvida por estudantes de TSI do Ifes – Campus Santa Teresa, com apoio da Fapes e do Incaper, para auxiliar o cafeicultor na gestão da propriedade. O aplicativo permite registrar atividades de tratos culturais, colheitas, despolpagens, pré-secagens, secagens, pilagens e agendamentos de visitas técnicas, além de registrar vendas e despesas, gerenciar o armazém e acompanhar análises completas dos preços do café.
            </p>

            <Link
              href="#download"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#4B2E1B] text-[#E1D3C1] font-semibold text-base shadow-md hover:bg-[#3E3B37] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#C97C7C]"
            >
              Baixar o app
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
