import heroImage from "../assets/placeholder-landscape.svg"

const highlights = [
  {
    title: "Di sản Hiến pháp",
    description:
      "Hồ Chí Minh đã xây dựng nhà nước cách mạng trên nền tảng chủ quyền của nhân dân, đặt nền móng cho chủ nghĩa lập hiến hiện đại.",
  },
  {
    title: "Sự tham gia dân chủ",
    description:
      "Các thể chế phải phát triển từ ý chí của người dân, đảm bảo mọi công dân đều có thể đóng góp vào các quyết định quốc gia.",
  },
  {
    title: "Nhà nước lấy nhân dân làm trung tâm",
    description:
      "Cán bộ, công chức có nhiệm vụ bảo vệ sinh kế, công lý và bản sắc văn hóa cho toàn thể người dân Việt Nam.",
  },
]

const Home = () => {
  return (
    <section id="home" className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="overflow-hidden rounded-xl bg-paper-texture shadow-md ring-1 ring-[#d6c2a4]">
          <div className="grid gap-10 bg-gradient-to-br from-white/85 via-parchment/90 to-primary/10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
                Tường thuật lịch sử
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-midnight md:text-5xl">
                TƯ TƯỞNG HỒ CHÍ MINH VỀ NHÀ NƯỚC CỦA NHÂN DÂN, DO NHÂN DÂN, VÌ
                NHÂN DÂN
              </h2>
              <blockquote className="border-l-4 border-primary/40 pl-4 text-lg italic text-midnight/80">
                “Chế độ của chúng ta là chế độ của dân, do dân và vì dân.” — Hồ
                Chí Minh, 1945
              </blockquote>
              <p className="text-base leading-relaxed text-midnight/80">
                Khám phá quá trình phát triển lịch sử của tư tưởng dân chủ tại
                Việt Nam. Triển lãm này tái hiện những trụ cột tư tưởng đã định
                hình nên nhà nước Việt Nam hiện đại và làm nổi bật sự vận dụng
                của chúng qua nhiều thập kỷ xây dựng đất nước.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#ideology"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-light hover:text-slate-300"
                >
                  Khám phá tư tưởng
                </a>
                <a
                  href="#practice"
                  className="inline-flex items-center justify-center rounded-full border border-primary/60 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  Nhà nước pháp quyền
                </a>
              </div>
            </div>

            <figure className="relative flex items-center justify-center">
              <img
                src="https://a.tcnn.vn//Images/images/tcnn(2).jpg"
                alt="Placeholder for archival photograph illustrating democratic gatherings"
                className="relative z-10 max-w-lg rounded-lg shadow-md w-full h-auto object-contain"
              />
            </figure>
          </div>
        </div>

        <div className="space-y-8 pt-16">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
              Những trụ cột tư tưởng
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-midnight">
              Giá trị nền tảng của nhà nước dân chủ
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl bg-white/90 p-6 shadow-md ring-1 ring-primary/20 transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition" />

                <div className="relative space-y-3">
                  <h3 className="text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="leading-6 text-midnight/80">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
