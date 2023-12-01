import React from 'react'
import './Button.css'
import mas from '../assets/MENU-DESPLEGABLE/masRosado.png'
import igIcon from '../assets/MENU-DESPLEGABLE/insta_rosado.png'
import whatsapp from '../assets/MENU-DESPLEGABLE/whatsapp_rosado.png'
import mail from '../assets/MENU DESPLEGABLE/correo_rosado.png'


function Button() {
    return (
        <div className="container">
            <input type="checkbox" id="btn-mas"/>
                <div className="redes">
                    <a href="https://www.instagram.com/valeentina_ar/" className="icon-instagram">
                        <img src={igIcon} alt="ig icon" />
                    </a>
                    <a href="https://wa.me/573023442791" className="icon-mail">
                        <img src={whatsapp} alt="whatsapp" />
                    </a>
                    <a href="https://co.pinterest.com/fairysart/" className="icon-camara">
                        <img src={mail} alt="mail" />
                    </a>
                </div>
                <div className="btn-mas">
                    <label for="btn-mas" className="icon-mas">
                        <img src={mas} alt="" />
                    </label>
                </div>
        </div>
    )
}

export default Button