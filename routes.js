const express = require('express');
const router = express.Router();

const { saveUser, getUsers, editUser, getOneUser, getAllUsers, deleteOneUser } = require('./controller');

router.post('/create-user', saveUser);
router.get('/get-users', getUsers);
router.patch('/edit-user/:id', editUser);
router.get('/users/:id', getOneUser);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteOneUser)

exports.router = router;