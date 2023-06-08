import { AiOutlineArrowRight } from "react-icons/ai";

const News = () => {
    return ( 
        <div className="newsdiv">
            <div className=" newscon wrapper">
            <h2 className="text-3xl font-bold text-white">
                Tilmeld dig vores nyhedsbrev og <br/> hold dig opdateret på boligmarkedet
            </h2>

            <div className="newsform">
            <form>
                <input

                type="search"
                name="query"
                placeholder="Indtast din email adresse"
                />
                
            </form>
            <button type="submit"><AiOutlineArrowRight/></button>
            </div>
            </div>
        </div>
     );
}
 
export default News;