
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>
      <header className='max-w-7xl mx-auto'>
        <NavBar></NavBar>
        {/* <Navbar></Navbar> */}
      </header>
      <main className='max-w-7xl mx-auto'>
        <Suspense fallback={
          <span className="loading loading-spinner loading-xl "></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
