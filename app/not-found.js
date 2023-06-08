import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <div className="wrapper">
            <h1 className=" notfoundtitle">Hov!</h1>
            <h2 className="text-3xl font-medium mb-6" >Du er havnet på en side som ikke findes!</h2>
            <p className="text-lg mb-6">Det er vi kede af! Vi har sendt en besked af sted til vores <br/> internetbureau, og bedt dem se på fejlen.</p> 
            <Link href="/">
                <button className="notfoundbtn">Tilbage til forsiden</button>
            </Link>
            </div>
        </div>
     );
}
 
export default NotFound;