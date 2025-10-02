import { useState } from "react"
import documentPlaceholder from "../assets/placeholder-document.svg"

const references = [
  {
    id: 1,
    title: "Kiểm soát quyền lực Nhà nước",
    detail: (
      <ul className="space-y-2">
        <li>
          <strong>Kiểm soát là tất yếu:</strong> Quyền lực là do nhân dân ủy
          thác, và nếu không kiểm soát, quyền lực có thể trở nên lạm quyền.
        </li>
        <li>
          <strong>Vai trò kiểm soát:</strong> Kiểm soát quyền lực phải được thực
          hiện thông qua hệ thống và quy trình chặt chẽ.{" "}
          <strong>Đảng, các cơ quan nhà nước, và nhân dân</strong> đều phải thực
          hiện chức năng kiểm soát quyền lực.
        </li>
        <li>
          <strong>Dân chủ và kiểm soát:</strong> Nhân dân là chủ thể tối cao của
          quyền lực, vì vậy phải được <strong>khuyến khích kiểm soát</strong>{" "}
          bằng cách "khéo kiểm soát".
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Phòng, chống tiêu cực trong Nhà nước",
    detail: (
      <>
        <p className="mb-2">
          Hồ Chí Minh cảnh báo nghiêm khắc về ba loại tệ nạn, gọi là{" "}
          <strong>"giặc nội xâm"</strong>:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Tham ô, lãng phí, quan liêu</strong>.
          </li>
          <li>
            <strong>Lãng phí</strong> là một căn bệnh mà Hồ Chí Minh lên án gay
            gắt, bao gồm lãng phí sức lao động, thời giờ, và tiền của.
          </li>
          <li>
            <strong>Quan liêu</strong> là bệnh gốc rễ, nó dẫn đến tham ô và lãng
            phí.
          </li>
        </ul>
        <p className="mt-2">
          Người yêu cầu phải <strong>kiên quyết chống lại các tệ nạn</strong>{" "}
          này để giữ cho Đảng và Nhà nước trong sạch, vững mạnh.
        </p>
      </>
    ),
  },
]

const References = () => {
  return (
    <section
      id="references"
      className="bg-parchment/85 px-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <header className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">
              Phần III
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Nhà nước trong sạch, vững mạnh
            </h2>
            <p className="leading-6 text-midnight/80">
              Để Nhà nước hoạt động hiệu quả, Hồ Chí Minh nhấn mạnh việc giữ cho
              bộ máy nhà nước luôn trong sạch, không tham nhũng, chống các tệ
              nạn.
            </p>
          </div>
        </header>

        <figure className="hidden h-full flex-col items-center justify-center gap-3 rounded-xl bg-parchment/70 text-xs text-midnight/70 md:flex">
          <img
            src="https://llct.1cdn.vn/2024/08/02/havip.com.vn-wp-content-uploads-2020-01-_5-nguyen-tac-xay-dung-dang-theo-tu-tuong-ho-chi-minh-1200x565.jpg"
            alt="Placeholder for document imagery"
            className="max-w-full rounded-xl shadow-md"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </figure>

        <div className="grid gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.title}
              className="rounded-xl ring-1 ring-primary/10 bg-white/95 p-8 transition shadow-md flex flex-col gap-5"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  {reference.id}
                </span>

                <h3 className="text-2xl font-semibold text-primary">
                  {reference.title}
                </h3>
              </div>

              <div className="leading-6 text-midnight/80">
                {reference.detail}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References
