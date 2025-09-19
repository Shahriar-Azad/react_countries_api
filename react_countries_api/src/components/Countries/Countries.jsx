import { use } from "react"
import Country from "../Country/Country";


const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)

  return (
    <div>
        <h1>In the Countries: {countries.length}</h1>
        {
            countries.map(country=> <Country country={country}></Country>)
        }

        <p>this is brazil </p>
        <p>this is united states haha</p>
        <p>this is united states haha</p>
        <p>this is united states haha</p>
    </div>
  )
}

export default Countries