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
            <Image
            src={house.images[0].url}
            height={580}
            width={1920}
            alt="house"
            />


        </div>
        
        </>
     );
}
 
export default HouseDetail;