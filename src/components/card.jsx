

function Card({ pokemon }) {
  return (
    <div className="card-box">
      <h2 className="card-title">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      <p className="card-text">Height: {pokemon.height}</p>
      <p className="card-text">Weight: {pokemon.weight}</p> 
      <p className="card-text">Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  );
}

export default Card;