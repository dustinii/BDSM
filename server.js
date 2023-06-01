const path = require('path');
const fs = require('fs');
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' });

const sess = {
  secret: 'Super secret secret', // CHANGE THIS
  cookie: {
    maxAge: 1 * 60 * 60 * 1000, // UPDATE THIS AS DESIRED, currently set to expire in 1 hour
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('tiny', { stream: accessLogStream }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App running at http://localhost:${PORT}`));
});
