import Image from "next/image";


const Intro = () => {
    return ( 
        <>
        <div className=" wrapper introcon">
            <div>
            <Image
            className="homeimg"
            src="/home.png"
            height={502}
            width={477}
            alt="logo"
            />
            </div>
            <div className="ml-24" >
                <h2 className="font-bold text-main-color text-4xl mb-8" >Vi har fulgt danskernes hjem <br/> i snart 4 årtier </h2>
                <h3 className="font-medium text-2xl text-main-color mb-4" >Det synes vi siger noget om os!</h3>
                <p className="text-lg mb-4" >It is a long established fact that a reader will be distracted by the <br/> readable content of a page when looking at its layout. The point of <br/> using Lorem Ipsum is that it has normal distribution.</p>
                <p className="text-lg">It is a long established fact that a reader will be distracted by the <br/> readable content of a page when looking at its layout.</p>
                <div className="introicons">
                    <div className="introicon">
                    <div className="househand">
                    <Image
                    className="mt-3 ml-3"
                    src="/househand.png"
                    height={42}
                    width={42}
                    alt="househand"
                    />
                    </div>
                    <div className="mr-28 pt-5 pl-5">
                    <h3 className="font-medium">4829</h3>
                    <p>boliger solgt</p>
                    </div>
                    </div>
                    <div className="introicon">
                    <div className="house">
                    <Image 
                    className="ml-3 mt-3"              
                    src="/house.png"
                    height={42}
                    width={42}
                    alt="house"
                    />
                    </div>
                    <div className="pt-5 pl-5">
                    <h3 className="font-medium">158</h3>
                    <p>boliger til salg</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper introinfo">
            <div className="flex">
                <div className="infoicon">
                <Image 
                    className="mt-3 ml-3"              
                    src="/property.png"
                    height={30}
                    width={30}
                    alt="property"
                    />
                </div>
                <div className="ml-4">
                    <h3 className="font-medium text-2xl mb-3">Bestil et salgstjek</h3>
                    <p className="text-lg" >Med et Din Mægler Salgstjek <br/> bliver du opdateret på værdien <br/> af din bolig.</p>
                </div>
            </div>
            <div className="flex">
                <div className="infoicon">
                <Image 
                    className="pt-2 ml-3"              
                    src="/adr.png"
                    height={30}
                    width={30}
                    alt="adr"
                    />
                </div>
                <div className="ml-4">
                    <h3 className="font-medium text-2xl mb-3">74 butikker</h3>
                    <p className="text-lg">Hos Din Mægler er din bolig <br/> til salg i alle vores 74 butikker, som <br/> er fordelt rundt om i Danmark.</p>
                </div>
            </div>
            <div className="flex">
                <div className="infoicon">
                <Image 
                    className="pt-2 ml-3"              
                    src="/hand.png"
                    height={30}
                    width={30}
                    alt="hand"
                    />
                </div>
                <div className="ml-4">
                    <h3 className="font-medium text-2xl mb-3">Tilmeld køberkartotek</h3>
                    <p className="text-lg">Når du er tilmeldt vores <br/> køberkartotek, bliver du kontaktet <br/> inden en ny bolig bliver annonceret.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Intro;