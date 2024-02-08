import './fruits.css';
import { fruits } from './data/fruits';
import Fruit from './Fruit.js';

const fetchFruitData = () => {
   return fruits
}

const FruitComponent = () => {
   const fruitData = fetchFruitData();

   return (
      <div className="fruit-container">
         <h1>Fruits !!</h1>
         <ul className='fruit-list'>

            {
               fruitData.map((fruit) => (
                  <Fruit key={fruit.name} fruit={fruit} />
               ))
            }

         </ul>

      </div>
   )
}

export default FruitComponent;