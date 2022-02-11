import mongoose from 'mongoose'

const SaleSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Sales", SaleSchema);