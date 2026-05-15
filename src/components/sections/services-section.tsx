import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Родителям
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Здоровый образ жизни для ваших детей</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {[
            {
              title: "Правильное питание",
              description: "Как организовать сбалансированный рацион ребёнка: полезные продукты, режим приёма пищи и советы по формированию здоровых пищевых привычек.",
              direction: "top",
            },
            {
              title: "Режим дня",
              description: "Почему важен чёткий распорядок дня, сколько часов сна необходимо школьнику и как правильно чередовать учёбу и отдых.",
              direction: "right",
            },
            {
              title: "Физическая активность",
              description: "Роль физкультуры и подвижных игр в развитии ребёнка. Нормы нагрузки и простые упражнения для занятий дома.",
              direction: "left",
            },
            {
              title: "Роль семьи в ЗОЖ",
              description: "Как родители могут стать примером здорового образа жизни и мотивировать детей заботиться о своём здоровье.",
              direction: "bottom",
            },
          ].map((item, i) => (
            <InfoCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>

        <div
          className={`mt-10 transition-all duration-700 md:mt-14 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => window.open("https://disk.yandex.ru/d/0m_6LbW8bo3Y-A", "_blank")}>
            Скачать буклет для родителей
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  item,
  index,
  isVisible,
}: {
  item: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (item.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{item.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{item.description}</p>
    </div>
  )
}