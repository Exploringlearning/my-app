import './App.css';

function App() {
  const name = "TestApp";
  const age = 20
  const likes = ["Apple", "Orange", "Pineapple"];

  return (
    <div id="app-id">
  <h1 id ="header-id">Hello {name} !!</h1>
  <h2>{age}</h2>
  <h2>{likes}</h2>
  <h2>{String(true)}</h2>
  {
    true ? <h3>New TestApp</h3> : null
  }
  {
   likes.map(like => <h2 key = {like}> {like}</h2>)
  }

    </div>
  );
}

export default App;
