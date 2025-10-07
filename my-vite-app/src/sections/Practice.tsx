const practiceTimeline = [
  {
    id: 1,
    period: "1945–1946",
    title: "Nhà nước hợp hiến, hợp pháp",
    description:
      "Người đã lãnh đạo việc thành lập Chính phủ lâm thời, tổ chức Tổng tuyển cử (tháng 1/1946) và ban hành Hiến pháp (Hiến pháp 1946 và 1959) để xây dựng nền tảng pháp lý và bảo đảm quyền dân chủ.",
    imageHint:
      "Insert an image of the 2013 Constitution or the National Assembly building.",
  },
  {
    id: 2,
    period: "1946–1969",
    title: "Nhà nước hợp hiến, hợp pháp",
    description: (
      <ul className="space-y-2">
        <li>
          <strong>Pháp luật là công cụ quyền lực:</strong> Pháp luật vừa là công
          cụ quyền lực của nhân dân, vừa là phương tiện để kiểm soát quyền lực
          nhà nước.
        </li>
        <li>
          <strong>Tăng cường pháp chế:</strong> Nhà nước phải quản lý bằng Hiến
          pháp và pháp luật, không dùng biện pháp mệnh lệnh để quản lý.
        </li>
        <li>
          <strong>Tuân thủ pháp luật:</strong> Yêu cầu toàn thể nhân dân và đặc
          biệt là cán bộ nhà nước phải{" "}
          <strong>tôn trọng, tuân thủ pháp luật</strong>T. Cán bộ, các cấp phải{" "}
          <strong>gương mẫu chấp hành Hiến pháp và pháp luật</strong>T.
        </li>
      </ul>
    ),
    imageHint:
      "Add photos of one-stop service centres or digital government interfaces.",
  },
  {
    id: 3,
    period: "Xuyên suốt",
    title: "Pháp quyền nhân nghĩa",
    description:
      'Tư tưởng "Pháp quyền nhân nghĩa" là nhà nước phải tôn trọng, bảo đảm và thực hiện đầy đủ các quyền con người, chăm lo lợi ích của mọi người. Pháp luật phải có tính nhân văn, khuyến thiện, và bảo vệ công bằng xã hội.',
    imageHint:
      "Consider using images from Party Congresses or legal reform workshops.",
  },
]

const Practice = () => {
  return (
    <section id="practice" className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <header className="space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/80">
            Phần II
          </p>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Nhà nước pháp quyền
          </h2>
          <p className="text-base leading-relaxed text-midnight/80 md:max-w-3xl">
            Hồ Chí Minh luôn chú trọng xây dựng Nhà nước dựa trên nền tảng pháp
            lý vững chắc, thượng tôn pháp luật và mang tính nhân nghĩa.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <ol className="relative space-y-12 border-l-2 border-primary/20 pl-8">
            {practiceTimeline.map((item) => (
              <li
                key={item.title}
                className="relative rounded-xl bg-white/90 p-6 shadow-md ring-1 ring-primary/10"
              >
                <span className="absolute -left-[1.125rem] top-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-semibold">
                  {item.id}
                </span>

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black">
                    {item.period}
                  </p>
                  <h3 className="text-2xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <div className="leading-6 text-midnight/80">
                    {item.description}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <aside className="sticky top-32 hidden lg:flex flex-col gap-4 rounded-xl bg-paper-texture p-6 shadow-xl ring-1 ring-[#d6c2a4]">
            <h3 className="text-2xl font-semibold text-primary">
              Nhà nước pháp quyền
            </h3>
            <p className="leading-6 text-midnight/80">
              Hồ Chí Minh luôn chú trọng xây dựng Nhà nước dựa trên nền tảng
              pháp lý vững chắc, thượng tôn pháp luật và mang tính nhân nghĩa.
            </p>
            <figure className="overflow-hidden rounded-xl border border-primary/20 bg-white/80">
              <img
                src="data:image/jpeg;base64,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"
                alt="Placeholder collage for contemporary applications"
                className="w-full"
              />
              <figcaption className="px-4 py-3 text-center text-xs text-midnight/70">
                Chủ tịch Hồ Chí Minh ký Sắc lệnh số 22/SL ngày 25/2/1946, ban
                hành Hiến pháp năm 1946
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Practice
