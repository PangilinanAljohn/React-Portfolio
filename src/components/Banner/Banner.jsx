import styles from './BannerStyles.module.css';
import bannerImg from '../../assets/banner.jpg';
import light from '../../assets/light.svg';
import dark from '../../assets/dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/resume.pdf'
import { useTheme } from '../../context/ThemeContext';


const Banner = () => {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? light : dark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

    return (
        <section id="banner" className={styles.container}>
            <div className={styles.themeModeContainer}>
                <img 
                    className={styles.banner}
                    src={bannerImg}
                    alt="Profile Picture" 
                />
                <img 
                    className={styles.themeMode}
                    src={themeIcon}
                    alt="Mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Aljohn Pangilinan
                </h1>
                <span>
                    <a href='https://github.com' target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/aljohn-pangilinan/' target='_blank'>
                        <img src={linkedInIcon} alt="LinkenIn icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    Passionate about web development, with in-depth understanding on PHP as my primary programming language on building dynamic and efficient web solutions. Constantly improving as I expanding  my expertise by learning React.js and Node.js.
                </p>
                <a href={resume} download>
                    <button className='hover'>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Banner;