import React,{useState, useEffect} from "react"
import SearchBar from "./SearchBar/SearchBar"

const App = () => {

    const [products, setProducts] = useState([])

    return (
        <SearchBar />
    )
}

export default App