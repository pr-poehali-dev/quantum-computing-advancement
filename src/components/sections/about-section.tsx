import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16 lg:gap-24">
          {/* Left side - About teacher */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Обо мне
                <br />
                <span className="text-foreground/40">как будущем педагоге</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Меня зовут Орлова Анастасия Сергеевна, мне 20 лет. Учусь на 2 курсе педагогического колледжа при ЧГУ по специальности «Учитель начальных классов».
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Хочу работать в школе, потому что начальное образование — это фундамент, который определяет дальнейший путь каждого ребёнка. Уже работала вожатой с детьми младшего возраста в лагере и убедилась: это моё!
              </p>
            </div>

            <div
              className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-10 md:gap-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(2)}>
                Мои разработки
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(3)}>
                Буклет для родителей
              </MagneticButton>
            </div>
          </div>

          {/* Right side - Photo + Stats */}
          <div className="flex flex-col justify-center gap-8">
            {/* Photo */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://i.ibb.co/DfXfgH7m/Pb-Ae-TPq-DNz-TI0-Xq-Ac-Q-YJ8-Srf-I1a-Uwio-Pbuft-T-h-J1-TEM2-QZv-MP2-UBIRs-C38f7llj-qi-Uv-Px-F7-MYYYF-wfb.jpg"
                  alt="Орлова Анастасия Сергеевна"
                  className="h-64 w-full object-cover object-top md:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-4 md:gap-6">
              {[
                { value: "2", label: "Курс", sublabel: "Педагогический колледж при ЧГУ", direction: "right" },
                { value: "НК", label: "Специализация", sublabel: "Учитель начальных классов", direction: "left" },
                { value: "4", label: "Смены в лагере", sublabel: "По 14 дней, работа с детьми младшего возраста", direction: "right" },
              ].map((stat, i) => {
                const getRevealClass = () => {
                  if (!isVisible) {
                    return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                  }
                  return "translate-x-0 opacity-100"
                }

                return (
                  <div
                    key={i}
                    className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-6 md:pl-6 ${getRevealClass()}`}
                    style={{
                      transitionDelay: `${400 + i * 150}ms`,
                      marginLeft: i % 2 === 0 ? "0" : "auto",
                      maxWidth: i % 2 === 0 ? "100%" : "85%",
                    }}
                  >
                    <div className="text-2xl font-light text-foreground md:text-4xl">{stat.value}</div>
                    <div>
                      <div className="font-sans text-sm font-light text-foreground md:text-base">{stat.label}</div>
                      <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}