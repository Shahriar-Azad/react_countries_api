import React from "react"

const Country = ({ country }) => {
    console.log(country.name.common)
  return (
    <div>
        <h3>Name: {country.name.common} </h3>
        <p>Hello this is Bangladesh</p>
        <p>Hello this is Bangladesh</p>
    </div>
  )
}

export default Country