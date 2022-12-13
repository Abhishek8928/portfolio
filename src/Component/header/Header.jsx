import React from 'react'
import logo from '../../img/logo.png'
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import './header.css';
const Header = () => {
    return (
    <>
        <header>

            <nav className="nav-wrapper">
                <div className="nav-link-container">

                    <img src={logo} alt="" className='nav-logo' />

                    <ul className="nav-link-item">
                        <li><a href="">Home</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blogs</a></li>
                    </ul>
                </div>

                <div className="button">
                    <button className="btn-get-in-touch"> {<SendIcon />}  GET IN TOUCH</button>
                    
                </div>
                </nav>
                

                <div className="hero-container txt-whi">

                    <h2 className='hero-intro'>
                        <span className='hero-title'>Hello 👋, I'm</span> <br />
                        Abhishek Sharma
                    </h2>
                    <h1 className='hero-work'>Front-end Developer</h1>
                    <p className='title-desc'>I design responsive website</p>

                    <div className="button-flex">
                        <div>
                        <button className="btn-project">PROJECTS</button>
                            <button className="btn-about">ABOUT ME</button>
                        </div>
                        <p className="small-thought title-desc">Don't wish for it! Work for it!
</p>
                    </div>

                    <div className="social-handle">
                        <p className="title-desc">Have a great morning</p>

                        <ul className="social">
                            <li> <LinkedInIcon /> </li>
                            <li><FacebookIcon /></li>
                            <li><GitHubIcon /></li>
                        </ul>
                    </div>


                    <div className="technology-container">
                        <h1 className='tech-title'>Technologies I am familiar with</h1>

                        <div className="tech-logo">
                            <img src="https://www.karkibishal.com/static/media/html.a25792db5f81776a70edffa8f82bb8ec.svg" alt="" />
                            <img src="https://www.karkibishal.com/static/media/css.1a0090ba231c6c275957e38da509f95a.svg" alt="" />
                            <img src="https://www.karkibishal.com/static/media/javascript.333c9ca301c4295b40b47e89442f536e.svg" alt="" />
                            <img src="https://www.karkibishal.com/static/media/react.6f41dc1b51f5f80e317dc0977b3c1bc6.svg" alt="" />
                            <img src="https://www.karkibishal.com/static/media/bootstrap.28b00dca8ab2454b3fa9ab25ec6316cf.svg" alt="" />
                            <img className="resize-img" src="https://www.karkibishal.com/static/media/git.2a42685e7d032e947150f389ef673989.svg" alt="" />
                            <img src="https://www.karkibishal.com/static/media/github.0aab637846cca5387bb673b54358f0a4.svg" alt="" />
                            <img src="https://www.karkibishal.com/static/media/visual-studio-code.1abf949973fa3b3f1eaa2fde5697f053.svg" alt="" />
                        </div>
                    </div>
                </div>
            </header>
            

            </>
    )
}

export default Header
