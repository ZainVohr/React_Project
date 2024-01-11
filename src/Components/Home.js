import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Sidebar } from './Sidebar';
import { useSearchParams } from 'react-router-dom';
import { Search } from './Search';
export const Home = () => {
    const [products, setproducts] = useState([])
    const [isError, seterror] = useState(" ");
    const [query, setquery] = useState("")
    const [searchParams, setsearchParams] = useSearchParams()

    // useEffect(() => {
    //     axios.get("https://dummyjson.com/products")
    //         .then((response) => {
    //             setproducts(response.data.products)
    //         })
    //         .catch((error) => seterror(error.message))
    // }, [])

    useEffect(() => {
        const queryFromURL = searchParams.get("query") || "";
        setquery(queryFromURL);
    }, [searchParams]);
    { isError !== "" && <h2>{isError}</h2> }
    return (
        <div className="Home">
            <Sidebar />

            <Search />
        </div>
    )
}
