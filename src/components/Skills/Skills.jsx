import styles from './SkillsStyles.module.css'
import dotDark from '../../assets/dot-dark.svg';
import dotLight from '../../assets/dot-light.svg';
import SkillsList from './SkillsList';
import { useTheme } from '../../context/ThemeContext';

const Skills = () => {
    const { theme } = useTheme();

    const markIcon = theme === 'light' ? dotLight : dotDark;

    const progLang = ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'];
    const frameworks = ['Codeigniter', 'Laravel', 'React.js', 'Node.js', 'Express.js'];
    const tools = ['Git', 'Socket.io', 'SSH and Bash Scripting', 'Agile'];

    return (
        <section id='skill' className={styles.container}>
            <h1 className='title'>Skills</h1>
            <div className={styles.skillList}>
                {progLang.map((value, index) => (
                    <SkillsList
                        key={index}
                        src={markIcon}
                        skill={value}
                    />
                ))}
            </div>
            <hr />
            <div className={styles.skillList}>
                {frameworks.map((value, index) => (
                    <SkillsList
                        key={index}
                        src={markIcon}
                        skill={value}
                    />
                ))}
            </div>
            <hr />
            <div className={styles.skillList}>
                {tools.map((value, index) => (
                    <SkillsList
                        key={index}
                        src={markIcon}
                        skill={value}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills;
