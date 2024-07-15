import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Introduction from './components/Introduction/Introduction'
import Set from './components/Set/Set'
import Comps from './components/Comps/Comps'
import Augments from './components/Augments/Augments'
import Items from './components/Items/Items'
import Champions from './components/Champions/Champions'
import ChampionView from './components/ChampionView/ChampionView'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/set' element={<Set />} />
        <Route path='/comps' element={<Comps />} />
        <Route path='/augments' element={<Augments />} />
        <Route path='/items' element={<Items />} />
        <Route path='/champions' element={<Champions />} />
        <Route path='/champions/:name' element={ <ChampionView />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
