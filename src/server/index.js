import express from 'express';
import mongoose from "mongoose";
import React from 'react'
import cors from "cors"
import bodyParser from "body-parser"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import App from '../client/App'
import { ServerStyleSheet } from 'styled-components'
import routes from '../shared/routes'

if (process.env.NODE_ENV == 'development') require('dotenv').config({ path: '.env' })
//require('dotenv').config({ path: '.env' });

const app = express();

app.use(express.static('build'));

const db = require('../server/config/DB').uri
mongoose.connect(db)
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

app.use('/api', require('./routes/index.js'));
app.use('/api', require('./routes/User.js'));
app.use('/api', require('./routes/Property.js'));

app.get("*", (req, res, next) => {
    const sheet = new ServerStyleSheet();
    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
  
    // const promise = activeRoute.fetchInitialData
    //   ? activeRoute.fetchInitialData(req.path)
    //   : Promise.resolve()
  
    // promise.then((data) => {
      const data = { data: 'test data' }
      const context = { data: 'test data' }
  
      const markup = renderToString(sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>)
      )
      const styles = sheet.getStyleTags(); 
  
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
            ${styles}
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>
  
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `)
    // }).catch(next)
  })



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });


app.listen(process.env.PORT || 3000)
