import Container from "./components/Container"
import MobileMenuBackground from "./components/MobileMenuBackground"
import MobileMenu from "./components/MobileMenu"
import "./components/css-components/css-components.css"
import "./components/css-components/css-responsive.css"
//---------------------------------

export default function App(){
  return(
    <div id = "app">
      <Container />
      <MobileMenuBackground />
      <MobileMenu />
    </div>
  )
}
