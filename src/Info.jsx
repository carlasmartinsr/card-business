import carla from './assets/carlam.jpg'

function Info(){
    return (
        <header>
            <img src={carla} alt="Carla" className='info-img'/>
            <div className='info-content'>
                <h1>Carla Martins</h1>
                 <p className='info-role'>Frontend Developer</p>
                <a href='https://my-portafolio-journal.netlify.app/' target="_blank" rel="noopener noreferrer"className='info-link'> My Portafolio Journal</a>
                <nav className='info-contact' aria-label='Contact İnformation'>
                    <a href="mailto:carlasmartinsr@gmail.com" className='info-contact-link'>
                        <i className="icon-link fa-solid fa-envelope" aria-hidden="true"></i>
                         <span >Mail</span>
                    </a>
                     <a href="https://www.linkedin.com/in/carla-martins-378a0223b" target="_blank" rel="noopener noreferrer" className='info-contact-link info-contact-link--linkedin'>
                         <i className="icon-link fa-brands fa-linkedin" aria-hidden="true"></i>
                        <span >Linkedin</span> 
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Info

