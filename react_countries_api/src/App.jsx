import Countries from './components/Countries/Countries'

import './App.css'



const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")

function App() {
 

  return (
    <>
    <Countries></Countries>
    </>
  )
}

export default App
