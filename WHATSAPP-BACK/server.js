// import 
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessage.js'
import Pusher from 'pusher'
import cors from 'cors'

//  app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1110640",
    key: "57b2bf2874ef6babc7dd",
    secret: "6a396b6361df35fa6e17",
    cluster: "eu",
    useTLS: true
  });

// middleware
app.use(express.json());
app.use(cors())


// db config
const connexion_url='mongodb+srv://admin:jh7i16ihaEO7Jlpc@cluster0.ykovi.mongodb.net/whatsAppDB?retryWrites=true&w=majority'
mongoose.connect(connexion_url,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open',()=>{
    console.log('db connect')

    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch()

    changeStream.on("change",change=>{
        console.log('modification =>',change)

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages','inserted',{
                
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,

            });

    }else{
        console.log('error pusher')
    }
}) 
})



// api route
app.get("/",(req, res) => res.status(200).send("get info via port 9000"))

app.get('/messages/sync', (req,res)=>{
    
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req,res)=>{
        const dbMessage = req.body;

        Messages.create(dbMessage,(err,data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).send(data)
            }
        })
})

// listen 
 app.listen(port,() =>console.log(`listening on localhost ${port}`))