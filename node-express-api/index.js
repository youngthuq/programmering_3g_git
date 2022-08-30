//html bibilioteket express og objekt i en konstant
const express = require('express')

const app = express()

const port = 5555

const Øvelser = {
    'bryst': 'vi skal lave nogle benchpresses',
    'biseps': 'curls og desending curls',
    'triceps': 'starter med triceps extensions og bench triceps lowers',
    'skuldre': 'shoulder presses',
    'ovre quadrupliks': 'benpress squads',
    'lower quadrupliks': 'legraises squads',
    'cardio': 'varm opmed 10 min løb og slut af med 30 min boksnins'
}
app.get('/*', (req, res) => {
    console.log('Jeg fik besøg')
    if (req.params[0]){
        console.log('Fronter du bror på den her dag ' + req.params[0]) 
        if(Øvelser[req.params[0]]) {
            res.send(Øvelser[req.params[0]])
        }else{
            res.send(req.params[0] + 'is not an endpoint')
        }
    }else{
        res.send('guten heute leute es ist ib skanderborg mit der sendung von der danishe gränse')
    }
})

app.listen(port,() =>{
    console.log('server lytter på port' + port)
})