import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3E3B37] text-[#E1D3C1] pt-16 sm:pt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[#E1D3C1]/20">
          {/* Brand */}
          <div className="lg:col-span-2 max-w-sm">
            <Link href="#hero" className="inline-flex items-center gap-2 group mb-4">
              <Image
                src="/assets/logos/sysgrano_logo.png"
                alt="Logo da Sysgrano"
                width={48}
                height={48}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-3xl font-normal tracking-tight">
                <span className="text-[#7D9773]">Sys</span>
                <strong className="font-extrabold text-[#C8A078]">grano</strong>
              </span>
            </Link>
            <p className="text-sm sm:text-base text-[#E1D3C1]/80 leading-relaxed">
              Tecnologia simples feita para levar mais controle e rentabilidade ao cafeicultor.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <Link href="#hero" className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#recursos" className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors">
                  Recursos do app
                </Link>
              </li>
              <li>
                <Link href="#porque" className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors">
                  Por que usar a Sysgrano?
                </Link>
              </li>
              <li>
                <Link href="#parcerias" className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors">
                  Parcerias
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#manual" className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors">
                  Manual de instruções
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">
              Contato
            </h3>
            <a
              href="mailto:contato@sysgrano.app"
              className="text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors"
            >
              contato@sysgrano.app
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wider mb-4">
              Redes sociais
            </h3>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/sysgrano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E1D3C1]/85 hover:text-white hover:underline transition-colors"
                  aria-label="Instagram da Sysgrano"
                >
                  <span>Instagram</span>
                  <Image
                    src="/assets/icon/logo-instagram.svg"
                    alt="Logo do Instagram"
                    width={20}
                    height={20}
                    className="h-5 w-5 brightness-0 invert"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#E1D3C1]/70">
          <p>© 2026 Sysgrano. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white hover:underline transition-colors">
              Termos de uso
            </Link>
            <Link href="#" className="hover:text-white hover:underline transition-colors">
              Política de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
