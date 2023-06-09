import Image from "next/image";
import Intro from "./components/intro";
import { BsGooglePlay } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import News from "./components/news";
import Workers from "./components/workers";
import Banner from "./components/banner";
import Homes from "./components/homes";

const Home = () => {

  
  return ( 
    <div>
      <Banner/> 
      <Intro/>
      <Homes/>
      <News/>
      <Workers/>

      <div className="homeapp">
        <div className="wrapper">
          <div className="divtest">
        <div className="homeapptext">
          <h2 className="font-medium text-4xl w-80 pb-5">Hold dig opdateret på salgsprocessen</h2>
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