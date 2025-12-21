const  moongoose = require('mongoose');

const connectToDb =  () => 
    {

        
        moongoose.connect('mongodb+srv://gebhsantos_db_user:VmuAFwV9VaA8N7Xi@todolist.1djcmmb.mongodb.net/?appName=todolist')
        .then(() => {
            console.log('Connectou com sucesso to MongoDB');
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
    }



module.exports = connectToDb; 