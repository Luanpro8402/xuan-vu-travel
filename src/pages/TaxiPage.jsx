import TableData from "../components/TableData";
import Taxicard from "../components/TaxiCard";

const priceTableData = {
  title: 'Giá xe 4 chỗ, 7 chỗ, xe 16 chỗ sân bay Cam Ranh về Nha Trang',
  headers: ['Lộ trình', 'Km', 'xe 4 chỗ', 'xe 7 chỗ', 'xe 16 chỗ'],
  data: [
    ['Đặt taxi sân bay Cam Ranh về Nha Trang (trung tâm)', '36', '250k', '300k', '500k'],
    ['Đặt taxi sân bay Cam Ranh về Vinpearl', '38', '250k', '300k', '500k'],
    ['Đặt taxi sân bay Cam Ranh về Nha Trang (phía bắc TP)', '40-45', '300k', '350k', '550k'],
    ['Đặt taxi sân bay Cam Ranh về Amiana', '45', '320k', '370k', '600k'],
  ]
}

const taxiData = [
  {
    img: '/car/car_international.jpg',
    title: 'Xe taxi 4 chỗ',
    price: '1,100,000đ'
  },
  {
    img: '/car/car_parking.jpg',
    title: 'Xe taxi 7 chỗ',
    price: '1,500,000đ'
  },
  {
    img: '/car/car_far_light.jpg',
    title: 'Xe taxi 16 chỗ ',
    price: '4,100,000đ'
  },
]

const TaxiPage = () => {
  return (
    <div className="w-full md:w-[80%] m-auto">
      <div className="sm:w-5/6 md:w-11/12 mx-auto">
        <h1 className="text-4xl text-center font-bold p-6">Taxi Xuân Vũ Travel</h1>
        <p>Khoảng cách di chuyển từ sân bay Cam Ranh đến trung tâm thành phố Nha Trang là 36km,
          thời gian di chuyển trung bình là 45 phút. Có mặt nhanh chóng, dịch vụ thân thiện ...
          Xuân Vũ Travel sẽ giúp bạn có một trải nghiệm tuyệt vời khi đặt chân đến Nha Trang.
          Liên hệ: 0944 179 121 để được hỗ trợ ngay lập tức.
        </p>
      </div>
      <div className="sm:w-5/6 md:w-11/12 mx-auto">
        <TableData {...priceTableData} />
      </div>
      <div className="my-6">
        <h1 className="text-5xl text-center font-bold mb-4">Giá đặt xe riêng tại sân bay Cam Ranh</h1>
        <div className="flex justify-between flex-wrap">
          {taxiData.map((item, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[30%]" >
              <Taxicard img={item.img} title={item.title} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaxiPage;