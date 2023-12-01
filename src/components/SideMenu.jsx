import React from 'react'
import './SideMenu.css'
import logo from '../assets/MENU-LATERAL/Logo.Blanco.png'
import person from '../assets/MENU-LATERAL/SobreMi_FondoNegro.Rosado.png'
import flor from '../assets/MENU-LATERAL/ProyectosDiseno_FondoNegro.Verde.png'
import ilustraciones from '../assets/MENU-LATERAL/Ilustraciones_FondoNegro.Rosado.png'
import fotos from '../assets/MENU-LATERAL/Fotografias_FondoNegro.Verde.png'

function sideMenu() {
  return (
    <>
    <aside>
      <img src={logo} alt="Logo VENS" className='menuLogo'/>
      <div>
        <ul className="ulMenu">
          <li className="liMenu">
            <img src={person} alt="icon" className="imgMenu" />
            <p className="pMenu">Sobre mí</p>
          </li>
          <li className="liMenu">
            <img src={flor} alt="icon" className="imgMenu" />
            <p className="pMenu">Proyectos Diseño</p>
          </li>
          <li className="liMenu">
            <img src={ilustraciones} alt="icon" className="imgMenu" />
            <p className="pMenu">Ilustraciones</p>
          </li>
          <li className="liMenu">
            <img src={fotos} alt="icon" className="imgMenu" />
            <p className="pMenu">Fotografías</p>
          </li>
        </ul>
      </div>
    </aside>
    </>
    )
}

export default sideMenu