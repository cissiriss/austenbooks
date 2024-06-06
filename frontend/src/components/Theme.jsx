import { useContext, useEffect, useState } from "react"
import ThemeContext from '../ThemeContext'

function Theme() {
  const {themeValue, setThemeValue} = useContext(ThemeContext)
  const [buttonValue, setButtonValue] = useState("Dark")

  useEffect(() => {
    if (themeValue === "Dark") {
      setButtonValue("Light");
      
    } else {
      setButtonValue("Dark");
    }
  }, [themeValue]);

  function handleClick() {
    setThemeValue(buttonValue)
  }

  return (
    <input type="button" onClick={handleClick}value={buttonValue}/>
  )
}

export default Theme