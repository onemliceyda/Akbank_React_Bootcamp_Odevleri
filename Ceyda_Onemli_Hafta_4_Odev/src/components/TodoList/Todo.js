import * as React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

const Todo = ({ task, tasks, onDeleteTodo, categories }) => {
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

  const [open, setOpen] = React.useState(false)
  const [newName, setNewName] = React.useState("")
  const [selectedStatus, setSelectedStatus] = React.useState({})
  const [activeModal, setActiveModal] = React.useState("")

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleChange = () => {
    const idx = tasks.findIndex((t) => t.id === task.id)
    if (newName.trim()) tasks[idx].name = newName
    else return
    handleClose()
    setNewName("")
    setActiveModal("")
  }

  const handleChangeStatus = () => {
    const idx = tasks.findIndex((t) => t.id === task.id)
    tasks[idx].status = selectedStatus
    handleClose()
    setActiveModal("")
  }

  const edit = () => {
    setActiveModal("edit")
    handleOpen()
  }
  const change = () => {
    setActiveModal("change")
    handleOpen()
    console.log(task)
  }
  const deleteTodo = () => {
    setActiveModal("delete")

    handleOpen()
  }
  const handleDelete = () => {
    onDeleteTodo(task)
    //const idx = tasks.findIndex((t) => t.id === task.id)
    console.log(tasks)

    setActiveModal("")
    console.log(tasks)
  }

  const chooseModal = () => {
    switch (activeModal) {
      case "edit":
        return (
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                TODO ekleyiniz
              </Typography>
              <TextField
                id="standard-basic"
                label="Yeni todos belirle"
                variant="standard"
                sx={{ width: "100%", marginBottom: "10px" }}
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleChange}
              >
                Düzenle
              </Button>
            </Box>
          </Modal>
        )
      case "change":
        return (
          <Modal open={open} onClose={handleClose}>
            {activeModal === "change" && (
              <Box sx={style}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  {categories.map((c) => {
                    if (c.name === task.selectedCategory) {
                      return c.status.map((statu) => (
                        <MenuItem value={statu.name}>{statu.name}</MenuItem>
                      ))
                    } else {
                      return ""
                    }
                  })}
                </Select>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleChangeStatus}
                >
                  Status Değiştir
                </Button>
              </Box>
            )}
          </Modal>
        )
      case "delete":
        return (
          <Modal open={open} onClose={handleClose}>
            {activeModal === "delete" && (
              <Box sx={style}>
                <InputLabel>Silmek İstediğinize Emin Misiniz ? </InputLabel>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDelete}
                >
                  Evet
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Hayır
                </Button>
              </Box>
            )}
          </Modal>
        )
      default:
        break
    }
  }

  return (
    <div>
      <ListItem disablePadding>
        <ListItemText primary={task.name} />
        <ButtonGroup variant="contained">
          <Button onClick={edit}>Edit</Button>
          <Button onClick={change} color="secondary">
            Change Status
          </Button>
          <Button onClick={deleteTodo}>Delete</Button>
        </ButtonGroup>
      </ListItem>
      <div>{chooseModal()}</div>
    </div>
  )
}

export default Todo
