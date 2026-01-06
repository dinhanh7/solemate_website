import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FlatFootCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [midfootWidth, setMidfootWidth] = useState("");
  const [rearfootWidth, setRearfootWidth] = useState("");
  const [result, setResult] = useState<number | null>(null);

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
    setGender("male");
    setMidfootWidth("");
    setRearfootWidth("");
    setResult(null);
  };

  const getResultCategory = (pi: number) => {
    if (pi <= 0.61) return { label: "Rất tốt", color: "text-green-600", bgColor: "bg-green-500" };
    if (pi <= 0.67) return { label: "Tốt", color: "text-lime-600", bgColor: "bg-lime-500" };
    if (pi <= 1.15) return { label: "Dưới trung bình", color: "text-yellow-600", bgColor: "bg-yellow-500" };
    return { label: "Có nguy cơ bàn chân bẹt", color: "text-red-600", bgColor: "bg-red-500" };
  };

  const getGaugeRotation = (pi: number) => {
    // Map PI value (0-1.5) to rotation (-90 to 90 degrees)
    const clampedPI = Math.min(Math.max(pi, 0), 1.5);
    return -90 + (clampedPI / 1.5) * 180;
  };

  return (
    <section id="dudoan" className="pt-32 pb-20 md:pt-40 bg-solemate-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Dự đoán bệnh bàn chân bẹt</h2>
          <p className="section-desc">
            Nhập các thông số để tính chỉ số Plantar Index (PI) và đánh giá nguy cơ bàn chân bẹt
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground py-4 px-6 text-center">
            <p className="font-medium">Nhập thông số và nhấn nút Tính toán để xem kết quả</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Form */}
            <div className="p-8 border-r border-border">
              <div className="space-y-6">
                {/* Age */}
                <div className="flex items-center gap-4">
                  <Label className="w-32 text-foreground font-medium">Tuổi</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-24 text-center"
                      placeholder="25"
                      min="2"
                      max="120"
                    />
                    <span className="text-muted-foreground text-sm">tuổi: 2 - 120</span>
                  </div>
                </div>

                {/* Gender */}
                <div className="flex items-center gap-4">
                  <Label className="w-32 text-foreground font-medium">Giới tính</Label>
                  <RadioGroup value={gender} onValueChange={setGender} className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Nam</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Nữ</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Midfoot Width (A) */}
                <div className="flex items-center gap-4">
                  <Label className="w-32 text-foreground font-medium leading-tight">
                    Chiều rộng phần hẹp nhất giữa bàn chân (A)
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={midfootWidth}
                      onChange={(e) => setMidfootWidth(e.target.value)}
                      className="w-24 text-center"
                      placeholder="5.5"
                      step="0.1"
                      min="0"
                    />
                    <span className="text-muted-foreground text-sm">cm</span>
                  </div>
                </div>

                {/* Rearfoot Width (B) */}
                <div className="flex items-center gap-4">
                  <Label className="w-32 text-foreground font-medium leading-tight">
                    Chiều rộng phần rộng nhất gót chân (B)
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={rearfootWidth}
                      onChange={(e) => setRearfootWidth(e.target.value)}
                      className="w-24 text-center"
                      placeholder="8.5"
                      step="0.1"
                      min="0"
                    />
                    <span className="text-muted-foreground text-sm">cm</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button onClick={calculatePI} className="btn-primary flex items-center gap-2">
                    <span>Tính toán</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </Button>
                  <Button onClick={clearForm} variant="secondary" className="px-6">
                    Xóa
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Result */}
            <div className="p-8 bg-background">
              <h3 className="text-xl font-bold text-primary mb-2">Kết quả</h3>
              
              {result !== null ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">PI = {result}</span>
                    <span className={`ml-2 text-lg font-semibold ${getResultCategory(result).color}`}>
                      ({getResultCategory(result).label})
                    </span>
                  </div>

                  {/* Gauge */}
                  <div className="relative w-64 h-40 mx-auto">
                    {/* Background arc segments */}
                    <svg viewBox="0 0 200 120" className="w-full h-full">
                      {/* Very Good - Green (0 - 0.61) */}
                      <path
                        d="M 20 100 A 80 80 0 0 1 53 35"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="24"
                        strokeLinecap="butt"
                      />
                      {/* Good - Lime (0.61 - 0.67) */}
                      <path
                        d="M 53 35 A 80 80 0 0 1 70 25"
                        fill="none"
                        stroke="#84cc16"
                        strokeWidth="24"
                        strokeLinecap="butt"
                      />
                      {/* Below Average - Yellow (0.67 - 1.15) */}
                      <path
                        d="M 70 25 A 80 80 0 0 1 147 35"
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="24"
                        strokeLinecap="butt"
                      />
                      {/* Bad - Red (> 1.15) */}
                      <path
                        d="M 147 35 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="24"
                        strokeLinecap="butt"
                      />
                      
                      {/* Center text */}
                      <text x="100" y="85" textAnchor="middle" className="text-2xl font-bold fill-primary">
                        PI = {result}
                      </text>
                      
                      {/* Needle */}
                      <g transform={`rotate(${getGaugeRotation(result)}, 100, 100)`}>
                        <line x1="100" y1="100" x2="100" y2="30" stroke="#1C3D7A" strokeWidth="3" />
                        <circle cx="100" cy="100" r="8" fill="#1C3D7A" />
                      </g>
                    </svg>
                  </div>

                  {/* Legend */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-green-500"></span>
                      <span>Rất tốt: 0 - 0.61</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-lime-500"></span>
                      <span>Tốt: 0.61 - 0.67</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-yellow-500"></span>
                      <span>Dưới trung bình: 0.67 - 1.15</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-red-500"></span>
                      <span>Có nguy cơ bàn chân bẹt: &gt; 1.15</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <p>Nhập thông số và nhấn "Tính toán"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="max-w-5xl mx-auto mt-8 bg-card rounded-xl p-6 border border-border">
          <h4 className="font-bold text-foreground mb-3">Hướng dẫn tự thu thập số đo tại nhà</h4>
          <p className="text-muted-foreground mb-4">
            Để có kết quả chính xác, bạn cần chuẩn bị giấy trắng, mực (mực dấu hoặc sơn nước) và thực hiện theo các bước sau:
          </p>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-primary mb-2">Bước 1: Tạo dấu chân (Footprint)</h5>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li><strong>Chuẩn bị:</strong> Đặt tờ giấy trắng lên một mặt phẳng cứng và khô.</li>
                <li><strong>Lấy mực:</strong> Ngồi xuống và bôi mực hoặc sơn đều lên toàn bộ lòng bàn chân của bạn.</li>
                <li><strong>Tạo dấu:</strong> Đứng thẳng lên tờ giấy, dồn đều trọng lượng cơ thể lên cả hai chân (mỗi chân chịu khoảng 50% trọng lượng).</li>
                <li><strong>Lưu ý quan trọng:</strong> Hãy hơi khuỵu đầu gối khoảng 30 độ khi đang đứng trên giấy để mô phỏng áp lực lên vòm chân giống như khi bạn đang bước đi.</li>
                <li><strong>Hoàn tất:</strong> Nhấc chân thẳng lên để tránh làm nhòe dấu chân.</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-primary mb-2">Bước 2: Xác định các thông số đo đạc</h5>
              <p className="text-muted-foreground mb-2">Sử dụng thước kẻ và bút để đo trực tiếp trên dấu chân (đơn vị tính: cm, quy đổi từ mm nếu cần):</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li><strong>Đường tham chiếu:</strong> Kẻ một đường thẳng tiếp tuyến nối mép trong gót chân và mép trong phần xương bàn chân trước.</li>
                <li><strong>Số đo A (Vùng vòm):</strong> Xác định điểm giữa của đường tiếp tuyến vừa kẻ, từ điểm đó kẻ một đường vuông góc cắt ngang qua dấu chân. Chiều dài đoạn thẳng này (phần hẹp nhất ở giữa bàn chân) là A.</li>
                <li><strong>Số đo B (Vùng gót):</strong> Kẻ một đường vuông góc với đường tiếp tuyến tại điểm tiếp xúc ở gót chân. Chiều dài đoạn thẳng này (phần rộng nhất của gót chân) là B.</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg mt-2">
              <p className="text-sm text-muted-foreground">
                <strong>Mẹo nhỏ:</strong> Để kết quả chính xác nhất, bạn nên thực hiện phép đo cho cả hai chân vì chỉ số vòm chân có thể khác nhau giữa chân trái và chân phải.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlatFootCalculator;
