const express = require('express');
const app = express();
const port = 3001;

let arr = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/send/:text', (req, res) => {
    arr.push(new Date().toLocaleTimeString() + ' ' + req.params.text);
    console.log(arr);
    res.send();
});

app.get('/get', (req, res) => {
    let chat = "";
    for(let i = arr.length-1; i > 0; i--){
        chat+=`<p style="border: solid; border-radius: 5px; background-color: grey">${arr[i]}</p>`;
    }
    res.send({chat: chat});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})