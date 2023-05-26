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
        <div>
            <p>{agent.name}</p>

        </div>
     );
}
 
export default AgentsDetail;