import Image from "next/image";
import Intro from "./components/intro";
import { BsGooglePlay } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

const Home = () => {
  return ( 
    <div>
      <div className="banner">
        <div className="bannerimg">
      <Image
        className="logo"
        src="/banner.png"
        height={1300}
        width={1920}
        alt="logo"
        />
        </div>
        <div className="homesearch">
          <h2 class="text-5xl font-bold text-white text-center pb-2.5" >Søg efter din drømmebolig</h2>
          <div className="homesearchbox">
            <h3 class="text-xl font-medium pb-2.5">Søg blandt 158 boliger til salg i 74 butikker</h3>
            <p class="text-base pb-2.5">Hvad skal din næste bolig indeholde</p>
            <div className="homesearchbar">
            <form className="homesearchbarform">
              <input
              className="homesearchbarinput"
              type="search"
              name="query"
              id="search"
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
              />
            </form>
            <button className="homesearchbarbtn" type="submit">Søg</button>
            </div>
          </div>
          
        </div>

      </div>
      <div className="wrapper">
        <section>
          <h2>
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <p>
            Det synes vi siger noget om os!
          </p>
        </section>
        <Intro/>
      </div>





      <div className="homeapp">
        <div className="wrapper">
          <div className="divtest">
        <div className="homeapptext">
          <h2 class="font-medium text-4xl w-80 pb-5">Hold dig opdateret på salgsprocessen</h2>
          <p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvalige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
          <div className="homeappbtn">
            <div className="gpbtn">
            <BsGooglePlay/><p>Google Play</p>
            </div>
            <div className="asbtn">
            <BsApple/><p>Apple Store</p>
            </div>
            
          </div>
        </div>
        <div >
          <Image
            className="phonel"
            src="/phonel.png"
            height={425}
            width={270}
            alt="phonel"
          />
          <Image
            className="phoner"
            src="/phoner.png"
            height={425}
            width={270}
            alt="phonel"
          />
        </div>
        </div>
      </div>
      </div>
    </div>
   );
}
 
export default Home;