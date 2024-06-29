import About from "./Component/About"
import Contact from "./Component/Contact"
import Experience from "./Component/Experience"
import Home from "./Component/Home"
import NavBar from "./Component/NavBar"
import Portfolio from "./Component/Portfolio"
import SocialLinks from "./Component/SocialLinks"


function App() {
 return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  )
}

export default App
