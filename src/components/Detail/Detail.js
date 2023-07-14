import React from 'react';
import Card from '../Card/Card';
import { useParams } from "react-router-dom";
import './Detail.css';


const Detail = () => {
  const {id} = useParams();
  const pokemon = getPokemon(id);


  function getPokemon(id) {
    var pokemons = {
      '001': {
        id:'001', 
        type1:'GRASS',
        type2:'POISON', 
        name:'Ivysaur' ,
        img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
        bio: "Bulbasaur, Grass and Poison type pokemon. A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
        stats: [
          {
            key: 'HP',
            value: 45
          },
          {
            key: 'Attack',
            value: 49
          }
        ],
        trainings:[
          {
            key: 'Base Experience',
            value: 64
          }
        ],
        'species':[
          {
            key: 'Genus',
            value: 'Seed Pokémon'
          }
        ]
      },
      '002': {id:'002',type1:'GRASS',type2:'POISON', name:'Bulbasaur' ,img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'},
      '003': {id:'003', type1:'GRASS',type2:'POISON', name:'Venusaur' ,img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'}
    };

    return pokemons[id];
  }

  return  (
    <div className="App">
      <div className='items container-fluid'>
          <div className='row'>
              <div className='Card col-4'>
                  <Card pokemon={pokemon}></Card>
              </div>    
              <div className='col-8'>
                  <p>Information</p>
              </div>
              <div className='table col-8'>
                <p>
                  {pokemon.id}
                </p>
                <p>
                {pokemon.name}
                </p>
              </div>
              <div>
                <span className='text-bold'>Bio</span>
                <p>{pokemon.bio}</p>
              </div>
              <div>Stats</div>
              <table>
              {
                pokemon.stats.map( ( { key, value } ) => (
                    <tr>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                ) )
              }
               
              </table>
              </div>

              <div>Spices</div>
              <table>
              {
                pokemon.species.map( ( { key, value } ) => (
                  <tr>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
              ) )}
               
              </table>

          </div>
      </div>    
   );
};

export default Detail;