import Link from "next/link";
import Image from "next/image";


const getHouses = async () => {
    const result = await fetch("https://dinmaegler.onrender.com/homes", {

    });
    if (!result.ok) {
        throw new Error ("Failed to fetch data");
    }
    return result.json();
};

const Houses = async () => {
    const houses = await getHouses();
    console.log(houses)
   return ( 
    <div>
        <h1 className="title">Boliger til salg</h1>
        <div className="wrapper">
            <h2 className="text-xl font-medium mt-10 text-main-color">Søg efter dit drømmehus</h2>
        </div>
        <div className="wrapper housecon">
            {houses.map((house) => (
                <Link href={`/houses/${house.id}`}>
                <div className="house2ndcon">
                    <Image
                    className="img"
                    src={house.images[0].url}
                    height={300}
                    width={540}
                    alt="house"
                    />
                    <div className="pl-8">
                    <h4 className="font-medium text-xl mt-3" key={house.id}>{house.adress1}</h4>
                    <p className="my-3">{house.city}</p>
                    <div className="house3rdcon">
                        <p className="font-medium mr-4">{house.type}</p>
                        <p>Ejerudgift: {house.cost} kr.</p>
                    </div>
                    <div className="house4thcon">
                        <p>{house.energylabel}</p>
                        <p>{house.rooms} værelser</p>
                        <p>{house.livingspace}m2</p>
                        <p className="text-main-color">Kr.{house.cost}</p>
                    </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>

    </div>
    );
}
 
export default Houses;