import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Employees", EmployeeSchema);