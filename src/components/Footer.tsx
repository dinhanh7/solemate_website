import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-heading font-bold">SOLEMATE</span>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Chuyên điều trị và cung cấp lót giày cho hội chứng bàn chân bẹt.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#!" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#!" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#!" className="text-background/70 hover:text-background transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#!" className="text-background/70 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#dudoan" className="hover:text-background transition-colors">Dự đoán bàn chân bẹt</a></li>
              <li><a href="#solution" className="hover:text-background transition-colors">Giải pháp</a></li>
              <li><a href="#quytrinh" className="hover:text-background transition-colors">Quy trình</a></li>
              <li><a href="#khac" className="hover:text-background transition-colors">Khác</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Giải pháp</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#!" className="hover:text-background transition-colors">Bán lót giày</a></li>
              <li><a href="#!" className="hover:text-background transition-colors">Chẩn đoán</a></li>
              <li><a href="#!" className="hover:text-background transition-colors">Tư vấn</a></li>
              <li><a href="#!" className="hover:text-background transition-colors">Đặt lịch hẹn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>0123 456 789</li>
              <li>contact@solemate.vn</li>
              <li>TP. Hồ Chí Minh, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>© 2024 SOLEMATE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
