import "./App.css"
import { useState } from "react"
import AddCategoryForm from "./components/AddCategoryForm/AddCategoryForm"
import CategoryList from "./components/CategoryList/CategoryList"
import AddTodoForm from "./components/AddTodoForm/AddTodoForm"
import TodoList from "./components/TodoList/TodoList"

function App() {
  const [categories, setCategories] = useState([])
  const [tasks, setTask] = useState([])
  const handleDeleteTodo = (task) => {
    setTask(tasks.filter((t) => t.id !== task.id))
  }
  const handleCategoryDelete = (category) => {
    setCategories(categories.filter((c) => c.id !== category.id)) //anladığımız kategoriiyi buraya parametre olarak veriyoruz daha sonra filterlayarak çıkartıyoruz.
  }

  return (
    <div className="App">
      <div className="category-container">
        <div className="category-add">
          <AddCategoryForm onAddCategories={setCategories} />
        </div>
        <div className="category-list">
          <CategoryList
            categories={categories}
            onCategoryDelete={handleCategoryDelete}
          />
        </div>
      </div>
      {categories.length > 0 && (
        <div className="category-container">
          <div className="category-add">
            <AddTodoForm
              categories={categories}
              tasks={tasks}
              setTask={setTask}
            />
          </div>
          <div className="category-list">
            <TodoList
              tasks={tasks}
              onDeleteTodo={handleDeleteTodo}
              categories={categories}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
