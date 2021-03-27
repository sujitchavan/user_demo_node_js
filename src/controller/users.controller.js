const express = require('express')
const router = express.Router()
const userService = require('../service/user.service');

// Retrieve all employees
router.get('/getuser', userService.findAll);

// Create a new employee
router.post('/', userService.create);

// Retrieve a single employee with id
router.get('/:id', userService.findById);

// Update a employee with id
router.put('/:id', userService.update);

// Delete a employee with id
router.delete('/:id', userService.delete);

module.exports = router