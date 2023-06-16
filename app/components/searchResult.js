import Link from "next/link";

const Searchresult = ({result}) => {
    return ( 
        <Link href="/houses">
        <div className="searchresult">{result.type}</div>
        <div className="searchresult">{result.city}</div>
        <div className="searchresult">{result.adress1}</div>
        </Link>
     );
}
 
export default Searchresult;