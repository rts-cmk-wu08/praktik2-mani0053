"use client"
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
    const agent = await getData(agentId);
    console.log(agent);
    
    return ( 
        <>
        <div className="agenttitle"><h1>Kontakt en medarbejder</h1></div>
        <div className="agent">
            <article className="agentform">
                <div class="flex">
                    <div>
                    <Image
                        src={agent.image.url}
                        height={280}
                        width={200}
                        alt="agent"
                    />

                    </div>
                    <div>
                        <h2 class="text-2xl">{agent.name}</h2>
                        <p class="text-lg text-gray-400">{agent.title}</p>
                        <div class="agentinfoicon">
                        <BsFillTelephoneFill/><p>{agent.phone}</p>
                        <SiMinutemailer/><p>{agent.email}</p>                        
                        </div>

                    </div>

                </div>
                <div>
                    <h2>Om {agent.name}</h2>
                    <p class="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some some, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p class="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some some, by injected humour </p>
                </div>

                

                
            </article>
            <div className="searchproperty">
                <div class="pt-8 pl-8 mb-14">
                <h2>Search Property</h2>
                <form className="searchpropertyform">
                <button className="" type="submit"><FiSearch/></button>
                <input
                className=""
                type="search"
                name="query"
                id="search"
                placeholder="Search"
                />
                </form>
                </div>
                <div className="agentad">
                    <p>Find The Best <br/> Property <br/> For Rent Or Buy</p>
                    <p class="text-2xl font-medium pt-8">Call Us Now</p>
                    <p>+00 123 456 789</p>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default AgentsDetail;