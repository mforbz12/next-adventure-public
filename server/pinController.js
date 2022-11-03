const { Pin } = require('./locationModels');

const pinController = {};

pinController.saveLocation = (req, res, next) => {
  const {
    lat,
    lng,
    type,
    recommendation,
    recommended_by,
    rand
  } = req.body;
  if (recommendation !== undefined) {
    Pin.create({
      lat,
      lng,
      rand,
      type,
      recommendation,
      recommended_by
    })
    .then((data) => {
      res.locals.pin = data;
      console.log('pin created');
      res.status(200).json(res.locals.pin);
    })
    .catch((err) =>{
      return next({
        log: 'pinController.saveLocation :Error: ' + err,
        message: { err: 'Could not add to database'}
      });
    });
  } else {
    return next({
      log: 'pinController.saveLocation :Error: Required data not received',
      message: {err: 'Could not add to the database. Recommendation required.'}
    })
  }
  return next();
};

pinController.getLocations = (req, res, next) => {
  Pin.find({}, (err,data) => {
    if (err) return next({
      log: 'pinController.getLocations: ERROR: ' + err,
      message: {err: 'Error retrieving stored pins from database'}
    });
    res.locals.foundPins = data;
    return next();
  })
};

module.exports = pinController;