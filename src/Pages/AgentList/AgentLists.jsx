
import { useLoaderData } from "react-router-dom";
import Agent from "./Agent";

const AgentLists = () => {
    const agentLists = useLoaderData()
    return (
        <div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
    {
        agentLists.map(agent => <Agent 
        key={agent.id}
        agent={agent}
        ></Agent>)
    }
</div>
        </div>
    );
};

export default AgentLists;