import React from 'react'
import './DesignProyects.css'

import folleto1 from '../../assets/PROYECTOS/MAQUETACION/FOLLETO1.jpg'
import folleto2 from '../../assets/PROYECTOS/MAQUETACION/FOLLETO2.jpg'
import folletoCam from '../../assets/PROYECTOS/MAQUETACION/Camara.valentina.aldana_pages-to-jpg-0001.jpg'

import venus3 from '../../assets/PROYECTOS/ID-VISUAL/venus3.png'
import loguito from '../../assets/PROYECTOS/ID-VISUAL/Logito.jpg'
import themysciraTarot from '../../assets/PROYECTOS/ID-VISUAL/THEMYSCIRA.png'
import blackTarot from '../../assets/PROYECTOS/ID-VISUAL/THEMYSCIRABLACK.png'
import whiteTarot from '../../assets/PROYECTOS/ID-VISUAL/THEMYSCIRAWHITE.png'



function DesignProyects() {
  return (
    <article className='sideMenuSpace proyectView'>
      <h1>Maquetación</h1><hr />
      <section className='maquetacion'>
        <img src={folleto2} alt="" className='maquetacion1' />
        <img src={folletoCam} alt="" className='maquetacion1' />
        <img src={folleto1} alt="" className='maquetacion1' />
        <div>
          <h3>FOLLETO - THE NEIGHBOURHOOD</h3>
          <p>Diseño de folleto para impresión de la banda estadounidense THE NEIGHBOURHOOD, manejo de Adobe Illustrator y conocimientos de diseño básico.</p>
          <h3>FLYER - PENTAX K1000</h3>
          <p>Diseño de Flyer para impresión de la cámara PENTAX K1000, junto con apartados para especificar sus características y que es lo que la destaca en el mercado. Competencia en el uso de herramientas como Adobe Illustrator y conocimientos de diseño básico.</p>
        </div>
        <a href="">¡HECHA UN VISTAZO!</a>
      </section>
      <h1>Identidad de marca</h1><hr />
      <section className='proyectSection1'>
        <img src={venus3} alt="venus" />        
      </section>
      <section className='proyectSection2'>
        <div>
          <a href="#">MANUAL DE MARCA</a>
        </div>
        <p>Creación desde 0 de la identidad e imagen corporativa de mi marca personal, Venus cuenta con identificadores visuales, tarjeta de presentación, patrones para piezas publicitarias y todo lo que es fundamental para una marca en cuanto a diseño.</p>
      </section>
      <section className='proyectSection3'>
        <img src={loguito} alt="icono venus" />
        <img src={themysciraTarot} alt="themyscira tarot" />
      </section>
      <section className='proyectSection3'>
        <img src={blackTarot} alt="icono venus" />
        <img src={whiteTarot} alt="themyscira tarot" />
      </section>
      <h1>Personajes</h1><hr />
    </article>
  )
}

export default DesignProyects