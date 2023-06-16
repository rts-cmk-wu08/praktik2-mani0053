import Image from "next/image";

const getHouse = async (houseId) => {
    const result = await fetch(
        `https://dinmaegler.onrender.com/homes/${houseId}`, {

    });
    if (!result.ok) {
        throw new Error ("Failed to fetch data");
    }

    return result.json();
}

const HouseDetail = async ({ params: { houseId }}) => {
    const house = await getHouse(houseId);
    return ( 
        <>
        <div className="">
            <div>
            <Image
            className="img"
            src={house.images[0].url}
            height={580}
            width={1920}
            alt="house"
            />
            </div>
            <div className="wrapper">
                <div>
                <div>
                <h3>{house.adress1}</h3>
                <h3>{house.city}</h3>
                </div>
                <div>
                    <p>ikoner</p>
                </div>
                <div>
                    <p>Kr.{house.cost}</p>
                </div>
                </div>




            </div>

        </div>
        
        </>
     );
}
 
export default HouseDetail;