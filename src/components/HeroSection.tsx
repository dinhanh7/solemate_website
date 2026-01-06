import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Điều trị hội chứng{" "}
              <span className="text-solemate-orange">bàn chân bẹt</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Cung cấp các loại lót giày giúp bạn nâng cao sức khỏe của bàn chân. 
              Tư vấn trực tiếp từ bác sĩ chuyên khoa với công nghệ in 3D tiên tiến.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="btn-primary text-base">
                Đặt lịch hẹn
              </Button>
              <Button variant="outline" className="btn-outline text-base">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Điều trị bàn chân bẹt với lót giày chuyên dụng"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border/50">
                <p className="text-sm text-muted-foreground">Khách hàng hài lòng</p>
                <p className="text-2xl font-bold text-primary">1000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
