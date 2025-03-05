import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar Programação para se tornar um programador",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar Matemática",
      description: "Estudar Matemática para se tornar um especialista",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar Inglês",
      description: "Estudar Inglês para se tornar fluente",
      isCompleted: false
    }
  ])

  function onTaskClick (taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })
    setTasks(newTasks)
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/> 
      </div>
    </div>
  )
}

export default App
