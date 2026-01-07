import { ClipboardCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceImage from "@/assets/hero-image.jpg";

const services = [
	{
		icon: ClipboardCheck,
		title: "Hỗ trợ chẩn đoán",
		description:
			"Chúng tôi đo và kiểm tra tình trạng bàn chân của bạn, từ đó đưa ra những giải pháp điều trị phù hợp.",
	},
	{
		icon: Stethoscope,
		title: "Hỗ trợ kết nối tới các phòng khám",
		description:
			"Chúng tôi kết nối bạn tới những phòng khám hợp tác của Solemate, hỗ trợ thăm khám, điều trị với sự góp ý từ các bác sĩ, chuyên gia.",
	},
];

const ServiceSection = () => {
	return (
		<section id="solution" className="py-20 bg-background">
			<div className="container">
				<div className="text-center mb-16">
					<h2 className="section-heading">Giải pháp của chúng tôi</h2>
					<p className="section-desc">
						Chúng mong muốn giúp bạn cải thiện một cách tốt nhất hội chứng bàn chân
						bẹt
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Image Side */}
					<div className="animate-slide-in-left">
						<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group">
							<img
								src={serviceImage}
								alt="Dịch vụ Solemate"
								className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
					</div>

					{/* Content Side */}
					<div className="animate-slide-in-right space-y-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="flex gap-6 p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
							>
								<div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<service.icon className="w-7 h-7" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-foreground mb-3">
										{service.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{service.description}
									</p>
								</div>
							</div>
						))}

						<div className="pt-4 pl-4">
							<Button className="btn-primary">Xem tất cả giải pháp</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
