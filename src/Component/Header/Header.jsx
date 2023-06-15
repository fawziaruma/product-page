import './Header.css'
import '../image/WhatsApp Image 2023-06-14 at 10.40.09 PM (1).jpeg'

const Header = () => {
  return (
    <nav className="header">
      <div className='logo'>
      <img src={(1)} />
      </div>
        <div className="left">
            <a href="">Menu</a>
            <a href="">Location</a>
            <a href="">About</a>
            <a href="">Contract</a>
        </div>
        <div className='right'>
            <a href="">Login</a>
        </div>

       
    </nav>
  )
}

export default Header