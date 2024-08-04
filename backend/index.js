const express = require('express')
const {MongoClient} = require('mongodb') 
const uri = 'mongodb+srv://baladityadhaka:NGHIqoXCQYtgRVFc@cluster49.1nojsnd.mongodb.net/FINDmates'
const app = express();
const port = 8000;

app.get('/', (req,res)=>{

})


app.post('/signup', (req,res)=>{
    
})


app.get('/users', async(req,res)=>{
    const client = new MongoClient(uri);
    
    try{
        await client.connect();
        const database = client.db('app-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    }finally{
        await client.close()
    }
})




app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})

