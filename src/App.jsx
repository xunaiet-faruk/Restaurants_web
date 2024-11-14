
import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import HomePage from './Home/HomePage'

function App() {
  

  return (
    <div className='max-w-[1920px] mx-auto'>
    
    <Navbar/>

    <HomePage />
    
    <Footer/>
    
    </div>
  )
}

export default App
