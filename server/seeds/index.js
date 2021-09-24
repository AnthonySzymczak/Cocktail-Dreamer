const db = require('../config/connection');
const {User, Cocktail} = require('../models');

db.once('open', async () => {
    await Cocktail.deleteMany();
    
    const cocktail = await Cocktail.insertMany([
        
    ])
})