
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarkChart from './components/MarkChart/MarkChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const markPromise = axios.get('markData.json')
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

        <div className='flex justify-center'>
          <Suspense fallback={
            <span className="loading loading-spinner loading-xl "></span>}>
            <MarkChart markPromise={markPromise}></MarkChart>
          </Suspense>
        </div>


        <div className='flex justify-center mt-10'>
          <ResultChart></ResultChart>
        </div>
      </main>
    </>
  )
}

export default App
