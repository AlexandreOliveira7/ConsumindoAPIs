
// Deve se utilizar o app Insomnia

//server

const express = require('express')

const axios = require('axios')

const app = express()

app.listen('3000')

/*   - get - pegar
app.route('/').get( (req,res) => res.send("hello"))
app.route('/sobre').get( (req,res) => res.send("hello sobre"))
*/


/* - post - postar
//middleware

app.use(express.json())
app.route('/').post( (req,res) => res.send(req.body))
*/

/* - put - editar
//middleware
app.use(express.json())
let author = 'Alexandre Oliveira'
app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
})
*/

/* - delete -

app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})
*/

app.route('/').get( (req,res) => {
    axios.get('https://api.github.com/users/AlexandreOliveira7')
    .then(result => res.send(result.data))
    .catch(error => console.error(error))
})