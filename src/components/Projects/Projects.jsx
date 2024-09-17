import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/folder-icon.svg'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='title'>
                Projects
            </h1>
            <div className={styles.projectsContainer}>
                <ProjectsCard
                    src={viberr}
                    url='https://github.com'
                    title='Project Title'
                    details='Project Detail'
                />
                <ProjectsCard
                    src={viberr}
                    url='https://github.com'
                    title='Project Title'
                    details='Project Detail'
                />
                <ProjectsCard
                    src={viberr}
                    url='https://github.com'
                    title='Project Title'
                    details='Project Detail'
                />
                <ProjectsCard
                    src={viberr}
                    url='https://github.com'
                    title='Project Title'
                    details='Project Detail'
                />
            </div>
        </section>
    )
}

export default Projects;