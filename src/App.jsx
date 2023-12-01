import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './components/sideMenu.jsx'
import Home from './views/home/Home.jsx'
import Button from './components/Button.jsx';
import DesignProyects from './views/design/DesignProyects.jsx'
import Art from './views/art/Art.jsx'
import Photographs from './views/photographs/Photographs.jsx'
function App() {

  return (
  <>
    <SideMenu/>
    <Home/>
    <DesignProyects/>
    <Art/>
    <Photographs/>
    <Button/>
  </>
  )
}

export default App
