import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const AddTodoForm = ({ setTask, categories }) => {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")

  // bekliyor-başlandı-devam ediyor-bitti
  // pending-started-in progress-done

  const [selectedCategory, setSelectedCategory] = React.useState("")
  const [status, setStatus] = React.useState("pending")

  //const [selectedStatus, setSelectedStatus] = React.useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const addTask = () => {
    const todo = { name, status, selectedCategory, id: Math.random() }
    if (name?.trim()) setTask((prev) => [...prev, todo])
    else return

    setName("")
    handleClose()
  }

  return (
    <div>
      <Button
        sx={{
          width: "100%",
        }}
        variant="contained"
        color="secondary"
        onClick={handleOpen}
      >
        TODO Ekleyiniz
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TODO ekleyiniz
          </Typography>
          <TextField
            id="standard-basic"
            label="TODO"
            variant="standard"
            sx={{ width: "100%", marginBottom: "10px" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <InputLabel>Categories</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value)
            }}
            sx={{
              width: "100%",
              marginBottom: "10px",
            }}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
          {selectedCategory ? (
            <>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                {categories.map((c) => {
                  if (c.name === selectedCategory) {
                    return c.status.map((statu) => (
                      <MenuItem value={statu.name}>{statu.name}</MenuItem>
                    ))
                  } else {
                    return ""
                  }
                })}
              </Select>
            </>
          ) : (
            ""
          )}

          <Button variant="contained" color="secondary" onClick={addTask}>
            Ekle
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
export default AddTodoForm
