const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_EN !== 'production') require('dotenv').config();

//* Bring STRIPE library and invoke it with our token
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_EN !== "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on ${PORT}`);
});

//* Routes and Controllers
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  //# Use Stripe to make the charge
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) res.status(500).send({ error: stripeErr });
    else res.status(200).send({ success: stripeRes });
  });
});