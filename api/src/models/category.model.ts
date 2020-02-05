import { Schema, model } from 'mongoose';

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

export default model('category', schema);
