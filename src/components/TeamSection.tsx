import { ChevronLeft, ChevronRight } from "lucide-react";
import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";
import doctor3 from "@/assets/doctor3.jpg";

const doctors = [
  {
    name: "TS. BS. Nguyễn Văn An",
    specialty: "Chuyên gia chấn thương chỉnh hình",
    image: doctor1,
  },
  {
    name: "ThS. BS. Trần Thị Bình",
    specialty: "Bác sĩ phục hồi chức năng",
    image: doctor2,
  },
  {
    name: "BS. Lê Minh Châu",
    specialty: "Chuyên gia về bàn chân",
    image: doctor3,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-solemate-light">
      <div className="container">
        <h2 className="section-heading">Đội ngũ chuyên gia</h2>
        <p className="section-desc">
          Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm với nghề
        </p>

        <div className="mt-16 relative">
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.name}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    {doctor.name}
                  </h3>
                  <p className="text-muted-foreground mt-1">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
