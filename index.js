const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('i can codeeee in node')
});

const users = [
    {id:1, name: 'jon', email: 'jon@example.com'},
    {id:2, name: 'sina', email: 'sina@example.com'},
    {id:3, name: 'halim', email: 'halim@example.com'},
    {id:4, name: 'kalim', email: 'kalim@example.com'},
    {id:5, name: 'payesh', email: 'payesh@example.com'}
]
app.get('/users',(req,res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
});
app.get('/user/:id',(req,res) =>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u=>u.id == id);
    res.send(user);
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    const user = req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user);
})

app.listen(port, ()=> {
    console.log('listening on port',port);
})
