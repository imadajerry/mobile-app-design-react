import "./App.css"
import CompletedTasks from "./components/CompletedTasks"
import DateTime from "./components/DateTime"
import PendingTasks from "./components/PendingTasks"
import Title from "./components/Title"
import TodoInput from "./components/TodoInput"

function App() {
  return (
    <>
      <DateTime />
      <div id="contentContainer">
        <Title />
        <TodoInput />
        <div id="taskList">
          <PendingTasks />
          <CompletedTasks />
        </div>
      </div>
    </>
  )
}

export default App
