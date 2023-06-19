import './App.css';
import {useState, useEffect,  lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import gg from './back';
import MainPage from './views/MainPage';
import CatalogPage from './views/CatalogPage';
import Header from './components/header/header';
function App() {
  const [orders, setOrder] = useState(null);
  const [list, setList] = useState(gg)
  const [filderedList, setFilter] = useState(gg);
  useEffect(() => {
    setFilter(list.filter(a => a.sale === true))
  }, [list])
  const addOrder = (item) => {
        if(orders === null) setOrder([item]);
        else {
          setOrder([...orders, item])
        }
  }
  const reduceOrder = (item) => {
    setOrder(orders.filter(a => a.id !== item ))
  }
  return (
    <div className="App">
      <Header forModal={orders} forModalDelete={reduceOrder}></Header>
      <Suspense>
        <Routes>
          <Route path='/' element={<MainPage filderedList={filderedList} addOr={addOrder}/>}/>
          <Route path='/catalog' element={<CatalogPage list={list} addOr={addOrder}/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
