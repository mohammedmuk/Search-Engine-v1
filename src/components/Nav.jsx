
import { useState } from "react"

const Nav = () => {
  const [dark, setDark] = useState(false)
  const htmlTag = document.querySelector('.htm')
  const darkMode = () =>{
    htmlTag.classList.toggle('dark')
    setDark(htmlTag.classList.contains('dark'))
  }
  return (
    <header className="mt-5 flex justify-between text-xl">
        <div className="logo cursor-pointer text-black dark:text-white">
            Search 🔍
        </div>
        <div className="mode cursor-pointer" onClick={darkMode}>
        {!dark ? <div>
            Dark 🌙
        </div> : 
        <div className="text-white">
          Light ☀️
        </div>}
        </div>
    </header>
  )
}

export default Nav
