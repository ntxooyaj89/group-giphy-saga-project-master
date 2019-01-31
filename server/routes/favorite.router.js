const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('this is in post', req.body);
  const queryText = `INSERT INTO "favorites" ("url", "category")
                      VALUES ($1, $2,)`;
  pool.query(queryText, [req.body.url, req.body.category]) 
  .then( ()=> {
    res.sendStatus(201);
  }).catch((error) =>{
   console.log('Error in POST server', error);
   res.sendStatus(500);
  });                   
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
