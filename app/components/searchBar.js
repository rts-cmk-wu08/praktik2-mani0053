"use client"
import {useState} from "react";

const Banner = ({setresults}) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("https://dinmaegler.onrender.com/homes")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((home) => {
                return (
                    value &&
                    home &&
                    home.type &&
                    home.type.toLowerCase().includes(value)
                );
            });
            setresults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return ( 
            <div className="homesearchbar">
            <form className="homesearchbarform">
              <input
              className="homesearchbarinput"
              type="search"
              name="query"
              id="search"
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              setresults={setresults}
              />
            </form>
            
            <button className="homesearchbarbtn" type="submit">Søg</button>
            </div>
     );
}
 
export default Banner;

