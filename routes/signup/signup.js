const express = require('express');
const router = express.Router();
const handleGetAllUsers = require('../../controllers/signup/displayAllUsers');
const handleCreateUser = require('../../controllers/signup/createUser');
const handleLoginUser = require('../../controllers/signup/loginUser');

router.get('/',(req,res)=>handleGetAllUsers(req,res));
router.get('/login',(req,res)=>handleLoginUser(req,res));
router.post('/create',(req,res)=>handleCreateUser(req,res));

module.exports = router;