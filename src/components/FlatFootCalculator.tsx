import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FlatFootCalculator = () => {
  const [age, setAge] = useState("");
  const [midfootWidth, setMidfootWidth] = useState("");
  const [rearfootWidth, setRearfootWidth] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const calculatePI = () => {
    const a = parseFloat(midfootWidth);
    const b = parseFloat(rearfootWidth);
    
    if (a > 0 && b > 0) {
      const pi = a / b;
      setResult(Math.round(pi * 100) / 100);
    }
  };

  const clearForm = () => {
    setAge("");
    setMidfootWidth("");
    setRearfootWidth("");
    setResult(null);
  };

  const isChildUnder4 = age !== "" && parseInt(age) < 4;

  const getResultCategory = (pi: number) => {
    if (pi < 0.61) return { 
      label: "Vòm cao", 
      color: "text-blue-600", 
      bgColor: "bg-blue-500", 
      recommendation: "Cần kiểm tra nếu người dùng thấy khó khăn khi vận động." 
    };
    if (pi <= 0.67) return { 
      label: "Bình thường", 
      color: "text-green-600", 
      bgColor: "bg-green-500", 
      recommendation: "Cấu trúc vòm chân lý tưởng." 
    };
    if (pi <= 1.15) return { 
      label: "Vòm thấp / Bình thường", 
      color: "text-yellow-600", 
      bgColor: "bg-yellow-500", 
      recommendation: "Nằm trong ngưỡng an toàn nhưng cần theo dõi nếu có đau chân." 
    };
    return { 
      label: "Bàn chân bẹt", 
      color: "text-red-600", 
      bgColor: "bg-red-500", 
      recommendation: "Khuyên người dùng nên đi khám lâm sàng." 
    };
  };

  const getGaugeRotation = (pi: number) => {
    // Map PI value (0-1.5) to rotation (-90 to 90 degrees)
    const clampedPI = Math.min(Math.max(pi, 0), 1.5);
    return -90 + (clampedPI / 1.5) * 180;
  };

  return (
    <section id="dudoan" className="pt-32 pb-20 md:pt-40 bg-solemate-light">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Dự đoán bệnh bàn chân bẹt</h2>
          <p className="section-desc">
            Nhập các thông số để tính chỉ số Plantar Index (PI) và đánh giá nguy cơ bàn chân bẹt
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground py-4 px-4 md:px-6 text-center">
            <p className="font-medium text-sm md:text-base">Nhập thông số và nhấn nút Tính toán để xem kết quả</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left side - Form */}
            <div className="p-4 md:p-8 md:border-r border-border">
              <div className="space-y-4 md:space-y-6">
                {/* Age */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <Label className="md:w-32 text-foreground font-medium text-sm">Tuổi</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-20 md:w-24 text-center"
                      placeholder="10"
                      min="2"
                      max="120"
                    />
                    <span className="text-muted-foreground text-xs md:text-sm">tuổi: 2 - 120</span>
                  </div>
                </div>

                {isChildUnder4 && (
                  <div className="p-3 bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-md text-xs md:text-sm">
                    Trẻ dưới 4 tuổi đang trong giai đoạn phát triển vòm chân, chỉ số này chỉ mang tính chất tham khảo và có độ biến thiên cao.
                  </div>
                )}

                {/* Midfoot Width (A) */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <Label className="md:w-32 text-foreground font-medium leading-tight text-sm">
                    Chiều rộng phần hẹp nhất giữa bàn chân (A)
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={midfootWidth}
                      onChange={(e) => setMidfootWidth(e.target.value)}
                      className="w-20 md:w-24 text-center"
                      placeholder="35"
                      step="1"
                      min="0"
                    />
                    <span className="text-muted-foreground text-xs md:text-sm">mm</span>
                  </div>
                </div>

                {/* Rearfoot Width (B) */}
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <Label className="md:w-32 text-foreground font-medium leading-tight text-sm">
                    Chiều rộng phần rộng nhất gót chân (B)
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={rearfootWidth}
                      onChange={(e) => setRearfootWidth(e.target.value)}
                      className="w-20 md:w-24 text-center"
                      placeholder="55"
                      step="1"
                      min="0"
                    />
                    <span className="text-muted-foreground text-xs md:text-sm">mm</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                  <Button onClick={calculatePI} className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base">
                    <span>Tính toán</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </Button>
                  <Button onClick={clearForm} variant="secondary" className="px-6 text-sm md:text-base">
                    Xóa
                  </Button>
                </div>

                {/* Instructions Toggle Button */}
                <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 mt-3 md:mt-4 text-sm md:text-base"
                    >
                      <span>Bạn chưa biết cách đo? Xem hướng dẫn</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-lg md:text-xl font-bold text-primary">
                        Hướng dẫn tự thu thập số đo tại nhà
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                      {/* Left side - Instructions */}
                      <div>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base">
                          Để có kết quả chính xác, bạn cần chuẩn bị giấy trắng, mực (mực dấu hoặc sơn nước) và thực hiện theo các bước sau:
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-primary mb-2 text-sm md:text-base">Bước 1: Tạo dấu chân (Footprint)</h5>
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5 text-sm md:text-base">
                              <li><strong>Chuẩn bị:</strong> Đặt tờ giấy trắng lên một mặt phẳng cứng và khô.</li>
                              <li><strong>Lấy mực:</strong> Ngồi xuống và bôi mực hoặc sơn đều lên toàn bộ lòng bàn chân của bạn.</li>
                              <li><strong>Tạo dấu:</strong> Đứng thẳng lên tờ giấy, dồn đều trọng lượng cơ thể lên cả hai chân (mỗi chân chịu khoảng 50% trọng lượng).</li>
                              <li><strong>Lưu ý quan trọng:</strong> Hãy hơi khuỵu đầu gối khoảng 30 độ khi đang đứng trên giấy để mô phỏng áp lực lên vòm chân giống như khi bạn đang bước đi.</li>
                              <li><strong>Hoàn tất:</strong> Nhấc chân thẳng lên để tránh làm nhòe dấu chân.</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-primary mb-2 text-sm md:text-base">Bước 2: Xác định các thông số đo đạc</h5>
                            <p className="text-muted-foreground mb-2 text-sm md:text-base">Sử dụng thước kẻ và bút để đo trực tiếp trên dấu chân (đơn vị tính: mm):</p>
                            <ul className="space-y-2 text-muted-foreground list-disc pl-5 text-sm md:text-base">
                              <li><strong>Đường tham chiếu:</strong> Kẻ một đường thẳng tiếp tuyến nối mép trong gót chân và mép trong phần xương bàn chân trước.</li>
                              <li><strong>Số đo A (Vùng vòm):</strong> Xác định điểm giữa của đường tiếp tuyến vừa kẻ, từ điểm đó kẻ một đường vuông góc cắt ngang qua dấu chân. Chiều dài đoạn thẳng này (phần hẹp nhất ở giữa bàn chân) là A.</li>
                              <li><strong>Số đo B (Vùng gót):</strong> Kẻ một đường vuông góc với đường tiếp tuyến tại điểm tiếp xúc ở gót chân. Chiều dài đoạn thẳng này (phần rộng nhất của gót chân) là B.</li>
                            </ul>
                          </div>

                          <div className="bg-primary/5 p-4 rounded-lg mt-2">
                            <p className="text-xs md:text-sm text-muted-foreground">
                              <strong>Mẹo nhỏ:</strong> Để kết quả chính xác nhất, bạn nên thực hiện phép đo cho cả hai chân vì chỉ số vòm chân có thể khác nhau giữa chân trái và chân phải.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Image */}
                      <div className="flex items-center justify-center">
                        <div className="rounded-xl overflow-hidden shadow-lg border border-border w-full">
                          <img
                            src="/src/assets/huong_dan_do.jpg"
                            alt="Hướng dẫn đo bàn chân"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Right side - Result */}
            <div className="p-4 md:p-8 bg-background border-t md:border-t-0 border-border">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Kết quả</h3>
              
              <div className="space-y-4">
                {result !== null && (
                  <div className="text-center">
                    <span className="text-xl md:text-2xl font-bold text-primary">PI = {result}</span>
                    <span className={`ml-2 text-base md:text-lg font-semibold ${getResultCategory(result).color}`}>
                      ({getResultCategory(result).label})
                    </span>
                    <p className="mt-2 text-xs md:text-sm text-foreground/80 font-medium px-2 md:px-4">
                      {getResultCategory(result).recommendation}
                    </p>
                  </div>
                )}

                {/* Gauge - Always visible */}
                <div className="relative w-full max-w-64 h-32 md:h-40 mx-auto">
                  <svg viewBox="0 0 200 120" className="w-full h-full">
                    {/* Vòm cao - Blue (< 0.61) */}
                    <path
                      d="M 20 100 A 80 80 0 0 1 53 35"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="24"
                      strokeLinecap="butt"
                    />
                    {/* Bình thường - Green (0.61 - 0.67) */}
                    <path
                      d="M 53 35 A 80 80 0 0 1 70 25"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="24"
                      strokeLinecap="butt"
                    />
                    {/* Vòm thấp - Yellow (0.68 - 1.15) */}
                    <path
                      d="M 70 25 A 80 80 0 0 1 147 35"
                      fill="none"
                      stroke="#eab308"
                      strokeWidth="24"
                      strokeLinecap="butt"
                    />
                    {/* Bàn chân bẹt - Red (> 1.15) */}
                    <path
                      d="M 147 35 A 80 80 0 0 1 180 100"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="24"
                      strokeLinecap="butt"
                    />
                    
                    {/* Center text */}
                    {result !== null ? (
                      <text x="100" y="85" textAnchor="middle" className="text-xl md:text-2xl font-bold fill-primary">
                        PI = {result}
                      </text>
                    ) : (
                      <text x="100" y="85" textAnchor="middle" className="text-base md:text-lg fill-muted-foreground">
                        Chờ tính toán
                      </text>
                    )}
                    
                    {/* Needle - Only show when result exists */}
                    {result !== null && (
                      <g transform={`rotate(${getGaugeRotation(result)}, 100, 100)`}>
                        <line x1="100" y1="100" x2="100" y2="30" stroke="#1C3D7A" strokeWidth="3" />
                        <circle cx="100" cy="100" r="8" fill="#1C3D7A" />
                      </g>
                    )}
                  </svg>
                </div>

                {/* Legend */}
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-blue-500 flex-shrink-0"></span>
                    <span>Vòm cao: &lt; 0.61</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-green-500 flex-shrink-0"></span>
                    <span>Bình thường: 0.61 - 0.67</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-yellow-500 flex-shrink-0"></span>
                    <span>Vòm thấp / Bình thường: 0.68 - 1.15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-red-500 flex-shrink-0"></span>
                    <span>Bàn chân bẹt: &gt; 1.15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions - Conditionally rendered */}
        {/* {showInstructions && (
          <div className="max-w-5xl mx-auto mt-8 bg-card rounded-xl p-4 md:p-6 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left side - Instructions */}
              {/* <div>
                <h4 className="font-bold text-foreground mb-3 text-base md:text-lg">Hướng dẫn tự thu thập số đo tại nhà</h4>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  Để có kết quả chính xác, bạn cần chuẩn bị giấy trắng, mực (mực dấu hoặc sơn nước) và thực hiện theo các bước sau:
                </p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-2 text-sm md:text-base">Bước 1: Tạo dấu chân (Footprint)</h5>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5 text-sm md:text-base">
                      <li><strong>Chuẩn bị:</strong> Đặt tờ giấy trắng lên một mặt phẳng cứng và khô.</li>
                      <li><strong>Lấy mực:</strong> Ngồi xuống và bôi mực hoặc sơn đều lên toàn bộ lòng bàn chân của bạn.</li>
                      <li><strong>Tạo dấu:</strong> Đứng thẳng lên tờ giấy, dồn đều trọng lượng cơ thể lên cả hai chân (mỗi chân chịu khoảng 50% trọng lượng).</li>
                      <li><strong>Lưu ý quan trọng:</strong> Hãy hơi khuỵu đầu gối khoảng 30 độ khi đang đứng trên giấy để mô phỏng áp lực lên vòm chân giống như khi bạn đang bước đi.</li>
                      <li><strong>Hoàn tất:</strong> Nhấc chân thẳng lên để tránh làm nhòe dấu chân.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-primary mb-2 text-sm md:text-base">Bước 2: Xác định các thông số đo đạc</h5>
                    <p className="text-muted-foreground mb-2 text-sm md:text-base">Sử dụng thước kẻ và bút để đo trực tiếp trên dấu chân (đơn vị tính: mm):</p>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5 text-sm md:text-base">
                      <li><strong>Đường tham chiếu:</strong> Kẻ một đường thẳng tiếp tuyến nối mép trong gót chân và mép trong phần xương bàn chân trước.</li>
                      <li><strong>Số đo A (Vùng vòm):</strong> Xác định điểm giữa của đường tiếp tuyến vừa kẻ, từ điểm đó kẻ một đường vuông góc cắt ngang qua dấu chân. Chiều dài đoạn thẳng này (phần hẹp nhất ở giữa bàn chân) là A.</li>
                      <li><strong>Số đo B (Vùng gót):</strong> Kẻ một đường vuông góc với đường tiếp tuyến tại điểm tiếp xúc ở gót chân. Chiều dài đoạn thẳng này (phần rộng nhất của gót chân) là B.</li>
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg mt-2">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      <strong>Mẹo nhỏ:</strong> Để kết quả chính xác nhất, bạn nên thực hiện phép đo cho cả hai chân vì chỉ số vòm chân có thể khác nhau giữa chân trái và chân phải.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              {/* <div className="flex items-center justify-center">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border w-full">
                  <img
                    src="/src/assets/huong_dan_do.jpg"
                    alt="Hướng dẫn đo bàn chân"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default FlatFootCalculator;
