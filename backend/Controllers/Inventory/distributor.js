const { Distributor } = require('../../Models/DistributorModel'); // Adjust the path as needed
const { InventoryList } = require('../../Models/InventoryList');

// Create a new distributor
const createDistributor = async (req, res) => {
    try {
        const newDistributor = await Distributor.create(req.body);
        res.status(201).send({ msg: 'distrubutor added', data: newDistributor?._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all distributors
const getAllDistributors = async (req, res) => {
    try {
        const distributors = await Distributor.find();
        res.status(200).json(distributors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific distributor by ID
const getDistributorById = async (req, res) => {
    try {
        const distributor = await Distributor.findById(req.params.id);
        if (distributor) {
            res.status(200).json(distributor);
        } else {
            res.status(404).json({ message: 'Distributor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a distributor by ID
const updateDistributorById = async (req, res) => {
    try {
        const updatedDistributor = await Distributor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (updatedDistributor) {
            res.status(200).json(updatedDistributor);
        } else {
            res.status(404).json({ message: 'Distributor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a distributor by ID
const deleteDistributorById = async (req, res) => {
    try {
        const deletedDistributor = await Distributor.findByIdAndDelete(
            req.params.id
        );
        if (deletedDistributor) {
            res.status(200).json(deletedDistributor);
        } else {
            res.status(404).json({ message: 'Distributor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



/// add companies 

const generateItemId = async () => {
    try {
        const count = await Distributor.countDocuments({});
        const ItemId = `${count}`;
        return ItemId;
    } catch (err) {
        console.error(err);
        return null;
    }
};


const addCompanyToDistributor = async (req, res) => {
    const { distributorId } = req.params;

    try {
        const distributor = await Distributor.findById(distributorId);
        const company_index = distributor.companies?.length
        if (distributor) {
            distributor.companies.push({ ...req.body, company_index: company_index });
            await distributor.save();
            res.status(200).json({ ...req.body, company_index: company_index });
        } else {
            res.status(404).json({ error: 'Distributor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCompanyInDistributor = async (req, res) => {
    const { distributorId, companyIndex } = req.params;
    const { updatedCompanyData } = req.body;

    try {
        const distributor = await Distributor.findById(distributorId);
        if (distributor) {
            const companyToUpdate = distributor.companies[companyIndex];
            if (companyToUpdate) {
                Object.assign(companyToUpdate, updatedCompanyData);
                await distributor.save();
                res.status(200).json(distributor);
            } else {
                res.status(404).json({ error: 'Company not found' });
            }
        } else {
            res.status(404).json({ error: 'Distributor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeCompanyFromDistributor = async (req, res) => {
    const { distributorId, companyIndex } = req.params;

    try {
        const distributor = await Distributor.findById(distributorId);
        if (distributor) {
            const removedCompany = distributor.companies.splice(companyIndex, 1);
            await distributor.save();
            res.status(200).json({ removedCompany, distributor });
        } else {
            res.status(404).json({ error: 'Distributor not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createDistributor,
    getAllDistributors,
    getDistributorById,
    updateDistributorById,
    deleteDistributorById,
    addCompanyToDistributor,
    updateCompanyInDistributor,
    removeCompanyFromDistributor,
};
