import React from 'react'
import './styles/CharacterCard.css'

const CharacterCard = ( {character} ) => {

    // console.log(character) //  
    return (
        <article className='character__card'>
            <header className='character__img-container'>
                <img className='character__img' src= {`${character.image}`} alt="Imágen del personaje" />
            </header>
            <section className='character__info-section'>
                <h3 className='character__info character__name'><span className='character__info-label character__name-span'>Nombre: </span>{`${character?.name}`}</h3>
                <h3 className='character__info character__status'><span className='character__info-label character__status-span'>Estado: </span>{character?.status === 'Alive' ? 'Vivo 🟢' : (character?.status === 'Dead' ? 'Muerto 🔴' : 'Desconocido 🟡')}</h3>
                <h3 className='character__info character__location'><span className='character__info-label character__location-span'>Localización: </span>
                    { character?.location.name.length >= 14 ? `${character?.location.name.substring(0, 14)}...` : `${character?.location.name}`}
                </h3>
            </section>
        </article>
    )
}

export default CharacterCard