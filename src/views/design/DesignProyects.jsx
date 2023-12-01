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

import fresa1 from '../../assets/PROYECTOS/PERSONAJES/FRESA1.png'
import fresa2 from '../../assets/PROYECTOS/PERSONAJES/FRESA2.png'
import maquina from '../../assets/PROYECTOS/PERSONAJES/MAQUINA.png'



function DesignProyects() {
  return (
    <article className='sideMenuSpace proyectView'>
      <h1 className='seccionTitulos'>Maquetación</h1><hr />
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
      <h1 className='seccionTitulos'>Identidad de marca</h1><hr />
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
      <section className='proyectSection2'>
        <p>Desde la identidad visual hasta las ilustraciones de su producto principal, un tarot ilustrado de mujeres contemporáneas y de la época, son realizados por mí, demuestra mi experiencia en el manejo de programas de dibujo y diseño.</p>
        <div>
          <a href="#">THEMYSCIRA</a>
        </div>
      </section>
      <h1 className='seccionTitulos'>Personajes</h1><hr />
      <section className='proyectSection4'>
        <div>
          <img src={fresa1} alt="Personaje" />
          <img src={fresa2} alt="Personaje" />
          <p>👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀</p>
        </div>
        <div>
          <img src={maquina} alt="Personaje" />
          <h3>DISEÑO DE PERSONAJE - FRESA YOGUETA SUPER  SMASH</h3>
          <p>Para la edición especial SUPER SMASH, diseñe uno de los personajes fusionando el sabor fresa de la yogueta con Kirby, el cual es el personaje de los videojuegos más reconocidos de SUPER SMASH.</p>
          <h3>DISEÑO Y CREACIÓN DE PERSONAJE - MAQUINA SUPER  SMASH</h3>
          <p>Un personaje más de los que diseñe para la edición especial fue esta máquina que era la representante de la línea gráfica que se creó, así mismo diseñe el cómo se vería en 3D para la elaboración de futuros displays.</p>
        </div>
      </section>
    </article>
  )
}

export default DesignProyects