import { UilMoon, UilApps, UilEstate, UilTimes,UilSun, UilUser, UilFileInfoAlt, UilBriefcaseAlt, UilScenery ,UilMessage } from '@iconscout/react-unicons'
import { useState } from 'react';

function Header() {

    const [isMenuOpen, setMenu] = useState(false)

    const [isDark,setDark] = useState(true)

    function openMenu() {
        setMenu(true)

    }
    function closeMenu() {
        setMenu(false)
    }
    const menuClass = isMenuOpen && "show-menu"

    const [coloreVariabile, setColoreVariabile] = useState('#ff0000'); // Valore iniziale

    const cambiaColore = () => {
      // Genera un nuovo colore casuale (puoi personalizzare questa parte)
      const nuovoColoreSfondo = isDark ? "#d7dbdf" : "#161823";
      const nuovoColoreTesto = isDark ? "#161823" : "#d7dbdf";
      const nuovoColoreSecondary = isDark ? "#161823" : "#f2cb78";
      const nuovoTestoButton = isDark ? "#d7dbdf" : "#f2cb78";
      setColoreVariabile(nuovoColoreSfondo);
        setDark(!isDark)
      // Applica il nuovo colore alla variabile CSS
      document.documentElement.style.setProperty('--bg-color', nuovoColoreSfondo);
      document.documentElement.style.setProperty('--primary-color', nuovoColoreTesto);
      document.documentElement.style.setProperty('--secondary-color', nuovoColoreSecondary);
      document.documentElement.style.setProperty('--text-button',nuovoTestoButton);
    };
    



    return (
        <header className="header py-4 pb-3 pb-md-2" id="header">
            <div className="logo">
                <a href="#">
                    <h2>Kelvin</h2>
                </a>
            </div>
            <nav className="nav-control header-nav d-none d-lg-flex">
                <ul className='d-none d-md-flex'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contatto</a></li>
                    <button className='nav-button' id="moon" onClick={cambiaColore}>
                    {isDark ? <UilMoon /> : <UilSun/>}
                    
                    </button>
                </ul>

  

            </nav>

 
            <nav className=" nav-control d-flex d-lg-none">
                <button className='nav-button' id="moon" onClick={cambiaColore}><UilMoon /></button>
                <button className='nav-button' id="Apps" onClick={openMenu}><UilApps /></button>
            </nav>
            <nav className={`nav-menu nav-control d-lg-none ${menuClass}`}>
                <a href = "#" className='d-flex flex-column align-items-center'>
                    <button><UilEstate /></button>
                    <h5 className='text-center'>Home</h5>

                </a>

                <a href = "#" className='d-flex flex-column align-items-center'>
                    <button><UilUser /></button>
                    <h5 className='text-center'>About</h5>

                </a>
                <a href = "#" className='d-flex flex-column align-items-center'>
                    <button><UilFileInfoAlt /></button>
                    <h5 className='text-center'>Skills</h5>

                </a>

                <a href = "#"  className='d-flex flex-column align-items-center'>
                    <button><UilBriefcaseAlt /></button>
                    <h5 className='text-center'>Services</h5>

                </a>

                <a href = "#" className='d-flex flex-column align-items-center'>
                    <button><UilScenery /></button>
                    <h5 className='text-center'>Portfolio</h5>

                </a>
                <a href = "#" className='d-flex flex-column align-items-center'>
                    <button><UilMessage /></button>
                    <h5 className='text-center'>Contact</h5>

                </a>


                <button className='nav-close' onClick={closeMenu}><UilTimes /></button>
            </nav>
        </header>
    )
}

export default Header;