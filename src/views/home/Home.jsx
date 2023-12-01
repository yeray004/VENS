import React from 'react'
import './Home.css'
import MyCarousel from './MyCarousel'; // Ajusta la ruta según la ubicación de tu componente


function Home() {
  return (
    <>
      <article className='sideMenuSpace homeView homeGrid'>
        <section className="homeGrid1 homeYo">
          {/*           <img src={yo} alt="Foto Valentina (VENUS)" className='homeYo'/> */}
        </section>
        <section className="homeGrid2 homeText">
          <p>¡HOLA!
            <br /><br />
            Soy VENUS, diseñadora gráfica y artista plástica, en esta
            página podrás encontrar la información necesaria si
            estás interesado en conocer mi trabajo como artista. :)
            <br /><br />
            Tengo interés por el mundo cinematográfico,
            la edición de video, la animación y la creación de
            personajes, no dudes en ver cada uno de mis trabajos
            si estás interesado en mi arte o en trabajar juntos.
          </p>
        </section>
        <section className="homeGrid3 wrapper">
          <div className='collapsible'>
            <input type="checkbox" id='collapsible-head-1' name='collapsible-head'/>
            <label htmlFor="collapsible-head-1">Experiencia</label>
            <div className='collapsible-text'>
              <h2>IDENTIDAD CORPORATIVA</h2>
              <p>Experiencia en la creación de diseños y rediseños de identidad visual (Logos, Manuales de marca, Tipografías)</p>
              <h2>THEMYSCIRA (TAROT)</h2>
              <p>Desde la identidad visual hasta las ilustraciones de su producto principal, un tarot ilustrado de mujeres contemporáneas y de la época, son realizados por mi, refleja mi experiencia en el manejo de programas de dibujo y diseño.</p>
              <h2>BOGOSHORTS</h2>
              <p>Voluntaria de comunicaciones enfocada en el diseño y apoyo de la realización de piezas gráficas.</p>
            </div>
          </div>

          <div className='collapsible'>
            <input type="checkbox" id='collapsible-head-2' name='collapsible-head'/>
            <label htmlFor="collapsible-head-2">Educación</label>
            <div className='collapsible-text'>
              <h2>Técnico Profesional en Procesos Gráficos</h2>
              <b>(2022- 2023)</b>
              <p>Ce-Art <br/> Institución de Educación Superior</p>
              <br />
              <h2>Adobe Photoshop CC</h2>
              <b>(2022)</b>
              <p>Domestika</p>
              <br />
              <h2>Tecnólogo en Dibujo Arquitectónico</h2>
              <b>(2020 - 2021)</b>
              <p>SENA: Servicio Nacional de Aprendizaje</p>
            </div>
          </div>

          <div className='collapsible'>
            <input type="checkbox" id='collapsible-head-3' />
            <label htmlFor="collapsible-head-3">Objetivos personales</label>
            <div className='collapsible-text'>
              <h2>EDICIÓN Y ANIMACIÓN</h2>
              <p>Mejorar mis habilidades en edición y animación para futuros proyectos de diseño y audiovisuales, llegando a tener los suficientes conocimientos para la creación de mi primer cortometraje animado.</p>
              <br />
              <h2>ESTUDIO DE ARTE</h2>
              <p>A largo plazo espero tener mi propio estudio de arte trabajando junto a varios artistas afines a mis ideales, logrando generar un impacto real en las comunidades de mi país.</p>
            </div>
          </div>

          <div className='collapsible'>
            <input type="checkbox" id='collapsible-head-4' />
            <label htmlFor="collapsible-head-4">Programas/Habilidades</label>
            <div className='collapsible-text'>
              <ul>
                <li>ILLUSTRATOR</li>
                <li>PHOTOSHOP</li>
                <li>EDICIÓN DE VIDEO</li>
                <li>FOTOGRAFÍA ANÁLOGA Y DIGITAL</li>
                <li>ENCUADERNACIÓN</li>
                <li>SERIGRAFÍA</li>
                <li>SUBLIMACIÓN</li>
              </ul>
            </div>
          </div>

          <div className='collapsible'>
            <input type="checkbox" id='collapsible-head-5' />
            <label htmlFor="collapsible-head-5">Idiomas</label>
            <div className='collapsible-text'>
              <h2>ESPAÑOL</h2>
              <p>Nativo</p>
              <h2>INGLÉS</h2>
              <p>B1</p>
            </div>
          </div>


        </section>
        <section className="homeGrid4">
          <MyCarousel />
        </section>
      </article>
    </>
  )
}

export default Home