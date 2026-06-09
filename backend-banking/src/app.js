const express = require('express');
const RouterAccount = require('./modules/accounts/routes/RouteAccounts');
const RouteUser = require('./modules/auth/routes/RouteUser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", RouteUser)

module.exports = app;