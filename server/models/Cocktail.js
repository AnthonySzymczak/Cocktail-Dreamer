const mongoose = require('mongoose');
const Schema = 'mongoose';

const cocktailSchema = new Schema ({
    cocktails: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cocktail'
        }
    ]
});

const Cocktail = mongoose.model('Cocktail', cocktailSchema);
module.exports = Cocktail;