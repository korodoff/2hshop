
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import HomeLiving from './pages/HomeLiving';
import Cart from './component/cart/Cart';
import PlaceOrder from './component/placeorder/PlaceOrder';

function App() {
  return (
    <div className="App">
    
       <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/men' element={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/homeliving' element={<HomeLiving/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Cart/placeorder' element={<PlaceOrder/>}/>
          </Routes>
       </BrowserRouter>
        
      
    </div>
  );
}

export default App;
