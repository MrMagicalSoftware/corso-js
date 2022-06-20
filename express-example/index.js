const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/prova' , (request , response) =>{
    response.send("ciao a tutti da prova")
})


app.get('/api/prova' , (req , resp) => {
    let myobj = {
        id : 1,
        name : "Rob",
        role : "Developer"

    }
    resp.send(myobj )
})

//JSON.stringify({ x: 5, y: 6 })

app.get('/generaNumero', (req , resp) => {

    let numero = Math.floor(Math.random() * 10)

    resp.send(JSON.stringify(numero))
})


app.get('/test', (req , resp) => {

    console.log("Richiesta da ..... " + req.ip);
    console.log("Richiesta da ..... " + req.headers['user-agent']);

    resp.send(req.ip)
})


app.get('/api/somma' , (req , resp) =>{
    const myNumero1 = req.query.numero1;
    const myNumero2 = req.query.numero2;
    console.log("Valore  inserito " + myNumero1 + " " + myNumero2 )
    const somma = Number(myNumero1) + Number(myNumero2)
    resp.json({myRis : somma})
})


app.post('/api/inserisciFilm' , (req , resp) =>{
    const nomeFilm = req.query.nomeFilm;
    console.log(nomeFilm);

   

    resp.send("<h1>ok parametro passato </h1>")
})


//https://api.themoviedb.org/3/genre/movie/list?api_key=205712c8b4bad38dc18a8f9c83c0f88e&language=en-US
app.get('/api/movie' ,  (req , resp) =>{

    
    //https://api.themoviedb.org/3/genre/movie/list?
    
    //api_key=205712c8b4bad38dc18a8f9c83c0f88e   &      language=en-US

    console.log("CALLING MOVIE ")
    const country = req.query.country
    const axios = require('axios').default;
    // Make a request for a user with a given ID
    axios.get("https://api.themoviedb.org/3/genre/movie/list",{
        params:{
            api_key: 'c0af7194607876d6036970e4504abc6d',
            language: 'it-IT'
        }
    }
    )
    .then(function (response) {
        // handle success
        console.log(response);

        resp.send(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
})


app.get('/api/meteo' , (req , resp) =>{
   
    //http://api.weatherapi.com/v1/current.json?key=f2e389d442374d30a9695716220905&q=Milan&aqi=no

    const country = req.query.country
    const axios = require('axios').default;
    // Make a request for a user with a given ID
    axios.get(`http://api.weatherapi.com/v1/current.json?key=f2e389d442374d30a9695716220905&q=${country}&aqi=no`)
    .then(function (response) {
        // handle success
        console.log(response);

        resp.send(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
