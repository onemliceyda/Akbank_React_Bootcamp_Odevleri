import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #b05370",
  boxShadow: 24,
  p: 4,
}

const AddCategoryForm = ({ onAddCategories }) => {
  const [category, setCategory] = React.useState({
    name: "",
    id: null,
    status: [],
  })
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const addCategory = () => {
    if (category?.name?.trim()) {
      onAddCategories((prev) => [...prev, { ...category }])
      setCategory({ name: "" })
      handleClose()
    }
  }

  return (
    <div>
      <Button
        sx={{
          width: "100%",
        }}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Kategori Belirleyiniz
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lütfen Kategori Ekleyiniz
          </Typography>
          <TextField
            id="standard-basic"
            label="Kategori ismi"
            variant="standard"
            sx={{
              width: "100%",
              marginBottom: "10px",
            }}
            onChange={(e) =>
              setCategory({
                name: e.target.value,
                id: Math.random(),
                status: [],
              
              })
            }
            value={category.name}
          />
          <Button variant="contained" color="secondary" onClick={addCategory}>
            Ekle
          </Button>

          
        </Box>
      </Modal>
    </div>
  )
}

export default AddCategoryForm
