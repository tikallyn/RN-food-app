import { useEffect, useState } from "react"
import yelp from "../api/yelp"

const useResults = () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'chicago'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Oops! Something went wrong.')
        }
    }

    //the empty array as the second argument makes sure this is only called once
    useEffect(() => {
        searchApi('chinese')
    }, [])

    return [searchApi, results, errorMessage]

}

export default useResults