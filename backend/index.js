const express = require('express')
const {MongoClient} = require('mongodb') 
const {v4 : uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
const uri = 'mongodb+srv://baladityadhaka:NGHIqoXCQYtgRVFc@cluster49.1nojsnd.mongodb.net/FINDmates'
const app = express();
const port = 8001;

app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("get /")

})


app.post('/signup',async (req,res)=>{
    const client = new MongoClient(uri);

    const {email, password} = req.body;

    const generatedUserId = uuidv4();

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await client.connect()
        const database = client.db('app-data');
        const users = database.collection('users');

        const existingUser = await users.findOne({email});

        if(existingUser){
            return res.status(409).send('already exists please login');
        }

        const sanitizedEmail = email.toLowerCase();
        const data = {
            user_id : generatedUserId,
            email: sanitizedEmail,
            hashed_password : hashedPassword
        }

        const insertedUser = await users.insertOne(data);

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn : 60 * 24
        })

        res.status(201).json({token});


    }catch(err){
        console.log(err);
    }
})

app.post('/login', async (req,res)=>{
    const client = new MongoClient(uri);
    const {email, password} = req.body;

    console.log(email, password);


    try{
        await client.connect()
        const database = client.db('app-data');
        const users = database.collection('users');

        const user = await users.findOne({email});
        

        if(user && (await bcrypt.compare(password, user.hashed_password))){
            console.log("yes")
            const token = jwt.sign(user, email, {
                expiresIn:60*24
            })

            res.status(201).json({token})
        }
        res.status(400).send('invalid Cred')
    }catch(err){
        console.log(err);
    }
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


// 3.19

