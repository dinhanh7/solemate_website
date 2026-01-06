import techImage from "@/assets/tech-3d.jpg";

const TechnologySection = () => {
  return (
    <section id="khac" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={techImage}
              alt="Công nghệ in 3D tiên tiến"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Công nghệ in 3D tiên tiến
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Chúng tôi sử dụng công nghệ in 3D hiện đại nhất để tạo ra những đế lót giày 
              phù hợp hoàn hảo với từng bàn chân của bạn.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-foreground">Đo đạc chính xác bằng công nghệ scan 3D</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-foreground">Thiết kế riêng cho từng khách hàng</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-foreground">Chất liệu cao cấp, độ bền vượt trội</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
