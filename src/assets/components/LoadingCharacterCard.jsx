import React from 'react'
import './styles/CharacterCard.css'

const LoadingCharacterCard = () => {

    // console.log(character)
    return (
        <article className='character__card'>
            <header className='character__img-container'>
                <img className='character__img' src='../../../loading_img.jpg' alt="Imágen de carga" />
            </header>
            <section className='character__info-section'>
                <h3 className='character__info character__name'>Cargando personaje...</h3>
            </section>
        </article>
    )
}

export default LoadingCharacterCard