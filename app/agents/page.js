import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const getAgents = async () => {
    const result = await fetch("https://dinmaegler.onrender.com/agents", {
      
    });
    if (!result.ok) {
        throw new Error ("Failed to fetch data");
    }
    return result.json();
};

const Agents = async () => {
    const agents = await getAgents();
    console.log(agents)
    return ( 
      
      <div>
        <h1 class="bg-main-color text-white text-6xl font-bold text-center py-12 " >Medarbejdere i Roskilde</h1>
        <div class="agentscontainer wrapper" >
          
          {agents.map((agent) => (  
            <Link href={`/agents/${agent.id}`}>
            <div class="pl-5 shadow-lg shadow-grey-500/50 w-[300px] h-72 mt-28" > 
            <Image
            class="pr-4"
            src={agent.image.url}
            height={300}
            width={405}
            alt="agent"
            />
            <div class="text-center">
            <h2 key={agent.id}>{agent.name}</h2>
            <p class="text-darkgrey">{agent.title}</p>
            <div class="flex ml-28 space-x-3 mt-8">
            <HiMail/>
            <AiFillLinkedin/>
            </div>
            </div>
            </div>
            </Link>
          ))}  
          
        </div>
      </div>
     );
}
 
export default Agents;