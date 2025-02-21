// routes/membershipRoutes.js
const express = require('express');
const router = express.Router();
const { 
  getAllMemberships, 
  getMembershipById, 
  createMembership, 
  updateMembership, 
  deleteMembership,

  validateMember
} = require('../controllers/membershipController');

// GET all memberships
router.get('/', getAllMemberships);

// GET single membership by ID
router.get('/:id', getMembershipById);

// POST create new membership
router.post('/', createMembership);

// PUT update membership
router.put('/:id', updateMembership);

// DELETE membership
router.delete('/:id', deleteMembership);

//#region validate members
router.post('/validate', validateMember);

//#endregion
module.exports = router;
