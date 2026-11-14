import './Project.css';

interface ProjectProps {
    projectName: string;
    projectLink: string;
    projectThumbnail: string;
    projectOwner: string;
    projectTime: string;
    projectDescription: string;
}

function Project(props: ProjectProps) {
    return (
        <div className=" project" >
            <div className='workProjectCard' >
                <div className='workProjectHeader'>
                    <div>
                        <h3 ><a className='projectLink' href={props.projectLink}>{props.projectName} →</a></h3>
                        <h5>{props.projectOwner} | {props.projectTime}</h5>
                    </div>
                    <img className='projectThumbnail' src={props.projectThumbnail} alt={props.projectName}></img>
                </div>
                <p>{props.projectDescription}</p>
            </div >
        </div >
    )
}

export default Project;
