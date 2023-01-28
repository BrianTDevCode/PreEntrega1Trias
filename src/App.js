import './components/Navbar/Navbar'
import './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer message = 'Bienvenidos a la tienda!'/>
    </>
  );
}

export default App;
