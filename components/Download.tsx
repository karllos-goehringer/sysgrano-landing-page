import Image from "next/image";

export default function Download() {
  return (
    <section
      id="download"
      className="py-24 sm:py-32 bg-[#fffdf9] text-[#3E3B37] flex items-center justify-center"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-[1.2] mb-6">
          Tudo o que você precisa para gerenciar a sua propriedade, desde o plantio até a venda do seu café.
          <br className="hidden md:inline" />{" "}
          <span className="text-[#C97C7C] font-bold block sm:inline mt-2 sm:mt-0">
            Isso tudo você só encontra em nosso app.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-[#3E3B37] leading-relaxed max-w-3xl mx-auto mb-10 opacity-95">
          Não perca mais tempo com cadernos e planilhas. Baixe a Sysgrano agora, cadastre sua propriedade de forma rápida e simples e tenha acesso imediato aos inúmeros benefícios do nosso app.
        </p>

        {/* Em breve nas lojas */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="inline-block text-sm font-bold text-[#4B2E1B] tracking-wide uppercase bg-white/40 px-4 py-1 rounded-full backdrop-blur-xs">
              Em breve
            </span>
            <div
              className="h-16 sm:h-20 min-w-[220px] rounded-xl bg-black px-5 text-white flex items-center justify-center gap-3 shadow-md"
              aria-label="Em breve no Google Play"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src="/assets/icon/google-play-store-icon.svg"
                  alt=""
                  width={466}
                  height={512}
                  className="h-11 w-auto sm:h-12"
                />
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-xs">Em breve no</span>
                <span className="text-2xl font-semibold tracking-tight">
                  Google Play
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="inline-block text-sm font-bold text-[#4B2E1B] tracking-wide uppercase bg-white/40 px-4 py-1 rounded-full backdrop-blur-xs">
              Em breve
            </span>
            <div
              className="h-16 sm:h-20 min-w-[220px] rounded-xl bg-black px-5 text-white flex items-center justify-center gap-3 shadow-md"
              aria-label="Em breve na App Store"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-11 w-11 -translate-x-1 -translate-y-px fill-current"
                >
                  <path d="M17.05 12.54c-.02-2.02 1.65-3 1.73-3.05a3.74 3.74 0 0 0-2.94-1.59c-1.24-.13-2.44.74-3.07.74-.65 0-1.62-.73-2.67-.71a3.94 3.94 0 0 0-3.31 2.02c-1.43 2.48-.36 6.12 1.01 8.13.68.98 1.47 2.08 2.52 2.04 1.02-.04 1.4-.66 2.64-.66 1.23 0 1.58.66 2.65.64 1.1-.02 1.78-.98 2.44-1.98a8.8 8.8 0 0 0 1.12-2.3 3.56 3.56 0 0 1-2.12-3.28ZM15.03 6.58a3.58 3.58 0 0 0 .82-2.57 3.64 3.64 0 0 0-2.36 1.22 3.4 3.4 0 0 0-.84 2.48 3.02 3.02 0 0 0 2.38-1.13Z" />
                </svg>
              </span>
              <span className="flex flex-col text-left leading-tight">
                <span className="text-xs">Em breve na</span>
                <span className="text-2xl font-semibold tracking-tight">
                  App Store
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
