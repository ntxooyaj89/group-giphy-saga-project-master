const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('GET /api/favorite');
  pool.query('SELECT * from "favorites";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /api/favorites', error)
      res.sendStatus(500);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  const newFav = req.body;
    const queryText = `INSERT INTO "favorites" ("url")
                       VALUES ($1);`;
    pool.query(queryText, [newFav.url])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in POST /api/favorite ${error}`);
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
