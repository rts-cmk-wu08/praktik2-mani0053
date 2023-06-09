import Image from "next/image";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
        <footer>
           
            <div className="footercontainer">
            <div className="wrapper">
            <div>
            <Image
            src="/logo.png"
            height={200}
            width={200}
            alt="logo"
            />
            <p className="mt-5 mb-10">
            There are many variations of passages of Lorem Ipsum available, but the majority have <br/> suffered alteration in some form, by injected humour, or randomised words.
            </p>
            </div>
            
            <div className="footerinfo">
                <div className="footercontainerleft">
               
                    <div >
                    
                        <div className="footericon" >< BsFillTelephoneFill/></div>
                        <div className="footericon" ><SiMinutemailer/></div>
                        <div className="footericon" ><FaMapMarkerAlt/></div>
                        
                    </div>
                    <div className="footertext">
                    <div className="footertextring">
                    <h3>Ring til os</h3>
                    <p>+4570704000</p></div>
                    
                    <div className="footertextmail">
                    <h3>Send en mail</h3>
                    <p>4000@dinmaegler.com</p></div>
                    
                    <div className="footertextbutik">
                    <h3>Butik</h3>
                    <p>Stændertorvet 78, 4000 Roskilde</p></div>
                    
                    </div>
                    <p className="icontext">Din Mægler Roskilde, er din boligbutik i lokalområdet</p>
                    
                </div>
                <div className="footercontainerright">
                    <h2 className="font-500 text-2xl ">Quick Links</h2>
                    <p>Boliger til salg</p>
                    <p>Mæglere</p>
                    <p>Kontakt os</p>
                    <p>Log ind / Bliv bruger</p>
                </div>

            </div>
            </div>
            </div>
            <div className="logodms wrapper">
            <Image
            src="/dms.png"
            height={227}
            width={400}
            alt="logo"
            />
            </div>
           
            <div className="footercredit">
                Layout By Jit Banik 2020
            </div>
        </footer>
        </>
     );
}
 
export default Footer;