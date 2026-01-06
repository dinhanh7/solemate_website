import { Search, MessageCircle, Calendar } from "lucide-react";

const workSteps = [
  {
    icon: Search,
    title: "Giải đáp thắc mắc",
    description: "Chúng tôi sẽ giải thích mọi thắc mắc liên quan đến hội chứng bàn chân bẹt.",
    link: "#!",
  },
  {
    icon: MessageCircle,
    title: "Tư vấn chuyên sâu",
    description: "Bác sĩ chuyên khoa sẽ tư vấn và đề xuất phương pháp điều trị phù hợp.",
    link: "#!",
  },
  {
    icon: Calendar,
    title: "Đặt lịch hẹn",
    description: "Đặt lịch để nhận được sự chăm sóc và điều trị tốt nhất từ chúng tôi.",
    link: "#!",
  },
];

const WorkProcessSection = () => {
  return (
    <section id="quytrinh" className="py-20 bg-solemate-light">
      <div className="container">
        <h2 className="section-heading">Các giai đoạn trong dịch vụ</h2>
        <p className="section-desc">
          Để có thể trải nghiệm dịch vụ của chúng tôi thì các bạn sẽ được tư vấn kĩ càng qua ba bước.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <div
              key={step.title}
              className="work-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {step.description}
              </p>
              <a
                href={step.link}
                className="text-primary font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
