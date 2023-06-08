import Link from "next/link";
import Image from "next/image";
import {FaUser} from 'react-icons/fa';
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
    return ( 
        <header>
            <div className="headertop">
                <div className="headerinfo">
                <SiMinutemailer/><p>4000@dinmaegler.com</p>
                <BsFillTelephoneFill/><p>+4570704000</p>
                </div>
                <div className="logbtn">
                <FaUser/>
                <Link href="/login">  Log ind</Link>
                </div>
            </div>
            <nav className="headerbtm">
                <Link href="/">
                <Image
                className="logo"
                src="/logo.png"
                height={200}
                width={200}
                alt="logo"
                />
                </Link>
            
                <ul className="navbar">
                    <li><Link href="/houses">Boliger til salg</Link></li>
                    <li><Link href="/agents">Mæglere</Link></li>
                    <li><Link href="/">Mine favoritter</Link></li>
                    <li><Link href="/contact">Kontakt os</Link></li>      
                </ul>
            </nav>

        </header>
     );
}
 
export default Header;