import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import { FullscreenExit } from '@material-ui/icons';

function AddCar(props) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    year: '',
    price: ''
  })
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addCar(car);
    handleClose();
  };

  const inputChanged = (event) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  return(
    <div>
      <Button variant="outlined" color="primary" style={{margin: 20}} onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Brand"
            name="brand"
            value={car.brand}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Model"
            name="model"
            value={car.model}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Color"
            name="color"
            value={car.color}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Fuel"
            name="fuel"
            value={car.fuel}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Year"
            name="year"
            value={car.year}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            value={car.price}
            onChange={inputChanged}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddCar;