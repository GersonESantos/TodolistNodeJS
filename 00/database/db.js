const  moongoose = require('mongoose');

const connectToDb = async () => 
    {

        moongoose.connect('mongodb+srv://gebhsantos_db_user:<VmuAFwV9VaA8N7Xi>@todolist.1djcmmb.mongodb.net/?appName=todolist', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
    }



module.exports = moongoose; 