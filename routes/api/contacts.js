const express = require('express')
const controllerContacts = require('../../controllers/contacts-controllers')
const router = express.Router()

router.get('/', controllerContacts.getAll)

router.get('/:id', controllerContacts.getById)

router.post('/', controllerContacts.create)

router.delete('/:id', controllerContacts.remove)

router.put('/:id', controllerContacts.update)

module.exports = router
