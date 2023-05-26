import Image from "next/image";


const Intro = () => {
    return ( 
        <>
        <div>
            <div>
            <Image
        className="homeimg"
        src="/home.png"
        height={502}
        width={477}
        alt="logo"
        />
            </div>
            <div>
                <p>HELOOOOOO</p>
            </div>
        </div>
        </>
     );
}
 
export default Intro;