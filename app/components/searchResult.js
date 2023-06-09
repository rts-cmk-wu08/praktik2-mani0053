import Link from "next/link";

const Searchresult = ({result}) => {
    return ( 
        <Link href="/houses">
        <div className="searchresult">{result.type}</div>
        </Link>
     );
}
 
export default Searchresult;