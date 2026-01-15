const  moongoose = require('mongoose');

const connectToDb =  () => 
    {

        
        moongoose
        .connect(process.env.DB_URI)
   
        .then(() => {
            console.log('Connectou com sucesso to MongoDB');
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
    }



module.exports = connectToDb; 