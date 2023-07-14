import './Home.css'
import Navigation from '../Navigation/Navigation';
import Card from './../Card/Card'


function Home() {
  return (
    <div className="App">
        <Navigation/>
        <div className='items'>
            <Card pokemon={{id:'001',type1:'GRASS',type2:'POISON', name:'Bulbasaur' ,img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}}></Card>
            <Card pokemon={{id:'002', type1:'GRASS',type2:'POISON', name:'Ivysaur' ,img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'}}></Card>
            <Card pokemon={{id:'003', type1:'GRASS',type2:'POISON', name:'Venusaur' ,img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'}}></Card>
        </div> 
    </div>
  );
}

export default Home;
