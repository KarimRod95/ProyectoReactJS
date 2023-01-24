import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import Info from './components/Tecno';
import './App.css';

function App() {
  return (
    <>
    <NavBar background={'transparent'}/>
    <ItemListContainer greeting='Lista de Productos'/>
    <Info title='Tecno Store'/>
    </>
  );
}

export default App;
