import './Main.css'
import image from '../image/WhatsApp Image 2023-06-14 at 10.40.10 PM (1).jpeg'
import logo from '../image/WhatsApp Image 2023-06-14 at 10.40.09 PM.jpeg'
import logo2 from '../image/WhatsApp Image 2023-06-14 at 10.40.10 PM.jpeg'

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="main-info">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p className='pra'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <button className='btn'>Shop Now</button>
            <button className='btn2'>Category</button>
        </div>
        <div className='image'>
            <img src={image} alt="" />
        </div>
    </div>
    <div className='last-info'>
      <p>Also Available On</p>
      <img src={logo2} />
      <img src={logo} />
    </div>
    </div>
  )
}

export default Main