import {
  createHashRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components';
import ThemeContext from './ThemeContext'
import { useState } from 'react'

import Home from './pages/Home'
import BookDetails from './pages/BookDetails'
import NavBar from './components/NavBar'
import Theme from './components/Theme'

const lightTheme = {
  background: 'white',
  color: 'grey'
}

const darkTheme = {
  background: 'grey', 
  color: 'white'
}

const ThemeContainer = styled.div`
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.color};
min-height: 100vh;
`

function App() {

  const [themeValue, setThemeValue] = useState("light")
  
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/:userName?' },
        { element: <BookDetails />, path: '/book/:id' },
      ],
      element: (
      <>
      <NavBar />
      <Outlet />
      </>)
    }
  ])

    return (
    <>
    <ThemeContext.Provider value={{themeValue, setThemeValue}}>
    <ThemeProvider theme={themeValue === "Dark" ? darkTheme : lightTheme}> 
    <ThemeContainer>
    <Theme />
    <RouterProvider router={router} />
    </ThemeContainer>
    </ThemeProvider>
    </ThemeContext.Provider>
    </>
    )
}
export default App

