const express = require('express')
const profiles = require('./profiles.json')
// const home = require('./routes/index')
const app = express()
// const pug = require('pug')


// app.use('/', home)
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))


app.get('/', (req,res) => {
    res.render("index", {
        title: "Looney Tunes",
        profiles: profiles.profiles
    })
})

app.get('/profile', (req, res) => {
    const figure = profiles.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${figure.firstname} ${figure.lastname}`,
      figure,
    });
  });




app.listen(3000)