import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.jpg'

const Navbar = () => (
  <nav className="navbar is-transparent is-white is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Hai Nam Media" style={{ width: '88px' }} />
          </figure>
        </Link>
        <div className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-end">
        <Link className="navbar-item" to="/about">
          Giới thiệu
        </Link>
        <div className="navbar-item has-dropdown is-hoverable"> 
          <Link className="navbar-link" to="/products">
            Sản Phẩm
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item" to="">Phim</Link>
            <Link className="navbar-item" to="">Chương trình tin tức</Link>
            <Link className="navbar-item" to="">Game Shows</Link>
            <Link className="navbar-item" to="">Chương trình xã hội</Link>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable"> 
          <Link className="navbar-link" to="/services">
            Dịch vụ
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item" to="">Media</Link>
            <Link className="navbar-item" to="">Public Relations</Link>
            <Link className="navbar-item" to="">Tổ chức sự kiện</Link>
            <Link className="navbar-item" to="">Digital marketing</Link>
            <Link className="navbar-item" to="">OOH</Link>
            <Link className="navbar-item" to="">Dịch vụ khác</Link>
          </div>
        </div>
        <Link className="navbar-item" to="/contact">
          Khách hàng
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Bảng giá
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <Link className="navbar-link" to="">
            VN
          </Link>
          <div className="navbar-dropdown is-boxed">
            <Link className="navbar-item" to="">
              EN
            </Link>
          </div>
        </div>
      </div>
      
    </div>
    
  </nav>
  
)

export default Navbar
