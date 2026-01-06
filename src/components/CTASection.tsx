import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Đặt lịch hẹn ngay hôm nay
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Để được tư vấn và điều trị bởi đội ngũ chuyên gia hàng đầu
          </p>
          <Button className="mt-8 bg-background text-primary hover:bg-background/90 px-8 py-6 text-lg rounded-full font-semibold">
            Liên hệ ngay
          </Button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground font-medium">0123 456 789</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground font-medium">contact@solemate.vn</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground font-medium">TP. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
