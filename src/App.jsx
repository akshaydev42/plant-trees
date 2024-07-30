import { useState } from 'react'
import { FaDonate } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import './App.css'
import EmblaCarousel from './assets/Components/EmblaCarousel';



function App() {
 
  const [amount, setAmount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = ( button) => {
    setActiveButton((prevActiveButton) => 
      prevActiveButton === button ? null : button
    );
  };
 
  const handleEvent = (event)=>{
    event.preventDefault();
  }
  return (
    <>
    <section className="flex m-4">
    <div className = "grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
      <div className = " flex m-4 flex-col relative lg:static  ">
        <img src="./plant.jpg" className=""></img>
        <div className = "absolute lg:text-black lg:static px-10 bottom-10 text-green-600 lg:text-xl font-bold uppercase text-center">
        <h2> &quot;BE THE CHANGE — PLANT  A TREE AND GROW  A  GREENER WORLD.&quot;</h2>
        </div>
      </div>
      <div className = "flex flex-col">
        <h2 className = "uppercase text-black text-center lg:text-left text-2xl font-semibold  lg:px-4 ">Plant Trees for impact</h2>
        <h1 className= "uppercase text-black text-center lg:text-left text-xl font-semibold px-4 mb-4 ">Together, Planting a forest</h1>
        <p className="text-black leading-5 text-lg px-4"> Reforestation is one of the best ways to restore ecosystems that have been degraded and deforested. Plant trees to support restoration work in the locations where it is needed  most.</p>
       <div className="flex"> <p className="text-black leading-4 text-lg font-semibold px-4 mb-5 hover:text-green-400 select-none cursor-pointer"> Learn More... </p></div>
        <p className="text-black leading-4 text-lg font-semibold px-4 mb-3"> Planting trees for Impact will contribute to: </p>
        <ol  className="px-4 list-disc list-inside text-base mb-2">
          <li>Growing healthy, resilient forests</li>
          <li>Restoring habitat for iconic biodiversity</li>
          <li> Supporting local communities from city to forest</li>
        </ol>

        <form onSubmit={handleEvent} className="border-2 border-slate-300 m-2" >
        <div className="flex justify-evenly m-4 gap-3 ">
      <button
        className={` px-2 lg:px-6 py-2 font-light border rounded hover:scale-110 transition-transform  ${
          activeButton === 'button1' ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => handleButtonClick('button1')}
      >
        One time Donation
      </button>
      <button
        className={` px-2 lg:px-6 py-2 font-light border rounded hover:scale-110 transition-transform  ${
          activeButton === 'button2' ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => handleButtonClick('button2')}
      >
        Reoccuring Donation
      </button>
    </div>
    <p className="text-black leading-4 text-lg font-semibold pl-10  mt-8"> Enter an amount to donate: </p>
      
       <div className = "flex flex-row border m-4 ">
        <FaDonate size={35} className="border-r-2 p-0.5 "/>
        <input onChange={(e)=>setAmount(e.target.value)} type="number" className='hover:border-green-400 border outline-none px-4 w-full' placeholder="Enter Amount"></input>
       <select className= "outline-none font-light  border-none">
        <option value="IND" className="font-light">IND </option>
       </select>
        </div> 
        <h2 className= "m-2 px-7 ">{amount}/- rupees</h2>
        </form>

        <div className = "m-4 p-2 flex flex-row justify-center items-center rounded-lg bg-[#E34141] hover:bg-green-400 transition-transform cursor-pointer text-white  ">
           <button className= "border-none leading-2 text-xl px-1 font-light ">Plant Trees</button>
           <HiOutlineShoppingBag size={25}/>
        </div>
        <h2 className = "text-black text-center text-xl font-light">Looking to plant trees every month?<span className="px-2">Join</span><span ><a href="#" className="underline cursor-pointer hover:text-green-400">The Grove.</a> </span></h2>
      <hr className="mt-4 h-0.5 bg-black"></hr>
      </div>
    </div>
    </section>
    
    <EmblaCarousel/>

    {/* Join communities */}
    <h2 className = " mt-24 mb-4 text-center text-black  text-xl font-extrabold sm:text-2xl lg:text-3xl select-none">JOIN THE COMMUNITIES</h2>
    <div className=" lg:m-6 grid grid-cols-1 mx-auto  lg:grid-cols-3 gap-2 ">
    <div className="_pt_work relative mx-auto  w-[400px]  h-[500px] ">
              <img
                className=" h-full w-full"
                src="./Communities/img1.jpg"
                alt=""
              />
              <div className="absolute inset-0 pt-[330px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-5xl">
                  <div className="_pt_layer">BIODIVERSITY</div>
                </h1>
              </div>
            </div>
           
            <div className="_pt_work relative mx-auto w-[400px] h-[500px] ">
              <img
                className="h-full w-full"
                src="./Communities/img2.jpg"
                alt=""
              />
              <div className="absolute inset-0 pt-[330px]  ">
                <h1 className="text-center text-white my-auto font-extrabold text-5xl">
                  <div className="_pt_layer">PLANTATION</div>
                </h1>
              </div>
            </div>

            <div className="_pt_work relative mx-auto w-[400px]  h-[500px]">
              <img
                className="h-full w-full"
                src="./Communities/img3.jpg"
                alt=""
              />
              <div className="absolute inset-0 pt-[330px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-5xl">
                  <div className="_pt_layer">FOREST FIRE FUND</div>
                </h1>
              </div>
            </div>
          </div>
          <hr className="m-12 h-0.5 bg-black"></hr>

    {/* Recent planting */}
    <h2 className = " mt-16 mb-4 text-center text-black text-xl uppercase font-bold sm:text-2xl lg:text-3xl select-none">Recent plant trees for impact projects</h2>
          
          <div className="grid m-20 grid-cols-1 sm:grid-cols-2 ">
            <div className = " flex justify-center" >
            <img src ="./Projects/img1.jpg " className = " mb-6 sm:h-[420px] h-[320px]" />
            </div>

            <div className = "flex flex-col">
              <h2 className = "px-3 text-black text-2xl font-bold text-left mb-6 lg:mb-6 uppercase">MONARCH BUTTERFLY HABITAT</h2>
              <p className = "px-3 mb-8 lg:mb-8 text-black text-left text-lg lg:font-light">Monarch butterfly populations have been dwindling over time
due to the loss of milkweed and nectar plants, deforestationand 
degradation of their overwintering grounds in California and
Mexico, pesticide use, and climate change impacts like
out-of-season storms, severe temperature drops  and
heavy rainfall. All of these factors have combined to create 
a sharp decline, particularly in the past 20 years.
                                               </p>
          <h3 className = " inline-block self-start px-3 mb-8 lg:mb-12 text-xl font-bold text-black  hover:text-green-400 cursor-pointer">Read More...</h3>
            <div className= "px-3">
               <button className = "px-4 py-2 rounded-lg bg-red-600 text-white text-center hover:bg-green-400 hover:scale-105 transition-all">Plant for impact</button>
            </div>
            </div>
          </div>


          <div className="grid m-20 grid-cols-1 sm:grid-cols-2 ">
          <div className = " flex justify-center sm:order-2" >
            <img src ="./Projects/img2.jpg " className = " mb-6 h-[320] sm:h-[420px]  " />
            </div>
            <div className = "flex flex-col sm:order-1 ">
              <h2 className = "px-3 text-black text-2xl font-bold text-left mb-6 lg:mb-6 uppercase">FRUIT TREES CHANGE LIVES</h2>
              <p className = "px-3 mb-8 lg:mb-8 text-black text-left text-lg lg:font-light">
Much of our work in India is focused on planting fruit trees.
 Our amazing partners are working with local communities across 
12 Indian states to plant fruit trees to fight hunger, improve local 
economies, and combat climate change. Your support will help 
us make a huge difference. Each fruit tree we plant will equate to 
at least $10 USD in food and nutrition each year, with a cumulative 
value of 5 million dollars garnered over the next 50-60 years.
                                               </p>
            <h3 className = "inline-block self-start px-3 mb-8 lg:mb-12 text-xl font-bold text-black hover:text-green-400 cursor-pointer">Read More...</h3>
            <div className= "px-3">
               <button className = "px-4 py-2 rounded-lg bg-red-600 text-white text-center hover:bg-green-400 hover:scale-105 transition-all">Plant for impact</button>
            </div>
            </div>
          </div>

          <div className="grid m-20 grid-cols-1 sm:grid-cols-2 ">
            <div className = " flex justify-center" >
            <img src ="./Projects/img3.jpg " className = " mb-6 h-[320] sm:h-[420px] " />
            </div>
            <div className = "flex flex-col">
            
              <h2 className = "px-3 text-black text-2xl font-bold text-left mb-6 lg:mb-6 uppercase">FOREST FIRE RESTORATION</h2>
              <p className = "px-3 mb-8 lg:mb-8 text-black text-left text-lg lg:font-light">California&apos;s forests need active management in order to improve their 
health, reduce the risk of major wildfires and pest infestations, and
protect this beautiful natural playground for future generations.
Our amazing reforestation partners work with several state and 
federal forestry assistance programs, as well as private landowners, 
aiming to improve the health and productivity of forest lands.
                                               </p>
            <h3 className = " inline-block self-start px-3 mb-8 lg:mb-12 text-xl font-bold text-black hover:text-green-400 cursor-pointer">Read More...</h3>
            <div className= "px-3">
               <button className = "px-4 py-2 rounded-lg bg-red-600 text-white text-center hover:bg-green-400 hover:scale-105 transition-all">Plant for impact</button>
            </div>
            </div>
          </div>

<div className="w-full min-h-[700px] relative " style={{backgroundImage:"url(./Fund/img1.jpg)"}}>
  <div className = "flex flex-col justify-center  items-center absolute inset-0">
   <h1 className = " m-4 text-center text-white text-3xl uppercase select-none"> Want to give more?</h1>
   <h1 className = " m-4 text-center text-white text-3xl uppercase select-none">Help spread the word and get more trees planted!</h1>
  <div>
    <button className = "mt-20 px-4 py-2 rounded-lg bg-red-500 text-white text-center hover:bg-green-400 hover:scale-105 transition-all">Start a Fundriser</button>
  </div>
  </div>
</div>
    
    </>
  )
}

export default App




