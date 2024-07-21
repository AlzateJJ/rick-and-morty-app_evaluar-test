import axios from 'axios'
import { useState } from 'react'

const useFetch = (endpoint) => {

    const [results, setResults] = useState()

    console.log(endpoint)
    const getApi = () => {
        axios.get(endpoint)
        .then(res => {
            setResults(res.data)
        })
        .catch(err => {
            console.log(err)
            setResults([{results: null}])
        })
    }

    return ( [results, getApi ] )
}

export default useFetch