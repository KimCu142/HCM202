import documentPlaceholder from '../assets/placeholder-document.svg'

const references = [
  {
    title: 'Kiểm soát quyền lực Nhà nước',
    detail: (
      <ul className="space-y-2">
        <li><strong>Kiểm soát là tất yếu:</strong> Quyền lực là do nhân dân ủy thác, và nếu không kiểm soát, quyền lực có thể trở nên lạm quyền.</li>
        <li><strong>Vai trò kiểm soát:</strong> Kiểm soát quyền lực phải được thực hiện thông qua hệ thống và quy trình chặt chẽ. <strong>Đảng, các cơ quan nhà nước, và nhân dân</strong> đều phải thực hiện chức năng kiểm soát quyền lực.</li>
        <li><strong>Dân chủ và kiểm soát:</strong> Nhân dân là chủ thể tối cao của quyền lực, vì vậy phải được <strong>khuyến khích kiểm soát</strong> bằng cách "khéo kiểm soát".</li>
      </ul>
    ),
    type: '1',
  },
  {
    title: 'Phòng, chống tiêu cực trong Nhà nước',
    detail: (
      <>
        <p className="mb-2">Hồ Chí Minh cảnh báo nghiêm khắc về ba loại tệ nạn, gọi là <strong>"giặc nội xâm"</strong>:</p>
        <ul className="space-y-2">
          <li><strong>Tham ô, lãng phí, quan liêu</strong>.</li>
          <li><strong>Lãng phí</strong> là một căn bệnh mà Hồ Chí Minh lên án gay gắt, bao gồm lãng phí sức lao động, thời giờ, và tiền của.</li>
          <li><strong>Quan liêu</strong> là bệnh gốc rễ, nó dẫn đến tham ô và lãng phí.</li>
        </ul>
        <p className="mt-2">Người yêu cầu phải <strong>kiên quyết chống lại các tệ nạn</strong> này để giữ cho Đảng và Nhà nước trong sạch, vững mạnh.</p>
      </>
    ),
    type: '2',
  },
]

const References = () => {
  return (
    <section id="references" className="bg-parchment/85 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="grid gap-6 rounded-3xl bg-white/90 p-8 shadow-lg ring-1 ring-primary/10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Phần III</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Nhà nước trong sạch, vững mạnh</h2>
            <p className="text-sm leading-relaxed text-midnight/80">
              Để Nhà nước hoạt động hiệu quả, Hồ Chí Minh nhấn mạnh việc giữ cho bộ máy nhà nước luôn trong sạch, không tham nhũng, chống các tệ nạn.
            </p>
          </div>
          <figure className="hidden h-full flex-col items-center justify-center gap-3 rounded-2xl border border-primary/15 bg-parchment/70 p-4 text-xs text-midnight/70 md:flex">
            <img src="https://llct.1cdn.vn/2024/08/02/havip.com.vn-wp-content-uploads-2020-01-_5-nguyen-tac-xay-dung-dang-theo-tu-tuong-ho-chi-minh-1200x565.jpg" alt="Placeholder for document imagery" />
          </figure>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.title}
              className="rounded-3xl border border-primary/10 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{reference.type}</p>
              <h3 className="mt-2 text-xl font-semibold text-midnight">{reference.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-midnight/80">{reference.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References
