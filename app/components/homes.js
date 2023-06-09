import Link from "next/link";
import Image from "next/image";


const getHomes = async () => {
    const result = await fetch("https://dinmaegler.onrender.com/homes", {

    });
    if (!result.ok) {
        throw new Error ("Failed to fetch data");
    }
    return result.json();
};

const Homes = async () => {
    const homes = await getHomes();
    console.log(homes)
   return ( 
    <div>
        
        <div className="wrapper">
            <h2 className="text-xl font-medium">Udvalgte Boliger</h2>
            <p>There are many variations</p>
        </div>
        <div className="wrapper housecon">
            {homes.map((home, index) => {
                if(index < 4 )
                return(
                <Link href={`/houses/${home.id}`}>
                <div className="house2ndcon">
                    <Image
                    className=""
                    src={home.images[0].url}
                    height={300}
                    width={540}
                    alt="house"
                    />
                    <div className="pl-8">
                    <h4 className="font-medium text-xl mt-3" key={home.id}>{home.adress1}</h4>
                    <p className="my-3">{home.city}</p>
                    <div className="house3rdcon">
                        <p className="font-medium mr-4">{home.type}</p>
                        <p>Ejerudgift: {home.cost} kr.</p>
                    </div>
                    <div className="house4thcon">
                        <p>{home.energylabel}</p>
                        <p>{home.rooms} værelser</p>
                        <p>{home.livingspace}m2</p>
                        <p>Kr.{home.cost}</p>
                    </div>
                    </div>
                </div>
                </Link>
                )
            })}
        </div>
        <Link href="/houses">
        <button className="workersbtn">Se alle boliger</button>
        </Link>

    </div>
    );
}
 
export default Homes;