import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import Todo from "./Todo"

export default function TodoList({ tasks, onDeleteTodo,categories }) {
  return (
    <Box sx={{ width: "100%" }}>
      <nav>
        <List>
          {tasks.map((task, index) => (
            <Todo
              key={task.id}
              task={task}
              tasks={tasks}
              onDeleteTodo={onDeleteTodo}
              categories={categories}
            />
          ))}
        </List>
      </nav>
    </Box>
  )
}
