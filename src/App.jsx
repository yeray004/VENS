import './App.css'
import SideMenu from './components/sideMenu.jsx'
import Home from './views/home/Home.jsx'
import Button from './components/Button.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesignProyects from './views/design/DesignProyects.jsx'


function App() {

  return (
  <>
    <SideMenu/>
    <Home/>
    <DesignProyects/>
    <Button/>
  </>
  )
}

export default App
