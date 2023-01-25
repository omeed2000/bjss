import "./App.css";



function getJSON() {
  console.log("test")
  fetch("https://itunes.apple.com/us/rss/topsongs/limit=100/json")
  .then((response) => response.json())
  .then((data) => console.log(data));

}

function MyButton(props) {
  return <button>i-tunes search</button>;
}

function App() {
  return (
    <div className="App">
      <input type="text"></input>
      <MyButton onClick={ getJSON()} />
    </div>
  );
}

export default App;
