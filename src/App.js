
import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
const App=()=>{

const APP_ID='3691f2d8';
const APP_KEY='7784fbb85c533a4e66d5aa81cb333e82';


const [recipes, setrecipes]=useState([]);
const [search,setSearch]=useState('');
const [query, setquery]=useState('pizza');


useEffect(()=>{
 getRecipes()
},[query]);

const getRecipes = async() => {
  const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data= await response.json();
setrecipes(data.hits);
console.log(data.hits);


}
const updatesearch= e =>{
  setSearch(e.target.value);
 

}
const getSearch= e =>{
  e.preventDefault();
  setquery(search);
  setSearch('');
}

  return (
    <div className="App">
    <form onSubmit ={getSearch} className="search-form">
      <input  className="search-bar" type="text" value={search} onChange={updatesearch}></input>
      <button  className="search-button" typeof="Submit">
      Search
      </button>
    </form>
    <div className="recipes">
    {recipes.map(recipe=>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        
      />
      

    ))}
    </div>
    </div>

  );
}

export default App;
