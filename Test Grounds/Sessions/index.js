const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'ryan',
  resave: false,
  saveUninitialized: true
}));

app.get('/viewcount', (req, res) => {
  if (!req.session.views) {
    req.session.views = 0;
  }
  req.session.views++;
  res.send(`You've viewed this page ${req.session.views} times`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});