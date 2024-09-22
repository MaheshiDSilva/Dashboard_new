import './App.css';
import img from './image/image 60.png'
import img2 from './image/image 2.png'
import img3 from './image/image 3.png'
import img4 from './image/image 4.png'
import img5 from './image/image 5.png'

function App() {
  return (
    <div className="App">
      <div className='heading'>
        <p>OUR INSIGHTS.</p>
        <button className="buttonmain">View All</button>
      </div>
      <div className="content">
        <div className='inline-flex'>
          <img src={img} className="img"></img>
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

      <div className="content2">
        <div className='inline-flex'>
          <img src={img2} className="img"></img>
          <button className="buttonsec2">Brand Identity</button>
        </div>

        <div className="text-justify pl-10 ">
          <h1 className="text-customBlack text-2xl font-Inter">The best examples of dynamic brand identity for <br></br>
            startups.</h1>
          <div className='pt-40'>
            <p className="text-customBlack2 font-Inter inline-block font-semibold">Brand identity .</p>
            <p className='inline-block pl-2 text-customBlack2'>April 13, 2024</p>
          </div>
        </div>
      </div>

      <div className="content3">
        <div className='inline-flex'>
          <img src={img3} className="img"></img>
          <button className="button1sec3">Website</button>
          <button className="button2sec3">Creative</button>
        </div>

        <div className="text-justify pl-10 ">
          <h1 className="text-customBlack text-2xl font-Inter">Crafting the best storytelling website.</h1>
          <div className='pt-40'>
            <p className="text-customBlack2 font-Inter inline-block font-semibold">Website .</p>
            <p className='inline-block pl-2 text-customBlack2'>April 21, 2024</p>
          </div>
        </div>
      </div>

      <div className="content4">
        <div className='inline-flex'>
          <img src={img4} className="img"></img>
          <button className="button2">3D</button>
          <button className="button">Immersive</button>
          <button className="button3sec4">Website</button>
        </div>

        <div className="text-justify pl-10 ">
          <h1 className="text-customBlack text-2xl font-Inter">Noomo labs: a hub for cutting-edge immersive<br></br>
            experiences.</h1>
          <div className='pt-40'>
            <p className="text-customBlack2 font-Inter inline-block font-semibold">3D .</p>
            <p className='inline-block pl-2 text-customBlack2'>June 10, 2024</p>
          </div>
        </div>
      </div>

      <div className="content5">
        <div className='inline-flex'>
          <img src={img5} className="img"></img>
          <button className="button">Immersive</button>
          <button className="button2">3D</button>
          <button className="button3">AR</button>  
        </div>

        <div className="text-justify pl-10 ">
          <h1 className="text-customBlack text-2xl font-Inter">How to create an interactive and immersive 3D <br></br>
            website with AR experience.</h1>
          <div className='pt-40'>
            <p className="text-customBlack2 font-Inter inline-block font-semibold">Immersive web experiences .</p>
            <p className='inline-block pl-2 text-customBlack2'>June 08, 2024</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
