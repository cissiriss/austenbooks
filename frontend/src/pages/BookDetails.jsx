import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'

function BookDetails () {

  const {id} = useParams()
  const [books, setBooks] = useState(null)

  useEffect( () => {
    async function fetchBooks () {
      try {
    let response = await axios(`https://gutendex.com/books/${id}`)
    let result = response.data
    setBooks(result)
    } catch (error) {
    console.error("Error fetching data: ", error)
  } 
}
  fetchBooks()
  }, [id]) 

  return (
    books && 
    <>
    <div>{books.title}
      {books.authors.map((author) => (
        <li key={author.index}> Author: {author.name}</li>
      ))}
      {books.subjects.map((subject)=> (
        <li key={subject.index}>{subject}</li>
        ))}

      <a href={books.formats["text/html"]} target="_blank" rel="noopener noreferrer">
        Read online
      </a>
    </div>
    <div>
        <Reviews />
    </div>
    </>
  )
}

export default BookDetails