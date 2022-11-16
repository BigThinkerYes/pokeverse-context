import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap/Button";
// import { FavoritesContext } from "../FavoritesProvider";
// import { PokemonCard } from "../components/PokemonCard";

function Favorites({ name }) {
  const [pokemon, setPokemon] = useState(null);
  // destructure addFavorite out of useContext
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <Container>
      <Row className="mb-4">
        <Col sm="8" md="6" className="mx-auto">
          {filteredPokemon.map((pokemon) => (
            <Col key={pokemon.name}>
              <PokemonCard name={favorite} />
            </Col>
          ))}
          <Button
            variant="primary"
            className="btn btn-danger"
            onClick={() => RemoveFavorite(name)}
          >
            Remove from Favorites
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export { Favorites };
