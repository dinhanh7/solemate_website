import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

const blogPosts = [
  {
    title: "Bàn chân bẹt là gì? Nguyên nhân và triệu chứng",
    excerpt: "Bàn chân bẹt là tình trạng lòng bàn chân phẳng hoặc gần như phẳng khi đứng...",
    image: blog1,
    source: "Vinmec",
    link: "#!",
  },
  {
    title: "Cách điều trị bàn chân bẹt hiệu quả",
    excerpt: "Có nhiều phương pháp điều trị bàn chân bẹt tùy thuộc vào mức độ nghiêm trọng...",
    image: blog2,
    source: "Vinmec",
    link: "#!",
  },
  {
    title: "Lựa chọn giày dép phù hợp cho người bàn chân bẹt",
    excerpt: "Việc lựa chọn giày dép phù hợp rất quan trọng đối với người có bàn chân bẹt...",
    image: blog3,
    source: "Vinmec",
    link: "#!",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="section-heading">Bài viết chuyên môn</h2>
        <p className="section-desc">
          Cập nhật những kiến thức mới nhất về hội chứng bàn chân bẹt
        </p>

        <div className="mt-16 relative">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {post.source}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all"
                  >
                    Đọc thêm
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
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

export default BlogSection;
