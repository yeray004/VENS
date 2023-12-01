import React from 'react'
import './Photographs.css'
import foto1 from '../../assets/FOTOS/FOTO1.jpg'
import foto2 from '../../assets/FOTOS/FOTO2.jpg'
import foto3 from '../../assets/FOTOS/FOTO3.jpg'
import foto4 from '../../assets/FOTOS/FOTO4.jpg'
import foto5 from '../../assets/FOTOS/FOTO5.jpg'
import foto6 from '../../assets/FOTOS/FOTO6.jpg'
import foto7 from '../../assets/FOTOS/FOTO7.jpg'
import foto8 from '../../assets/FOTOS/FOTO8.jpg'
import foto9 from '../../assets/FOTOS/FOTO9.jpg'
import foto10 from '../../assets/FOTOS/FOTO10.jpg'
import foto11 from '../../assets/FOTOS/FOTO11.jpg'
import foto12 from '../../assets/FOTOS/FOTO12.jpg'

function Photographs() {
  return (
    <article className='sideMenuSpace photographs'>
      <h1>Fotografías</h1><hr />
      <section className='photographsGallery'>
        <div className='photosColumn'>
          <div>
            <img src={foto1} alt="" />
            <p>Movistar Arena - Bogotá</p>
          </div>
          <div>
            <img src={foto2} alt="" />
            <p>THE LUMINEERS - RoyalCenter Bogotá</p>
          </div>
          <div>
            <img src={foto3} alt="" />
            <p>Movistar Arena - Bogotá</p>
          </div>
          <div>
            <img src={foto4} alt="" />
            <p>Parque Natural - Chicaque</p>
          </div>
          <div>
            <img src={foto5} alt="" />
            <p>Centro de Bogotá</p>
          </div>
          <div>
            <img src={foto6} alt="" />
            <p>El Aquelarre</p>
          </div>
        </div>
        <div className='photosColumn'>
          <div>
            <img src={foto7} alt="" />
            <p>Cartagena</p>
          </div>
          <div>
            <img src={foto8} alt="" />
            <p>Hotel Sonesta - Cartagena</p>
          </div>
          <div>
            <img src={foto9} alt="" />
            <p>Centro de Bogotá</p>
          </div>
          <div>
            <img src={foto10} alt="" />
            <p>Cartagena</p>
          </div>
          <div>
            <img src={foto11} alt="" />
            <p>THE LUMINEERS - Royal Center</p>
          </div>
          <div>
            <img src={foto12} alt="" />
            <p>Mi primera vez en SITP</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Photographs
/* rfc */