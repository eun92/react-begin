import { useState } from "react"

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])

  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    // console.log(toDo)
    if (toDo === "") return
    setToDos((currentArr) => [toDo, ...currentArr])
    setToDo("")
  }

  return (
    <div>
      <h1>To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write your to do."
        />
        <button>Add To do</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
