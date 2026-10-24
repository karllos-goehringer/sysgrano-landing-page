import Link from "next/link";

export default function Manual() {
  return (
    <section id="manual" className="py-20 sm:py-28 bg-[#E1D3C1] text-center">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-tight mb-4">
          Manual de Instruções do App
        </h2>
        <p className="text-base sm:text-lg text-[#3E3B37] opacity-85 leading-relaxed mb-8">
          Acesse o manual do aplicativo Sysgrano para aprender a utilizá-lo, tirar dúvidas, e muito mais!
        </p>
        <Link
          href="/assets/manual-de-uso/SysgranoApp.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#4B2E1B] text-[#E1D3C1] font-semibold text-base shadow-md hover:bg-[#3E3B37] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-[#C97C7C]"
        >
          Acessar Manual de Instruções
        </Link>
      </div>
    </section>
  );
}
