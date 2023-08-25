import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
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
                <img className="profilePic" src="/profile.png" alt="Matt Folsom profile picture"/>
                <div className="circle"></div>
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Matt Folsom</h1>
                <p className="section__text__p2">Frontend Developer</p>
                <div className="btn-container">
                    <a href="/Folsom_Resume.pdf" download="Folsom_Resume">
                        <button
                            className="btn btn-color-2"
                        >
                            Download Resume
                        </button>
                    </a>
                    <Link href="#contact">
                        <button className="btn btn-color-1">
                            Contact <br/>Info
                        </button>
                    </Link>
                </div>
                <div id="socials-container">
                    <Link target="_blank" href="https://www.linkedin.com/in/matt-folsom/">
                        <img
                            src="/linkedin.png"
                            alt="My LinkedIn profile"
                            className="icon"
                        />
                    </Link>
                    <Link target="_blank" href="https://github.com/msf930">
                        <img
                            src="/github.png"
                            alt="My Github profile"
                            className="icon"
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
                <div className="section__pic-container">
                    <img
                        src="about.jpg"
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
                            As a skilled and experienced front-end developer, I bring a strong passion for creating visually appealing and userfriendly
                            websites. I have a solid foundation in HTML, CSS, and JavaScript, and experience in
                            modern libraries such as React and frameworks like Next.
                            I have a strong eye for detail and a commitment to writing clean, well-structured code.
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
                        <div className="btn-container">
                            <Link href="https://github.com/msf930/yusha-front" target="_blank">
                                <button
                                    className="btn btn-color-2 project-btn"
                                >
                                    Github
                                </button>
                            </Link>
                            <Link href="https://yusha.ai/" target="_blank">
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
                        className="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:msf930@gmail.com">msf930@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                        src="/linkedin.png"
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p><a href="https://www.linkedin.com/in/matt-folsom/" target="_blank">LinkedIn</a></p>
                </div>
            </div>
        </section>

    </>
  )
}
