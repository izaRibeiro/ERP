import bcrypt from 'bcryptjs/dist/bcrypt.js';
import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        selected: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

EmployeeSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next();
})

export default mongoose.model("Employees", EmployeeSchema);