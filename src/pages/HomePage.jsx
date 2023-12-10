import { TbMoneybag, TbBrandSpeedtest, TbCar } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import '../components/styles/Home.css';
import Taxicard from "../components/TaxiCard";

const iconList = [
  { icon: <TbMoneybag className="text-8xl m-auto" />, title: 'Giá rẻ' },
  { icon: <TbBrandSpeedtest className="text-8xl m-auto" />, title: 'Nhanh chóng' },
  { icon: <TbCar className="text-8xl m-auto" />, title: 'Xe đời mới' },
  { icon: <MdHealthAndSafety className="text-8xl m-auto" />, title: 'Lái xe an toàn' },
];

const carPrice = [
  { type: 'Xe taxi 4 chỗ', price: '250.000' },
  { type: 'Xe taxi 7 chỗ', price: '300.000' },
  { type: 'Xe du lịch 16 chỗ', price: '500.000' },
];

const dichVu = [
  { text: 'Cho thuê xe đi công tác các tỉnh từ 4 chỗ, 4 chỗ có tài xế', img: 'src/assets/car-2.png' },
  { text: 'Cho thuê xe phục vụ đám cưới tại Khánh Hoà', img: 'src/assets/car-4.png' },
  { text: 'Cho thuê xe đưa đón sân bay Cam Ranh Nha Trang giá rẻ', img: 'src/assets/car-7.png' },
  { text: 'Cho thuê xe đi Tour trong tỉnh và ngoài tỉnh Khánh Hoà', img: 'src/assets/car-5.png' },
  { text: 'Cho thuê xe riêng đi về quê, đi tỉnh tại Nha Trang Khánh Hoà', img: 'src/assets/car-3.png' },
  { text: 'Cho thuê xe sự kiện, tổ chức sự kiện tại khu du lịch Nha Trang', img: 'src/assets/car-6.png' },
]

const taxiData = [
  {
    img: 'src/assets/z4935296259114_fac59cd901b401c2f6738eb13a37760c.jpg',
    title: 'Xe taxi 4 chỗ',
    price: '1,100,000đ'
  },
  {
    img: 'src/assets/z4935296050434_4ccb2e427eec861429bfffc3f64ef80d.jpg',
    title: 'Xe taxi 7 chỗ',
    price: '1,500,000đ'
  },
  {
    img: 'src/assets/z4912190560878_ee213bd83f6aff10547976526701a991.jpg',
    title: 'Xe taxi 16 chỗ ',
    price: '4,100,000đ'
  },
]

const Home = () => {

  return (
    <div className="bg-[#eaeaea]">
      <div>
        <img className="w-full" src="/src/assets/z4935296050434_4ccb2e427eec861429bfffc3f64ef80d.jpg" />
      </div>
      <section className="w-full bg-blue-300 p-9 text-white">
        <h1 className="text-5xl text-center font-bold">Xuân Vũ Travel</h1>
        <h1 className="text-center px-2 md:px-[6rem] py-3 md:py-8">Chuyên cho thuê xe hợp đồng, xe tour du lịch liên tỉnh Nha Trang đi Phan Thiết Mũi Né, Đà Lạt, Vĩnh Hy, Phan Rang, Tuy Hoà, Quy Nhơn,
          Sài Gòn, Đà Nẵng, Cho thuê xe từ 4 chỗ, 7 chỗ đến 45 chỗ, xe sân bay Cam Ranh</h1>
        <div className="flex mt-5">
          {iconList.map((item, index) => (
            <div key={index} className="w-1/4">
              {item.icon}
              <h1 className="text-xl text-center">{item.title}</h1>
            </div>
          ))}
        </div>
        <h1 className="text-center my-[2rem] text-5xl">BẢNG GIÁ CHO THUÊ XE</h1>
        <p className="text-center my-[2rem] text-xl">Loại xe Giá/Lượt</p>
        <div className="w-full   md:w-3/5 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-red-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  THUÊ XE MỘT CHIỀU
                </th>
                <th scope="col" className="px-6 py-3">
                  GIÁ (VNĐ)
                </th>
              </tr>
            </thead>
            <tbody>
              {carPrice.map((item, index) => (
                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.type}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.price}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className="w-full md:w-3/5 mx-auto mt-5">Bảng giá trên có thể điều chỉnh tăng 10% do giá xăng biến động</h1>
      </section>
      <section className="w-full bg-white py-3 md:py-12 px-2 md:px-[9rem]">
        <h1 className="text-4xl text-center font-bold">DỊCH VỤ THUÊ XE HỢP ĐỒNG GIÁ RẺ TẠI NHA TRANG</h1>
        <h1 className="text-center md:mx-[6rem] md:my-8 font-semibold">
          Cho thuê xe từ 4 chỗ, 7 chỗ đến 16 chỗ. Xe đời mới giá trọn gói không phát sinh phí dịch vụ.
        </h1>
        <div className="flex flex-wrap justify-between">
          {dichVu.map((item, index) => (
            <div key={index} className="w-full md:w-5/12">
              <div className={"flex items-center mb-[8px]" + `${index % 2 ? " flex-row-reverse" : ""}`}>
                <p className="m-[8px]">{item.text}</p>
                <div className="relative border-around max-w-[100px]">
                  <img className="p-[1rem]" src={item.img} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-6">
        <h1 className="text-5xl text-center font-bold">Taxi trọn gói tại Nha Trang</h1>
        <div className="flex justify-between flex-wrap">
          {taxiData.map((item, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[30%]" >
              <Taxicard img={item.img} title={item.title} price={item.price} />
            </div>
          ))}
        </div>

      </section>
    </div >

  )
}

export default Home;