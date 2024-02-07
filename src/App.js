import './App.css';

function App() {
  const name = "TestApp";
  const age = 20
  const likes = ["Apple", "Orange", "Pineapple"];
  const fruits = [ {
    name: "Apple", 
    desc: "Red & green", 
    qualities: ["sweet","delicious"],
    image: "https://yodeli.in/cdn/shop/products/organic-red-apple-fuji-royal-gala.png?v=1592523501"
    },
    
    {
        name: "Mango", 
        desc: "Yellow", 
        qualities: ["very sweet","tangy","mouth watering"],
        image: "https://media.istockphoto.com/id/911274308/photo/mango-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=HGg_0OGyxMU6yL0gtKAKkffYa-cLG8WlwcG5nTzzCQU="
    },
        {
    name: "Pineapple", 
    desc: "Yellow & green", 
    qualities: ["sweet","sour","Juicy"],
    image: "https://getfreshswansea.co.uk/wp-content/uploads/2020/07/pineapple.jpg"
    },]

  return (
    <div className='App'>
  <h1 id ="header-id">Fruits !!</h1>

    
    <ul className='container'>
  
     { 
     fruits.map((fruit,index) => 
     <li key = {index}> 
     <h1>{fruit.name}</h1>
     <h3>{fruit.desc}</h3>
     <img src = {fruit.image} alt = {fruit.name} width = "200px" height = "200px"/>

     <ul className='qualities'>
      {
        fruit.qualities.map((quality) => 
        <li key = {quality}>
         {quality}
        </li>
        )
      }
     </ul>   
     </li>)
}

    </ul>
   
  


  {/* <h2>{age}</h2>
  <h2>{likes}</h2>
  <h2>{String(true)}</h2>
  {
    true ? <h3>New TestApp</h3> : null
  }
  {
   likes.map(like => <h2 key = {like}> {like}</h2>)
  } */}
    </div>
  );
}

export default App;
