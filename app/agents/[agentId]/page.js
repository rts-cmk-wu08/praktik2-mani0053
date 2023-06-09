"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Image from "next/image";
import { SiMinutemailer } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";



const getData = async (agentId) => {
    
    const result = await fetch(
        `https://dinmaegler.onrender.com/agents/${agentId}`, {

    });
    if (!result.ok) {
        throw new Error ("Failed to fetch data");
    }
  
    return result.json();
}

const AgentsDetail = async ({ params: { agentId } }) => {
    

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
    const agent = await getData(agentId);
    return ( 
        <>
        <div className="title"><h1>Kontakt en medarbejder</h1></div>
        <div className="agent wrapper">
            <article className="agentcon">
                <div className="flex">
                    <div>
                    <Image
                        src={agent.image.url}
                        height={280}
                        width={200}
                        alt="agent"
                    />

                    </div>
                    <div className="pl-8">
                        <h2 className="text-2xl">{agent.name}</h2>
                        <p className="text-lg text-gray-400">{agent.title}</p>
                        
                        <div className="agentinfo">
                        <div className="agentinfoicon">
                        <BsFillTelephoneFill/>
                        <SiMinutemailer/>                     
                        </div>
                        <div className="agentinfotext">
                        <p>{agent.phone}</p>
                        <p>{agent.email}</p>                        
                        </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className="py-6 text-xl">Om {agent.name}</h2>
                    <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some some, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="text-lg mt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some some, by injected humour </p>


                    <div className="contactform agentform">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contactformname">
                        <div className="formgroup">
                        <label htmlFor="name">Navn</label>
                        <input
                        placeholder="Indtast navn"
                        type="text" {...register("name", {required: "Required!", maxLength: {value: 5, message: "Name is too long!"} })} />
                        <ErrorMessage errors={errors} name="name" />
                        </div>

                        <div className="formgroup">
                        <label htmlFor="email">Email</label>
                        <input 
                        placeholder="Indtast email"
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
                        placeholder="Hvad drejer din henvendelse sig om?"
                        id="message" {...register("message", {required: "Required!",})} />
                        <ErrorMessage errors={errors} name="message"/>
                    </div>
                    <div className="formgroup contactformmessage">
                        <label htmlFor="subject">Besked</label>
                        <textarea 
                        className="contactformmessagetext"
                        placeholder="Skriv din besked her..."
                        id="subject" {...register("subject", {required: "Required!",})} />
                        <ErrorMessage errors={errors} name="subject"/>
                    </div>
                
                    <button type="submit">Send besked</button>
                    </form>
                
                    </div>
                    
                
                </div>

            </article>
            <div className="searchproperty">
                <div className="pt-8 pl-8 mb-14">
                <h2>Search Property</h2>
                <form className="searchpropertyform">
                <button className="pl-3" type="submit"><FiSearch/></button>
                <input
                className="pb-3"
                type="search"
                name="query"
                id="search"
                placeholder="Search"
                />
                </form>
                </div>
                <div className="agentad">
                    <p>Find The Best <br/> Property <br/> For Rent Or Buy</p>
                    <p className="text-2xl font-medium pt-8">Call Us Now</p>
                    <p>+00 123 456 789</p>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default AgentsDetail;