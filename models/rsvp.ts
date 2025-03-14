import mongoose from 'mongoose';

const RsvpSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    available: {
        type: String,
        required: true,
    },
    mealPreferences: Array<String>,
    otherMealPreference: String,
    questions: String
});

export default mongoose.models.rsvp || mongoose.model('rsvp', RsvpSchema);