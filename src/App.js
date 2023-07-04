import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter , createRoutesFromElements , RouterProvider , Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import Rootlayout from './Components/Rootlayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
