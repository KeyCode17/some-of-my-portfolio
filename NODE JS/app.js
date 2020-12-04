// Imports
const express = require('express')
const app = express()
const port = 3000


// Static FIles
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/img'))

// Set nodejstutor
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index', { text: 'This is index' })
})

app.get('/jobfinderSkills', (req, res) => {
  res.render('jobfinderSkills', { text: 'jobfinderSkills' })
})

app.get('/cleverJobs', (req, res) => {
  res.render('cleverJobs', { text: 'cleverJobs' })
})

// Listen on port 3000
app.listen(port, () => console.info('Listening on port 3000'))
