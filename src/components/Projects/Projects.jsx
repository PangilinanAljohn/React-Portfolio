import styles from './ProjectsStyles.module.css'
import folderIcon from '../../assets/folder-icon.svg'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='title'>
                Projects
            </h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard
                    src={folderIcon}
                    url='https://github.com/PangilinanAljohn/React-Playground'
                    title='Adopt a Pet Website'
                />
                <ProjectsCard
                    src={folderIcon}
                    url='https://github.com/PangilinanAljohn/MERN-Chat'
                    title='Chat Application'
                />
            </div>
        </section>
    )
}

export default Projects;