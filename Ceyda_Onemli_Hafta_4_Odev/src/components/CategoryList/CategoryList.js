import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import Category from "./Category"

export default function CategoryList({ categories, onCategoryDelete }) {
  return (
    <Box sx={{ width: "100%" }}>
      <nav>
        <List>
          {categories.map((category, index) => (
            <Category
              key={index}
              category={category}
              onCategoryDelete={onCategoryDelete}
            />
          ))}
        </List>
      </nav>
    </Box>
  )
}
