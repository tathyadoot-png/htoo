import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { Users, Heart, BookOpen, Activity } from "lucide-react";

export type Lang = "hi" | "en";

interface ImpactSectionProps {
  lang: Lang;
}

const ImpactSection = ({ lang }: ImpactSectionProps) => {
  const isHi = lang === "hi";

  const stats = [
    {
      icon: <Users size={28} />,
      value: "500+",
      label: isHi ? "लोगों की सहायता" : "People Helped",
    },
    {
      icon: <BookOpen size={28} />,
      value: "100+",
      label: isHi ? "छात्र प्रोत्साहित" : "Students Supported",
    },
    {
      icon: <Activity size={28} />,
      value: "50+",
      label: isHi ? "कार्यक्रम आयोजित" : "Programs Conducted",
    },
    {
      icon: <Heart size={28} />,
      value: "10+",
      label: isHi ? "सामाजिक पहल" : "Social Initiatives",
    },
  ];

  return (
    <section className="w-full bg-bg py-16">

      {/* 🔥 Heading */}
      <div className="mb-12">
        <SectionHeading
          subtitle={
            isHi
              ? "हमारे प्रयासों की झलक"
              : "A Glimpse of Our Impact"
          }
          title={isHi ? "हमारा प्रभाव" : "Our Impact"}
        />
      </div>

      {/* Stats */}
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-border rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-secondary">
              {item.value}
            </h3>

            <p className="text-muted text-sm mt-1">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ImpactSection;