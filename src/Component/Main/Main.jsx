import './Main.css'
import logo from '../image/WhatsApp Image 2023-06-14 at 10.40.10 PM (1).jpeg'

const Main = () => {
  return (
    <div className="main">
        <div className="main-info">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, cupiditate quia porro impedit recusandae saepe consequuntur ullam vitae beatae! Cupiditate.
            </p>
            <button>Shop Now</button>
            <button>Category</button>
        </div>
        <div>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Main