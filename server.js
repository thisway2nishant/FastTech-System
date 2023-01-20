const express = require('express');
const cors = require ('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.sendFile('Exam/index.html');
    res.status(200);
    res.end();
})

app.listen(port, ()=>{
    console.log(`App listening at ${port}`);
})