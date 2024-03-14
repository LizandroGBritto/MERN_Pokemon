import './App.css'
import Pokemon from './components/Pokemon'
import { useState } from 'react';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Generador de Nombres de Pokémon</h1>
      <Pokemon setPokemonNames={setPokemonNames} setError={setError} />
      {error && <p>{error}</p>}
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;