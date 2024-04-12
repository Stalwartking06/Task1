import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'
import Home from './Home'
import Item from './Item'
import Jwel from './Jwel'
import Electronic from './Electronic'
import MensC from './MensC'
import WomenC from './WomenC'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/item' element={<Item></Item>}></Route>
      <Route path='/jwel' element={<Jwel></Jwel>}></Route>
      <Route path='/electronic' element={<Electronic></Electronic>}></Route>
      <Route path='/men' element={<MensC></MensC>}></Route>
      <Route path='/women' element={<WomenC></WomenC>}></Route>

    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App