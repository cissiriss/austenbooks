import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDiv = styled.div`
background-color: #cad1d3;
`

function App() {

  const [books, setBooks] = useState(null)
  const [isClicked, setIsClicked] = useState(null)

    useEffect( () => {
      async function fetchBooks () {
      let response = await axios('https://gutendex.com/books?search=austen')
      let result = response.data
      setBooks(result)
    } 
    fetchBooks()
    }, []) 
    
    function handleClick (id) {
      if (isClicked === id) {
      setIsClicked(null)
      } else {
        setIsClicked(id)
      }
    } 

  return (
    <>
    {books &&
    <ContainerDiv>
    <ul>
    {books.results.map((book) => (
      <li id="list" key={book.id}  onClick={() => handleClick(book.id)}>Name: {book.title}
        <ol>
          {isClicked === book.id && book.authors.map((author) => (
          <li key={author.index}> Author: {author.name}</li>
          ))}
           {isClicked === book.id && book.subjects.map((subject)=> (
            <li key={subject.index}>{subject}</li>
           ))}
           
           {book.formats["text/html"] && (
            <li>
            <a href={book.formats["text/html"]} target="_blank" rel="noopener noreferrer">
              Read online
            </a>
          </li>
           )}
           </ol>
      </li>
      
    ))}
    </ul>
 
    </ContainerDiv>
    }
    </>
  )
}

export default App

