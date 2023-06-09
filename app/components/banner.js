"use client"
import Image from "next/image";
import {useState} from "react";
import SearchBar from "./searchBar"
import SearchResultsList from "./searchResultsList";

const Banner = () => {

    const [results, setResults] = useState([]);

    return ( 
        <div className="banner">
        <div className="bannerimg">
       <Image
        className="banner"
        src="/banner.png"
        height={1300}
        width={1920}
        alt="logo"
        />
        </div>
        <div className="homesearch">
          <h2 className="text-5xl font-bold text-white text-center pb-2.5" >Søg efter din drømmebolig</h2>
          <div className="homesearchbox">
            <h3 className="text-xl font-medium pb-2.5">Søg blandt 158 boliger til salg i 74 butikker</h3>
            <p className="text-base pb-2.5">Hvad skal din næste bolig indeholde</p>
            <SearchBar setResults={setResults}/>
            <SearchResultsList results={results}/>
          </div>
          
        </div>
        </div>
     );
}
 
export default Banner;

