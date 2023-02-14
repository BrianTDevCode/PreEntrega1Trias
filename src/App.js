// React Router
import {Routes, Route, BrowserRouter} from 'react-router-dom'

//Components

import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';







function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    {/* <ItemListContainer greeting = 'Bienvenidos a la tienda!'/> */}

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer />}/>
      <Route path='/item/:id' element={<ItemDetailContainer />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
