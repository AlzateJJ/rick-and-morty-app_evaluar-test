import { useEffect, useState, Suspense, lazy } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormSearch from './assets/components/FormSearch'
import './App.css'
import LoadingCharacterCard from './assets/components/LoadingCharacterCard'
const CharacterCard = lazy(() => import('./assets/components/CharacterCard'))

function App() {

	const [inputValue, setInputValue] = useState('')

	const url = inputValue ? 
	`https://rickandmortyapi.com/api/character/?name=${inputValue}&status=alive` : 
	'https://rickandmortyapi.com/api/character'

	const [charactersInfo, setCharactersInfo] = useFetch(url)

	useEffect(() => {
		setCharactersInfo()
	}, [inputValue])

	console.log(charactersInfo)

	return (
		<div className='app'>
			<h1 className='app_title'>RICK AND MORTY API</h1>
			<FormSearch 
				valorInputSetter={setInputValue}
			/>
			<section className='characters_wrapper'>
					{
						charactersInfo?.results != null ?
							charactersInfo?.results.map(character => (
								<Suspense fallback = { <LoadingCharacterCard key = {character.id} /> }>
									<CharacterCard 
										character = {character}
										key = {character.id}
									/>
								</Suspense>
							))
						:
						<div className='noResults__msg'>
							<h2 className='noResults__msg-title'>No se encontraron personajes :(</h2>
						</div>

					}
			</section>
		</div>
	)
}

export default App
