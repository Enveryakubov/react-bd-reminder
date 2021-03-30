import data from "./data"
import Card from "./components/Card"
import {useState} from "react"

function App() {
  const [info, setInfo] = useState(data)

  const handleClick = () => (setInfo([]))

  return (
    <div className="container">
      <p>{info.length} birthdays today</p>
      {info.map(elem => <Card key={elem.id} elem={elem}/>)}
      <div>
        <button className="button" onClick={handleClick}>Очистить</button>
      </div>
    </div>
  );
}

export default App;
