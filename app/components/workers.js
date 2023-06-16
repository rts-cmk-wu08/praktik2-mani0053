import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
const getWorkers = async () => {
    const result = await fetch ("https://dinmaegler.onrender.com/agents", {       

    });
    if (!result.ok) {
        throw new Error ("Failed to fetch data");
    }
    return result.json();
};

const Workers = async () => {
    const workers = await getWorkers();
    console.log(workers)
    return ( 
        <div className="wrapper">
            <div className="mt-24 ">
            <h2 className="text-center text-4xl font-bold mb-6 text-main-color">Mød vores engagerede medarbejdere</h2>
            <p className="text-center text-lg">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. <br/> Kontakt en af vores medarbejdere. </p>
            </div>
            <div className="workerscon">
            {workers.map((worker, index) => {
                if(index < 3 )
                return (
                    <Link href={`/agents/${worker.id}`}>
                    <div className="pl-5 shadow-lg shadow-grey-500/50 w-[300px] h-72 mt-16" > 
                        <Image
                            className="pr-4"
                            src={worker.image.url}
                            height={300}
                            width={405}
                            alt="worker"
                        />
                        <div className="text-center">
                            <h2 key={worker.id}>{worker.name}</h2>
                            <p className="text-darkgrey">{worker.title}</p>
                        <div className="flex ml-28 space-x-3 mt-8">
                            <HiMail/>
                            <AiFillLinkedin/>
                        </div>
                        </div>
                    </div>
                    </Link>
                )
            })}
            </div>
            <Link href="/agents">
            <button className="workersbtn">Se alle mæglere</button>
            </Link>
        </div>
     );
}
 
export default Workers;