const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://salt711:zxc9695@boiler-plate.rbv7m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false
}).then(() => console.log('몽구스 연결중...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})