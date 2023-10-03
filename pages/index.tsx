import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    function toggleMenu() {
        const menu: any  = document.querySelector(".menu-links");
        const icon: any = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
  return (
    <>
        <Head>
            <title>Matt Folsom Portfolio</title>
        </Head>
        <nav id="desktop-nav" className="desktop-nav">
            <div className="logo">Matt Folsom</div>
            <div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <nav id="hamburger-nav" className="hamburger-nav">
            <div className="logo">Matt Folsom</div>
            <div className="hamburger-menu">
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="menu-links">
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </div>
            </div>
        </nav>
        <section id="profile" className="profile">
            <div className="section__pic-container">
                <img className="profilePic" src="/profile.png" loading="lazy" alt="Matt Folsom profile picture"/>
                <div className="circle"></div>
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I&apos;m</p>
                <h1 className="title">Matt Folsom</h1>
                <p className="section__text__p2">Web Developer</p>
                <div className="btn-container">
                    <a href="/Folsom_Resume.pdf" download="Folsom_Resume">
                        <button
                            className="btn btn-color-2 resumeBtn"
                        >
                            Download Résumé
                        </button>
                    </a>
                    <Link href="#contact">
                        <button className="btn btn-color-1">
                            Contact <br/>Info
                        </button>
                    </Link>
                </div>
                <div id="socials-container" className="socials-container">
                    <Link target="_blank" href="https://www.linkedin.com/in/matt-folsom/">
                        <img
                            src="/linkedin.png"
                            alt="My LinkedIn profile"
                            className="heroIcon"
                        />
                    </Link>
                    <Link target="_blank" href="https://github.com/msf930">
                        <img
                            src="/github.png"
                            alt="My Github profile"
                            className="heroIcon"
                        />
                    </Link>
                    <Link target="_blank" href="tel:7209685664">
                        <img
                            src="/phone.png"
                            alt="My Phone number"
                            className="heroIcon"
                        />
                    </Link>
                    <Link target="_blank" href="mailto:msf930@gmail.com">
                        <img
                            src="/email.png"
                            alt="My email"
                            className="heroIcon email-icon"
                        />
                    </Link>
                </div>
            </div>
        </section>
        <section id="about" className="about">
            <div className="about-header">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
            </div>
            <div className="section-container-about">
                <div className="about__pic-container">
                    <img
                        src="about.jpg"
                        loading="lazy"
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container-about">
                            <img
                                src="experience.png"
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>3+ years <br/>Frontend Development</p>
                        </div>
                        <div className="details-container-about">
                            <img
                                src="education.png"
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>B.A. Bachelors Degree <br/> Free Code Camp: <br/> Web Design Cert</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            A skilled and experienced front-end developer, with a strong passion for creating visually appealing and user-friendly
                            websites and web applications. With a solid foundation in HTML, CSS, and JavaScript, a proven ability to transform
                            design mockups from Figma, Photoshop, and Illustrator, into responsive and interactive digital experiences. Proficient in
                            modern front-end frameworks and libraries such as React and Next, leveraging their power to build robust and scalable
                            solutions. Adept at optimizing website performance and ensuring cross-browser compatibility. A strong eye for detail and
                            a commitment to writing clean, well-structured code. Collaborating effectively with cross-functional teams, exceling in
                            both independent and collaborative work environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="experience" className="experience">
            <div className="experience-header">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
            </div>
            <div className="experience-details-container">
                <div className="experience-containers">
                    <div className="details-container-experience">
                        <h2 className="experience-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>HTML</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>CSS</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Tailwind</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>TypeScript</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>React</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container-experience">
                        <h2 className="experience-sub-title">Backend Development</h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>MongoDB</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>AWS</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Node JS</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Express JS</h3>
                                    <p>Basic</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Git</h3>
                                    <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" className="projects">
            <div className="projects-header">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
            </div>
            <div className="project-details-container">
                <div className="project-containers">
                    <div className="details-container-project color-container">
                        <div className="article-container-project">
                            <img
                                src="/yusha.jpg"
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Yusha.ai</h2>
                        <h3 className="experience-desc-text">Client: Fullstack</h3>
                        <div className="btn-container">
                            <Link href="https://github.com/msf930/yusha-front" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Github
                                </button>
                            </Link>
                            <Link href="http://yusha.ai/" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Live Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="details-container-project color-container">
                        <div className="article-container-project">
                            <img
                                src="/rizazzleRepairs.jpg"
                                alt="Project 2"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Rizzazzle Repairs</h2>
                        <h3 className="experience-desc-text">Client: Frontend</h3>
                        <div className="btn-container">
                            <Link href="https://github.com/msf930/RizzazzleRepairs" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Github
                                </button>
                            </Link>
                            <Link href="https://tubular-otter-2c0182.netlify.app/" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Live Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="details-container-project color-container">
                        <div className="article-container-project">
                            <img
                                src="/MVRBLE.jpg"
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">MVRBLE</h2>
                        <h3 className="experience-desc-text">Portfolio: Frontend</h3>
                        <div className="btn-container">
                            <Link href="https://github.com/msf930/MVRBLE" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Github
                                </button>
                            </Link>
                            <Link href="https://benevolent-douhua-e729e4.netlify.app/" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Live Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" className="contact">
            <div className="contact-header">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
            </div>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src="/email.png"
                        alt="Email icon"
                        className="icon contact-icon email-icon-small"
                    />
                    <p><a href="mailto:msf930@gmail.com">msf930@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="/linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon nonEmail"
                    />
                    <p><a href="https://www.linkedin.com/in/matt-folsom/" target="_blank">LinkedIn</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="/phone.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon nonEmail"
                    />
                    <p><a href="tel:7209685664" target="_blank">(720)-968-5664</a></p>
                </div>
            </div>
        </section>

    </>
  )
}
