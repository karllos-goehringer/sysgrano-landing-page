"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type TouchEvent,
} from "react";
import Image from "next/image";

interface SlideData {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: "s1",
    number: "01 / 08",
    title: "Cadastro de Propriedade",
    description:
      "Cadastre sua propriedade no app para gerir talhões, safras e atividades. Fique de olho na previsão do tempo diretamente na página inicial.",
    image: "/assets/app-prints/appHome-3.jpeg",
  },
  {
    id: "s2",
    number: "02 / 08",
    title: "Cotação do Café",
    description:
      "Fique por dentro do preço do café em tempo real pelo tipo de café e por saca.",
    image: "/assets/app-prints/appHome-2.jpeg",
  },
  {
    id: "s3",
    number: "03 / 08",
    title: "Agende Atividades no Calendário",
    description:
      "Cadastre as atividades que planeja realizar em um talhão no calendário e salve todas as informações que precisa.",
    image: "/assets/app-prints/appEvento-1.jpeg",
  },
  {
    id: "s4",
    number: "04 / 08",
    title: "Atividades a Realizar",
    description:
      "Encontre todas as atividades que devem ser feitas em determinado dia em um só lugar. Você receberá notificações para lembrar delas.",
    image: "/assets/app-prints/appEvento-2.jpeg",
  },
  {
    id: "s5",
    number: "05 / 08",
    title: "Talhões",
    description:
      "Gerencie cada talhão de forma simples, rápida e prática.",
    image: "/assets/app-prints/appTalhao.jpeg",
  },
  {
    id: "s6",
    number: "06 / 08",
    title: "Controle Financeiro",
    description:
      "No aplicativo Sysgrano você pode organizar suas despesas por meio do Relatório Financeiro. Controle seus gastos como pagamento de funcionários e compra de insumos de forma rápida e acessível.",
    image: "/assets/app-prints/appFinanceiro-1.jpeg",
  },
  {
    id: "s7",
    number: "07 / 08",
    title: "Armazém Digital",
    description:
      "Armazene no app os insumos e o café que possui, juntamente com a quantidade de cada um. Registre compras e tenha controle sobre tudo o que possui fácilmente.",
    image: "/assets/app-prints/appArmazem-2.jpeg",
  },
  {
    id: "s8",
    number: "08 / 08",
    title: "Cadastro de Funcionários e Fornecedores",
    description:
      "Cadastre seus funcionários e fornecedores para facilitar pagamentos e manter resgistrado com quem comprou insumos e muito mais.",
    image: "/assets/app-prints/appFornecedor.jpeg",
  },
];

export default function AppShowcase() {
  const [current, setCurrent] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const pointerStart = useRef<{ id: number; x: number; y: number } | null>(null);
  const touchStart = useRef<{ id: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSlideDirection("next");
      setCurrent((index) => (index + 1) % slides.length);
    }, 10_000);

    return () => window.clearTimeout(timeout);
  }, [current]);

  const goToSlide = (index: number, direction: "next" | "prev") => {
    if (index === current) return;
    setSlideDirection(direction);
    setCurrent(index);
  };

  const prevSlide = () => {
    goToSlide(current === 0 ? slides.length - 1 : current - 1, "prev");
  };

  const nextSlide = () => {
    goToSlide(current === slides.length - 1 ? 0 : current + 1, "next");
  };

  const changeSlideForSwipe = (deltaX: number, deltaY: number) => {
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.pointerType === "touch") return;
    if (event.target instanceof Element && event.target.closest("button")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    if (!start || start.id !== event.pointerId) return;
    pointerStart.current = null;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    changeSlideForSwipe(deltaX, deltaY);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current) return;
    const touch = event.changedTouches.item(0);
    if (!touch) return;
    touchStart.current = {
      id: touch.identifier,
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    if (!start) return;

    let touch: { identifier: number; clientX: number; clientY: number } | null =
      null;
    for (let index = 0; index < event.changedTouches.length; index += 1) {
      const changedTouch = event.changedTouches.item(index);
      if (changedTouch?.identifier === start.id) {
        touch = changedTouch;
        break;
      }
    }
    if (!touch) return;

    touchStart.current = null;
    changeSlideForSwipe(touch.clientX - start.x, touch.clientY - start.y);
  };

  const handleTouchCancel = () => {
    touchStart.current = null;
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current?.id === event.pointerId) {
      pointerStart.current = null;
    }
  };

  const activeSlide = slides[current];

  return (
    <section id="destaques" className="py-20 sm:py-28 bg-[#E1D3C1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B2E1B] leading-tight">
            Telas da Sysgrano:
          </h2>
        </div>

        {/* Carousel Card */}
        <div
          className="bg-[#FBF8F3] rounded-[24px] shadow-xl p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#4B2E1B]/5 transition-all touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
        >
          <div
            key={current}
            className={`grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-stretch gap-8 lg:gap-14 carousel-slide-in-${slideDirection}`}
          >
            {/* Phone Image with offset border */}
            <div className="flex items-center justify-center">
              <div className="relative w-[220px] sm:w-[280px] aspect-[763/1600]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[18px] border-[3px] border-[#C97C7C] -z-0"
                />
                <div className="relative z-12 w-full h-full rounded-[18px] overflow-hidden bg-[#E1D3C1] shadow-md">
                  <Image
                    src={activeSlide.image}
                    alt={`Print da tela: ${activeSlide.title}`}
                    fill
                    className="object-contain transition-opacity duration-300"
                    sizes="(max-width: 768px) 240px, 280px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content & Navigation */}
            <div className="flex flex-col items-start justify-center md:h-full md:justify-between">
              <div>
                <span className="text-sm font-bold text-[#7D9773] tracking-widest uppercase mb-3">
                  {activeSlide.number}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4B2E1B] mb-4 leading-tight">
                  {activeSlide.title}
                </h3>
                <p className="text-base sm:text-lg text-[#3E3B37] leading-relaxed mb-8 opacity-90 max-w-xl">
                  {activeSlide.description}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-13 h-13 rounded-full border-2 border-[#4B2E1B] text-[#4B2E1B] flex items-center justify-center hover:bg-[#C97C7C] hover:border-[#C97C7C] hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  aria-label="Slide anterior"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-13 h-13 rounded-full bg-[#4B2E1B] border-2 border-[#4B2E1B] text-[#E1D3C1] flex items-center justify-center hover:bg-[#C97C7C] hover:border-[#C97C7C] hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  aria-label="Próximo slide"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {slides.map((slide, index) => {
            const isActive = index === current;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() =>
                  goToSlide(index, index > current ? "next" : "prev")
                }
                aria-label={`Ir para slide ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-9 bg-[#C97C7C]"
                    : "w-3 bg-[#4B2E1B]/30 hover:bg-[#4B2E1B]/60"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
