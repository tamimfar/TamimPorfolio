import { useParams } from "react-router-dom";
import Projects from './ProjectData'

function Details() {

    const { id } = useParams();

    const project = Projects.find(p => p.id === Number(id));

    if (!project) {
        return <h1>Project Not Found</h1>
    }

    return (

        <div className="max-w-7xl mx-auto py-20">

            <h1>{project?.heading}</h1>

            {project?.icon}

            <p>{project?.discription}</p>

            <h2>Key Features</h2>

            <ul>
                {
                    project?.tec.map((feature, index) =>
                        <li key={index}>{feature}</li>
                    )
                }
            </ul>



        </div>

    )
}

export default Details;