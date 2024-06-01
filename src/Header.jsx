import abi from './assets/carla.png'

function Header(){
    return (
        <header>
            <img src={abi} alt="Abi, a cat with black and white fur similar to that of a cow." className='header-img'/>
            <div className='header-content'>
                <h1>Carla Martins</h1>
                 <p className='header-role'>Frontend Developer</p>
                <a href='https://my-portafolio-journal.netlify.app/' target="_blank" rel="noopener noreferrer"className='header-link'> My Portafolio Journal</a>
                <nav className='header-contact' aria-label='Contact İnformation'>
                    <a href="mailto:carlasmartinsr@gmail.com" className='header-contact-link'>
                        <i className="icon-link fa-solid fa-envelope" aria-hidden="true"></i>
                         <span >Mail</span>
                    </a>
                     <a href="https://www.linkedin.com/in/carla-martins-378a0223b" target="_blank" rel="noopener noreferrer" className='header-contact-link header-contact-link--linkedin'>
                         <i className="icon-link fa-brands fa-linkedin" aria-hiddentrue></i>
                        <span >Linkedin</span> 
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header

