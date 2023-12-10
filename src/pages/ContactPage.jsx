import CardInfo from "../components/CardInfo";
import CollapsibleItem from "../components/CollapsibleItem";

const infos = [{
  title: "Địa chỉ",
  description: "77/90 Nguyễn Chích, Phường Vĩnh Hòa, Nha Trang, Khánh Hòa"
}, {
  title: "Zalo",
  description: "0905433307 / 0944179121",

}, {
  title: "Liên hệ",
  description: "0905433307 / 0944179121"
}];

const collapData = [
  {
    title: "Tại sao nên đặt xe tại Xuân Vũ Travel",
    collapData: [
      "Xuân Vũ Travel là một trong những đơn vị lái xe giá rẻ - chất lượng tại Nha Trang.",
      "Đảm bảo xe an toàn về chất lượng và mẫu mã. Xe đời mới, được bão dưỡng định kỳ thường xuyên",
      "Đón khách tận nơi, thủ tục đặt xe nhanh chóng, giá cả phù hợp, đa dạng loại xe"
    ]
  },
  {
    title: "Thủ tục khi đặt xe tại Xuân Vũ Travel",
    collapData: [
      "Khi đặt xe chỉ cần liên hệ với Xuân Vũ Travel qua Zalo hoặc số điện thoại."
    ]
  },
  {
    title: "Thời gian đặt xe tại Xuân Vũ Travel",
    collapData: [
      "Khi đặt xe giữ chỗ chỉ cần liên hệ với Xuân Vũ Travel trước 2 đến 3 ngày."
    ]
  },


]
const Contact = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white p-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-4xl text-indigo-600">Liên hệ xe hợp đồng Nha Trang</p>
          <div className="flex row justify-center mt-12">
            {infos.map(info =>

              <div className="col-12 md:col-4 h-32">
                <CardInfo {...info} />
              </div>
            )}
          </div>
        </div>
      </main>
      <div className="mx-4 md:mx-[10rem]">
        <p className="pb-4 text-2xl font-bold">VỀ CHÚNG TÔI</p>
        <p>
          Xuân Vũ Travel luôn luôn có sự phát triển, điều đó có được là nhờ Quý khách hàng đã tin cậy,
          lựa chọn Xuân Vũ Travel làm bạn đồng hành cùng Quý khách trên mọi nẻo đường.
        </p>
      </div>
      <section className="mx-4 md:mx-[10rem] py-12">
        {collapData.map(data => (
          <CollapsibleItem {...data} />
        ))}
      </section>
    </>
  )
}

export default Contact;