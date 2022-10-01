import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"

const Category = ({ category, onCategoryDelete }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [status, setNewStatus] = React.useState({
    name: "",
    id: "",
    color: "",
  })

  const handleAddNewStatus = () => {
    const newStatus = {
      name: status.name,
      color: status.color,
      id: Math.random(),
    }
    category.status.push(newStatus)
    console.log(category)
    handleClose()
    setNewStatus({ name: "", color: "" })
  }

  const handleDelete = () => {
    const confirmed = window.confirm("Silmek istediğinize emin misiniz?")
    if (confirmed) {
      onCategoryDelete(category) //hangi kategori olduğunu burda anlıyoruz
    }
  }

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

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={category.name} />
        <div>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            Statü Belirleyiniz
          </Button>

          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
            color="secondary"
            onClick={handleDelete}
          >
            Sil
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
          >
            <Box sx={style}>
              <Typography variant="h6" component="h2">
                Lütfen Statü Ekleyiniz
              </Typography>
              <TextField
                label="Statü ismi"
                variant="standard"
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                }}
                onChange={(e) =>
                  setNewStatus({ ...status, name: e.target.value })
                }
                value={status.name}
              />

              <InputLabel>Colors</InputLabel>
              <Select
                value={status.color}
                label="Color"
                onChange={(e) =>
                  setNewStatus({ ...status, color: e.target.value })
                }
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                  color: status.color,
                }}
              >
                <MenuItem value="#F2D388">Yellow</MenuItem>
                <MenuItem value="#FEB139">Orange</MenuItem>
                <MenuItem value="#D61C4E">Red</MenuItem>
                <MenuItem value="#293462">Dark Blue</MenuItem>
              </Select>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddNewStatus}
              >
                Ekle
              </Button>
            </Box>
          </Modal>
        </div>
      </ListItemButton>
    </ListItem>
  )
}

export default Category
