const express = require('express');
const pinController = require('./pinController');
const router = express.Router();

//should load the map once connected
router.get('/', (req, res) =>
  res.status(200).json({log: 'server is working here too'})
);

//adds new recommendation via post request
router.post('/add', (req, res) =>
  res.status(200).json({})
);

//deletes a recommendation via delete request
router.delete('/delete', (req, res) =>
  res.status(200).json({})
);



module.exports = router;