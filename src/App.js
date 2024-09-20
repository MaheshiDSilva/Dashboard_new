import './App.css';
import img from './image/image 60.png'

function App() {
  return (
    <div className="App">
      <div className="content">
        {/* <div className="flex items-center justify-between"> */}
        <div className='inline-flex'>
          {/* <img src={img} className="object-cover pl-20 pt-6 pb-6"></img> */}
          <img src={img} className="img"></img>
          <div></div>
          <button className="button">Immersive</button>
          <button className="button2">3D</button>
          <button className="button3">AR</button>
        </div>

        <div className="text-justify pl-10 ">
          <h1 className="text-customBlack text-2xl font-Inter">Elevate marketing and sales by using immersive <br></br>
            web experiences.</h1>
          <div className='pt-40'>
            <p className="text-customBlack2 font-Inter inline-block font-semibold">Immersive experiences .</p>
            <p className='inline-block pl-2 text-customBlack2'>May 10, 2024</p>
          </div>

        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
