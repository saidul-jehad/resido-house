
import { useLoaderData } from "react-router-dom";
import Agent from "./Agent";

import 'animate.css';
const AgentLists = () => {
    const agentLists = useLoaderData()
    return (
        <div className="mt-14">
            <div className="p-16 bg-blue-700 text-white rounded-md space-y-4">
                <h3 className="text-4xl font-bold animate__animated animate__lightSpeedInLeft">All Agent</h3>
                <p className="animate__animated animate__lightSpeedInRight">Lists of our all expert agents</p>
            </div>
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