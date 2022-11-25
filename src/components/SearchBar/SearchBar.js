import React, {useState} from "react"

const SearchBar = () => {

    // search value state
    const [searchValue, setSearchValue] = useState("")

    // filtered books state
    const [books, setBooks] = useState([])

    const handleInput = (event) => {
        setSearchValue(event.target.value)
    }

    // gets the relevant books
    if (searchValue.length >= 3) {
        let urlBase = "https://www.googleapis.com/books/v1/volumes?q="
        fetch(urlBase.concat(searchValue))
        .then((res) => res.json())
        .then((bookArr) => {
            const bookTitles = bookArr.items.map((book) => {
                return book.volumeInfo.title
            })
            setBooks(bookTitles)
        })
    }


    // the search bar and search results
    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInput}/>

            <ul>
                {books.map((book) => {
                    return <li key={book}>{book}</li>
                })}
            </ul>
        </div>
    )

}

export default SearchBar