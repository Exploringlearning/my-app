
const Fruit = ( {fruit} ) => {
  return (
    <li className="fruit" key={fruit.name}>
      <h1>{fruit.name}</h1>
      <h3>{fruit.desc}</h3>
      <img src={fruit.image} alt={fruit.name} width="200px" height="200px" />

      <ul className='qualities'>
        {
          fruit.qualities.map((quality) =>
            <li key={quality}>
              {quality}
            </li>
          )
        }
      </ul>
    </li>
  )
}

export default Fruit;