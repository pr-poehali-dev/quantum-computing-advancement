import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

const exercises = [
  {
    number: "01",
    title: "Упражнение 1",
    category: "Интерактивное задание",
    link: "#",
    direction: "left",
  },
  {
    number: "02",
    title: "Упражнение 2",
    category: "Практическая работа",
    link: "#",
    direction: "right",
  },
  {
    number: "03",
    title: "Упражнение 3",
    category: "Творческое задание",
    link: "#",
    direction: "left",
  },
  {
    number: "04",
    title: "Технологическая карта",
    category: "Внеурочное мероприятие",
    link: "#",
    direction: "right",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Разработки
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Упражнения и тех. карта внеурочного мероприятия</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {exercises.map((item, i) => (
            <ExerciseCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExerciseCard({
  item,
  index,
  isVisible,
}: {
  item: { number: string; title: string; category: string; link: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/30 md:py-6 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "92%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {item.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {item.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{item.category}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-foreground/30 transition-all group-hover:text-foreground/70 group-hover:translate-x-1">
        <Icon name="ExternalLink" size={16} />
      </div>
    </a>
  )
}
