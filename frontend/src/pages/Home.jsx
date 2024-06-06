import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import WelcomeUser from '../components/WelcomeUser';

const MainStyle = styled.main`

`
const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
`
const WelcomeDiv = styled.div`
width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid 2px; 
`
const BookList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px;
padding: 20px;
border: solid grey 1px;
border-radius: 40px;
box-shadow: 5px 5px #b3b3b371;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

function Home () {

  const [books, setBooks] = useState(null)
  const [isClicked, setIsClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        let response = await axios('https://gutendex.com/books?search=austen')
        let result = response.data.results
        setBooks(result)
      } catch (error) {
        console.error("Error fetching data: ", error)
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, []);
  
  function handleClick (id) {
    if (isClicked === id) {
    setIsClicked(null)
    } else {
      setIsClicked(id)
    }
  } 

  const [userName, setUserName] = useState(),
  [savedName, setSavedName] = useState()

  function handleChange(event) {
  setUserName(event.target.value)
  }

  function handleClick2() {
    setSavedName(userName)
    setEnteredText("")
  }

  const [enteredText, setEnteredText] = useState()

return (
  <MainStyle>
     <WelcomeDiv>
    <h6>Skriv in ditt namn</h6>
    <input id="inputName" onChange={handleChange} value={enteredText}/>
    <input type="button" onClick={handleClick2} value="Skicka"/>
    </WelcomeDiv>
  <ContainerDiv>
    {savedName && 
    <WelcomeUser userName={savedName}/>}
  {isLoading ? (
    <div>
       {Array(10).fill().map((_, index) => (
      <p key={index}>
              <Skeleton height={30} width={`80%`} />
              <Skeleton height={25} width={`60%`} />
            </p>
            ))}
            </div>
           
          ) : (<ul>
              {books.map((book) => (
              <BookList id="list" key={book.id}  onClick={() => handleClick(book.id)}>{book.title}
              {isClicked === book.id && 
              <Link to={`/book/${book.id}`}>Details</Link>
              }
              </BookList>
              ))}
              </ul>
          )}
  </ContainerDiv>

  </MainStyle>
)}


export default Home