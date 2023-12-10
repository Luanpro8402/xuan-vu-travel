import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid';
import logo from "../assets/logo.png"
import taxicamranh from "../assets/taxicamranh.jpg";
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-theme-light/50 bg-cover bg-center"
      style={{ backgroundImage: `url(${taxicamranh})` }}>
      <div className="container">
        <div className="row pb-10 gx-2">
          <div className="hidden md:block col-12 mt-12 md:col-6 lg:col-3">
            <Link to="/">
              <img src={logo} alt="Xuân Vũ Travel" />
            </Link>
          </div>
          <div className="col-12 mt-12 md:col-6 lg:col-3">
            <h6 className='font-bold text-lg text-blue-600'>Xe dịch vụ Xuân Vũ Travel</h6>
            <ul className="social-icons mt-4 lg:mt-6">
              <li className='flex mt-1'>
                <MapPinIcon className="mr-2 text-white h-6 w-6 md:h-10 md:w-10" />
                <span className='text-white'>77/90 Nguyễn Chích, Phường Vĩnh Hòa, Nha Trang, Khánh Hòa</span>
              </li>
              <li className='flex mt-1'>
                <PhoneIcon className="h-6 w-6 mr-2 text-white" />
                <a className='text-white' href="tel:0905433307">Hotline: 0905433307</a>
              </li>
              <li className='flex mt-1'>
                <PhoneIcon className="h-6 w-6 mr-2 text-white" />
                <a className='text-white' href="tel:0944179121">Hotline: 0944179121</a>
              </li>
              <li className='flex mt-1'>
                <PhoneIcon className="h-6 w-6 mr-2 text-white" />
                <a className='text-white' href="https://zalo.me/0905433307">Zalo: 0905433307</a>
              </li>
              <li className='flex mt-1'>
                <PhoneIcon className="h-6 w-6 mr-2 text-white" />
                <a className='text-white' href="https://zalo.me/0944179121">Zalo: 0944179121</a>
              </li>
            </ul>
          </div>
          <div className="col-6 mt-12 lg:col-3">
            <h6 className='font-bold text-lg text-blue-600'>Quick Links</h6>
            <ul>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-6 mt-12 lg:col-3">
            <h6 className='font-bold text-lg text-blue-600'>Hỗ trợ khách hàng</h6>
            <ul>
              <li>
                <Link to="/gioi-thieu" className='text-white'>Giới thiệu</Link>
              </li>
              <li>
                <Link to="/hinh-thuc-thanh-toan" className='text-white'>Hình thức thanh toán</Link>
              </li>
              <li>
                <Link to="/huong-dan" className='text-white'>Hướng dẫn thuê xe</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container max-w-[1440px]">
        <div
          className="footer-copyright mx-auto py-5 text-center "
        >
          <p className='text-white'>Thiết kế và phát triển bởi <Link to="/" target="_blank">Thầy Luân</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;