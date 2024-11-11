const express = require('express');
const router = express.Router();

const handlePostRequest = require('../../controllers/users/postRequest.js')
const handleGetRequest = require('../../controllers/users/getRequest.js')
const handleUpdateRequest = require('../../controllers/users/updateRequest.js')
const handleDeleteRequest = require('../../controllers/users/deleteRequest.js')

router.get('/',(req,res)=>handleGetRequest(req,res));
router.post('/post',(req,res)=>handlePostRequest(req,res));
router.put(`/update/:id`,(req,res)=>handleUpdateRequest(req,res));
router.delete(`/delete/:id`,(req,res)=>handleDeleteRequest(req,res));

module.exports = router;