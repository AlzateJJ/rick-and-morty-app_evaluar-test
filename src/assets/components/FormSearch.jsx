import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ( {valorInputSetter} ) => {

    const valorInput = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        if (valorInput?.current.value.length > 2) {
            valorInputSetter(valorInput?.current.value.trim())
        } else {
            valorInputSetter('')
        }
        // valorInput.current.value = ''
    }

    return (
        <form className="form" onSubmit = {handleSubmit}>
            <input 
                placeholder="Nombre del personaje" 
                className="form__input" 
                ref={valorInput} 
                type="text"
                onChange={handleSubmit}
            />
        </form>
    )
}

export default FormSearch