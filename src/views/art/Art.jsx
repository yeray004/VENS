import React from 'react'
import './Art.css'
import fotoDigital1 from '../../assets/ILUSTRACIONES/FOTODIGITAL1.jpg'
import fotoDigital2 from '../../assets/ILUSTRACIONES/FOTODIGITAL2.jpg'
import fotoDigital3 from '../../assets/ILUSTRACIONES/FOTODIGITAL3.jpg'
import fotoAnaloga1 from '../../assets/ILUSTRACIONES/FOTOANALOGA1.jpg'
import fotoAnaloga2 from '../../assets/ILUSTRACIONES/FOTOANALOGA2.jpg'
import fotoAnaloga3 from '../../assets/ILUSTRACIONES/FOTOANALOGA3.jpg'
import fotoAnaloga4 from '../../assets/ILUSTRACIONES/FOTOANALOGA4.jpg'


function Art() {
  return (
    <article className='sideMenuSpace'>
      <section className='digitales'>
        <div className='contIlustracion'>
          <h1>Digitales</h1><hr />
          <img src={fotoDigital1} alt="ilustración"/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis perferendis nesciunt magni, odio inventore cupiditate delectus quia dignissimos? Illo nulla tempore aliquam perferendis? Beatae minus explicabo veritatis quos inventore architecto?</p>
        </div>
        <div className='contIlustracion2'>
          <div>
            <img src={fotoDigital3} alt="" className='imagenDigital'/>
            <p></p>
          </div>
          <div>
            <img src={fotoDigital2} alt="" className='imagenDigital'/>
            <p></p>
          </div>
        </div>
        <div>

        </div>
      </section>
      <section className='analogas'>
        <h1>Analogas</h1><hr />
        <div>
          <img src={fotoAnaloga1} alt="Dibujo" />
          <img src={fotoAnaloga2} alt="Dibujo" />
          <img src={fotoAnaloga3} alt="Dibujo" />
          <img src={fotoAnaloga4} alt="Dibujo" />
        </div>
      </section>
    </article>
  )
}

export default Art