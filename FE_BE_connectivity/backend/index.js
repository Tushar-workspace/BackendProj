import express from 'express';  //moduleJS

const app = express();  

app.get('/',(req,res) => {
    res.send('server is ready')
})
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            "id":1,
            "title":"A joke",
            "content": "This is a joke"
        },
        {
            "id":2,
            "title":"Another joke",
            "content":"This is another joke"
        },
        {
            "id":3,
            "title":"A thirdjoke",
            "content": "This is a third joke"
        },
        {
            "id":4,
            "title":"A fourth joke",
            "content": "This is a fourth joke"
        },
        {
            "id":5,
            "title":"A fifthjoke",
            "content":"This is a fifth joke"
        }
    ]
    res.send(jokes)
})

const port = 3000 || process.env.PORT


app.listen(port , () => {
    console.log(`server is listening at ${port}`)
})