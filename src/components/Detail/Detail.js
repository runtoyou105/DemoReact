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
        name:'Bulbasaur' ,
        img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        bio: "Bulbasaur, Grass and Poison type pokemon. A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
        stats: [
          {
            key: 'HP',
            value_HP: 45,
            value_attack: 49,
            value_defense:49,
            value_spAt:65,
            value_spDef:45,
            Speed:45

          },
          
        ],
        trainings:[
          {
            key: 'Base Experience',
            exp: 64,
            happy:50,
            cr:45,
            gr:'Medium-Slow',
            abiI: '1.Overgrow ',
            abiII: '2. Chlorophyll (Hidden Ability)',
          }
        ],
        'species':[
          {
            genius: 'Seed Pokémon',
            hei: '0.7 m',
            wei:'6.9kg',
            gen:'Generation I',
            habi:'Grassland',
            shape:'Quadruped',
          }
        ]
      },
      '002': {
        id:'002',
        type1:'GRASS',
        type2:'POISON', 
        name:'Ivysaur' ,
        img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
        bio: "Ivysaur, Grass and Poison type pokemon. When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        stats: [
          {
            key: 'HP',
            value_HP: 60,
            value_attack: 62,
            value_defense:63,
            value_spAt:80,
            value_spDef:80,
            Speed:60
          },
          
        ],
        trainings:[
          {
            key: 'Base Experience',
            exp: 142,
            happy:50,
            cr:45,
            gr:'Medium-Slow',
            abiI: '1.Overgrow ',
            abiII: '2. Chlorophyll (Hidden Ability)',
          }
        ],
        'species':[
          {
            genius: 'Seed Pokémon',
            hei: '1 m',
            wei:'13 kg',
            gen:'Generation I',
            habi:'Grassland',
            shape:'Quadruped',
          }
        ]
      },
      '003': {
        id:'003', 
        type1:'GRASS',
        type2:'POISON', 
        name:'Venusaur' ,
        img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
        bio: "Venusaur, Grass and Poison type pokemon. The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        stats: [
          {
            key: 'HP',
            value_HP: 80,
            value_attack: 82,
            value_defense:83,
            value_spAt:100,
            value_spDef:100,
            Speed:80
          }
          
        ],
        trainings:[
          {
            key: 'Base Experience',
            exp: 263,
            happy:50,
            cr:45,
            gr:'Medium-Slow',
            abiI: '1.Overgrow ',
            abiII: '2. Chlorophyll (Hidden Ability)',

          }
        ],
        'species':[
          {
            genius: 'Seed Pokémon',
            hei: '2 m',
            wei:'100 kg',
            gen:'Generation I',
            habi:'Grassland',
            shape:'Quadruped',

          }
        ]
      },
    };
    

    return pokemons[id];
  }

  return  (
    <div className="App">
      <div className='items '>
          <div className='row'>
              <div className=' div-left col-lg-4 col-md-12'>
                  <Card pokemon={pokemon}></Card>
              </div>  
              <div className='div-right col-lg-8 col-md-12'>  
                  <div className=''>
                      <div>
                            <h4 className='bio'>Bio</h4>
                      </div>
                      <div>
                            <p>{pokemon.bio}</p>    
                      </div>
                      
                  </div>
                  <div>
                      <h4>Stats</h4>
                  </div>
                  <div className='table '>
                      <table>
                          <tr>
                              <td>HP</td>
                              <td>Attack</td>
                              <td>Defense</td>
                              <td>Special Attack</td>
                              <td>Special Defense</td>
                              <td>Speed</td>  
                          </tr>
                        {
                          pokemon.stats.map( ( {value_HP, value_attack,value_defense, value_spAt, value_spDef, Speed } ) => (
                              <tr>
                                <td>{value_HP}</td>
                                <td>{value_attack}</td>
                                <td>{value_defense}</td>
                                <td>{value_spAt}</td>
                                <td>{value_spDef}</td>
                                <td>{Speed}</td>
                              </tr>
                          ) )} 
                      </table>
                  </div>
              </div>
              
          </div>
          <div class="items p-2">
                <div class="row">
                    <div class="infor-left col-6">
                        <h4>Trainning</h4>
                        <div class="container">
                            <div class="column">
                                <div class="box">Base Experience:</div>
                                <div class="box">Base Happiness:</div>
                                <div class="box">Capture Rate:</div>
                                <div class="box">Growth Rate:</div>
                                <div class="box">Abilities:</div>
                            </div>
                            { 
                              pokemon.trainings.map( ( {exp,happy,cr,gr,abiI,abiII } ) => (
                                <div class="column">
                                    <div class="box">{exp}</div>
                                    <div class="box">{happy}</div>
                                    <div class="box">{cr}</div>
                                    <div class="box">{gr}</div>
                                    <div class="box">{abiI}</div>
                                    <div class="box">{abiII}</div>
                                </div>
                          ) )} 
                            
                        </div>
                    </div>
                    <div class="infor-right col-6">
                       <h4>Specices</h4>
                       <div class="container">
                            <div class="column">
                                <div class="box">Genus:</div>
                                <div class="box">Height:</div>
                                <div class="box">Weight:</div>
                                <div class="box">Gen:</div>
                                <div class="box">Habitat:</div>
                                <div class="box">Shape:</div>
                            </div>
                            { 
                              pokemon.species.map( ( {genius,hei,wei,gen,habi,shape } ) => (
                                <div class="column">
                                    <div class="box">{genius}</div>
                                    <div class="box">{hei}</div>
                                    <div class="box">{wei}</div>
                                    <div class="box">{habi}</div>
                                    <div class="box">{shape}</div>
                                </div>
                          ) )} 
                            
                        </div>
                    </div>
                </div>
          </div>
      </div>   
    </div> 
   );
};

export default Detail;