const express = require('express');
const pinController = require('./pinController');
const router = express.Router();

//should load the map once connected
router.get('/', (req, res) =>
  res.status(200).json({log: 'server is working here too'})
);

//adds new recommendation via post request
router.post('/add', pinController.saveLocation, (req, res) =>
  res.status(200)
);

router.get('/pins', pinController.getLocations, (req,res) =>
  res.status(200).json({...res.locals.foundPins})
)

//deletes a recommendation via delete request
router.delete('/delete/:id', pinController.deleteLocation, (req, res) =>{
  // DELETE : http://localhost:8080/api/delete -> Firing console below
  console.log('succesful delete')
  return res.status(200).json('deleted')
}
);



module.exports = router;