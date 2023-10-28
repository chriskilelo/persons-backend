/**
 * TO GOD BE ALL THE GLORY
 * 28-OCT-2023
 * The file to handle the routing for all the requests coming to the Persons controller.
 */

const express = require('express')
const router = express.Router()
const { fetchPerson, fetchAllPersons, setPerson, updatePerson, deletePerson } = require('../controllers/v1.0/PersonController')

// Chain the GET and SET methods to one route since both of their endpoints are similar i.e. (/)
router.route('/').get(fetchAllPersons).post(setPerson)

// Chain the UPDATE and DELETE methods to one route since both of their endpoints are similar i.e. (/:id)
router.route('/:id').get(fetchPerson).put(updatePerson).delete(deletePerson)

module.exports = router