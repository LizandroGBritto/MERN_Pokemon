import '../App.css';
import axios from 'axios';

const Pokemon = ({ setPokemonNames, setError }) => {
    const fetchPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            const pokemonList = response.data.results.map(pokemon => pokemon.name);
            setPokemonNames(pokemonList);
            setError(null);
        } catch (error) {
            setError('Error al obtener la lista de Pokémon');
        }
    };

    return (
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
    );
};

export default Pokemon;