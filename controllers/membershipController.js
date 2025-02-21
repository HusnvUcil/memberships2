// controllers/membershipController.js
const Membership = require('../models/memberships');

// GET all memberships
exports.getAllMemberships = async (req, res) => {
    try {
        const memberships = await Membership.findAll();
        res.json(memberships);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET single membership by ID
exports.getMembershipById = async (req, res) => {
    try {
        const membership = await Membership.findByPk(req.params.id);
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.json(membership);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST create new membership
exports.createMembership = async (req, res) => {
    try {
        const newMembership = await Membership.create(req.body);
        res.status(201).json(newMembership);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT update membership
exports.updateMembership = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Membership.update(req.body, { where: { id } });

        if (!updated) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.json({ message: 'Membership updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE membership
exports.deleteMembership = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Membership.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.json({ message: 'Membership deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST validasi membership dan return data
exports.createMembership = async (req, res) => {
    try {
        const newMembership = await Membership.create(req.body);
        res.status(201).json(newMembership);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//#region validation
// const { Op } = require('sequelize');
// const Membership = require('../models/memberships');

// POST untuk mendapatkan membership berdasarkan unique_key
exports.validateMember = async (req, res) => {
    try {
        const { unique_key } = req.body; // Ambil unique_key dari body request

        if (!unique_key) {
            return res.status(400).json({ message: 'unique_key is required' });
        }

        const membership = await Membership.findOne({
            where: { unique_key }
        });

        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }

        // Cek apakah expired_status bernilai "ACTIVE"
        if (membership.expired_status !== 'ACTIVE') {
            return res.status(403).json({ message: 'Membership is expired' });
        }

        res.json(membership);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//#endregion