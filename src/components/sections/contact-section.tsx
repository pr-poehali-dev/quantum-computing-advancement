import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Учащимся
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Буклет с полезной информацией</p>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Этот буклет создан специально для вас — учеников. Здесь вы найдёте полезные советы, упражнения и рекомендации по теме.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Используйте его как шпаргалку или руководство в своей учёбе и повседневной жизни.
              </p>
            </div>
          </div>

          {/* Right side - Key topics */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            {[
              { label: "Что важно знать", desc: "Основные факты и понятия по теме", direction: "right" },
              { label: "Практические советы", desc: "Как применять знания в жизни", direction: "left" },
              { label: "Дополнительные материалы", desc: "Ресурсы для самостоятельного изучения", direction: "right" },
            ].map((item, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div>
                    <div className="font-sans text-lg font-light text-foreground md:text-2xl">{item.label}</div>
                    <div className="font-mono text-xs text-foreground/60 md:text-sm">{item.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 transition-all duration-700 md:mt-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => window.open("#", "_blank")}>
            Скачать буклет для учащихся
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
