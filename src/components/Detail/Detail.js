import Card from "../Card/Card";
import { useParams } from "react-router-dom";
import "./Detail.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setData] = useState({
    id: 0,
    types: [],
    name: "",
    img: "",
    bio: "",
    stats: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + id // 5s
        );

        setData(mapData(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function mapData(response) {
    return {
      id: response.id,
      types: response.types,
      name: response.name,
      img: response.sprites.other.dream_world.front_default,
      bio: "Bulbasaur, Grass and Poison type pokemon. A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
      stats: response.stats.map((item) => ({
        key: item.stat.name,
        value: item.base_stat,
      })),
    };
  }

  return (
    <div className="App">
      <div className="items ">
        <div className="row">
          <div className=" div-left col-lg-4 col-md-12">
            <Card pokemon={pokemon}></Card>
          </div>
          <div className="div-right col-lg-8 col-md-12">
            <div className="">
              <div>
                <h4 className="bio">Bio</h4>
              </div>
              <div>
                <p>{pokemon.bio}</p>
              </div>
            </div>
            <div>
              <h4>Stats</h4>
            </div>
            <div className="table">
              <table>
                <tr>
                  {pokemon.stats.map((item) => (
                    <th key={item.key}>{item.key}</th>
                  ))}
                </tr>

                <tr>
                  {pokemon.stats.map((item) => (
                    <td key={item.key}>{item.value}</td>
                  ))}
                </tr>
              </table>
            </div>
          </div>
        </div>
        {/* <div class="items p-2">
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
                {pokemon.trainings.map(
                  ({ exp, happy, cr, gr, abiI, abiII }) => (
                    <div class="column">
                      <div class="box">{exp}</div>
                      <div class="box">{happy}</div>
                      <div class="box">{cr}</div>
                      <div class="box">{gr}</div>
                      <div class="box">{abiI}</div>
                      <div class="box">{abiII}</div>
                    </div>
                  )
                )}
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
                {pokemon.species.map(
                  ({ genius, hei, wei, gen, habi, shape }) => (
                    <div class="column">
                      <div class="box">{genius}</div>
                      <div class="box">{hei}</div>
                      <div class="box">{wei}</div>
                      <div class="box">{habi}</div>
                      <div class="box">{shape}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
