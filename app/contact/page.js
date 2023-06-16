"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {

    const{register, handleSubmit, reset, formState: {errors}, } = useForm({
        defaultValues: {
            name:"",
            email:"",
            subject:"",
            message:"",
        },
    });

    const onSubmit = (values) => {
        //axios post here...
        console.log(values)
        reset();
    }
    

    return ( 
        <>
        <div className="title">
            <h1>Kontakt os</h1>
        </div>
        <div className="wrapper">
            <div>
            <p className="text-3xl font-medium pt-24 pb-10">Vi sidder klar til at besvare dine spørgsmål</p>
            <p className=" text-lg pb-12">Der kan opstå tvivl om mange ting når man gerne vil, eller er i gang med at sælge sin bolig. <br/> Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>

            <div className="contactformcon">
                <div className="contactform">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contactformname">
                        <div className="formgroup">
                        <label htmlFor="name">Navn</label>
                        <input
                        placeholder="Indtast dit navn"
                        type="text" {...register("name", {required: "Required!", maxLength: {value: 5, message: "Name is too long!"} })} />
                        <ErrorMessage errors={errors} style={{color:"red"}} name="name" />
                        </div>

                        <div className="formgroup">
                        <label htmlFor="email">Email</label>
                        <input 
                        placeholder="Indtast din email"
                        type="email" {...register("email", {
                        required: "Required!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:"Enter a valid email.",
                        }
                        })}/>
                        <ErrorMessage errors={errors} name="email" />
                        </div>
                    </div>

                    <div className="formgroup contactformsubject">
                        <label className="contactformlabel" htmlFor="message">Emne</label>
                        <textarea 
                        className="contactformsubjecttext"
                        placeholder="Indtast emne"
                        id="message" {...register("message", {required: "Required!",})} />
                        <ErrorMessage errors={errors} name="message"/>
                    </div>
                    <div className="formgroup contactformmessage">
                        <label htmlFor="subject">Besked</label>
                        <textarea 
                        className="contactformmessagetext"
                        placeholder="Indtast din besked..."
                        id="subject" {...register("subject", {required: "Required!",})} />
                        <ErrorMessage errors={errors} name="subject"/>
                    </div>
                    <label className="contactformcheck">
                    <input type="checkbox"/>
                        Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                        
                    </label>
                
                    <button type="submit">Send besked</button>
                    </form>
                
                </div>
                <div className="contactforminfo">
                    <div className="contactforminfocon">
                    <div className="contactformicon">
                    <BsFillTelephoneFill/>
                    </div>
                    <div className="contactforminfotext">
                    <h3>Ring til os</h3>
                    <p>+45 7070 4000</p>
                    </div>
                    </div>
                    <div className="contactforminfocon">
                    <div className="contactformicon">
                    <SiMinutemailer/>
                    </div>
                    <div className="contactforminfotext">
                    <h3>Send en mail</h3>
                    <p>4000@dinmaegler.dk</p>
                    </div>
                    </div>
                    
                    <div className="contactforminfocon">
                    <div className="contactformicon"> 
                    <FaMapMarkerAlt/>
                    </div>
                    <div className="contactforminfotext">
                    <h3>Besøg</h3>
                    <p>Stændertorvet 78, <br/> 4000 Roskilde</p></div>
                    </div>

                </div>
                
            </div>
            </div>
            
        </div>
            <Image
            className="map img"
            src="/map.png"
            height={800}
            width={1920}
            alt="logo"
            />
        </>
     );
}
 
export default Contact;