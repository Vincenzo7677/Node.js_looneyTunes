const express = require('express')
const people = require('./people.json')
// const home = require('./routes/index')
const app = express()
// const pug = require('pug')


// app.use('/', home)
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))


app.get('/', (req,res) => {
    res.render("index", {
        title: "Looney Tunes",
        people: people.profiles
    })
})

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
  });



const port = process.env.PORT || 3000
app.listen(port), () => console.log("Server is on port 3000...")