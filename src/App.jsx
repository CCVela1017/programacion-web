import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from "./components/card.jsx"

function App() {
  
  const [pokemonData, setPokemonData] = useState([])
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(URL)
      const results = response.data.results
      const pokemonDetails = await Promise.all(
        results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url)
          return res.data
        })
      )
      setPokemonData(pokemonDetails)
    } catch (error) {
      console.error('Error fetching Pokémon data:', error)
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])

  return (
    <>
      <h1 className="title">PokeAPI Cards</h1>
        <div className="card-container">
          {pokemonData.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
    </>
  )
}

export default App
