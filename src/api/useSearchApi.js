import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams, useLocation } from 'react-router-dom'


const useSearch = () => {
    const [Data, setData] = useState([])
    const [error, seterror] = useState(false)
    const [SearchQuery, setSearchQuery] = useState('')
    const [searchParams, setsearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const locationObj = useLocation();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(locationObj.search);
        const queryFromURL = urlSearchParams.get('q');
        if (queryFromURL) {
            setSearchQuery(queryFromURL);
        }

    }, [searchParams, locationObj])

    useEffect(() => {



        const debouncedSearch = setTimeout(() => {

            const query = `q=${SearchQuery}`;
            setsearchParams(query);

            if (SearchQuery) {
                axios.get(`https://dummyjson.com/products/search?${query}`)
                    .then((response) => {
                        if (response.data.products && response.data.products.length > 0) {
                            setData(response.data.products)
                            seterror(false);
                            setLoading(false);
                            console.log(response.data.products)
                        }
                        else {
                            setData([]);
                            setLoading(false);
                            seterror(true)
                        }

                    })
                    .catch((error) => {
                        seterror(true)
                        setData([])
                    })
            }
        }, 1500);
        return () => {
            clearTimeout(debouncedSearch)
        }

    }, [SearchQuery]);

    return { Data, error, setSearchQuery, SearchQuery }
}
export default useSearch;