import express from "express";
import mongoose from "mongoose";
import React from "react";
import cors from "cors";
import bodyParser from "body-parser";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import App from "../client/App";
import { ServerStyleSheet } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../client/redux/reducers";
mongoose.Promise = require("bluebird");
require("dotenv").config({ path: ".env" });

const app = express();
app.use(express.static("build"));
mongoose.connect(process.env.DB, {useNewUrlParser: true});
mongoose.connection
  .once("open", function() {
    console.log("Connected to DB!");
  })
  .on("error", function(error) {
    console.log("Error is: ", error);
  });

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use(require("./routes/user/index"));
app.use(require("./routes/property/index"));
app.use(require("./routes/viewings/index"));
app.use(require("./routes/bookings/index"));

app.get("*", require("./routes/auth/index.js"), (req, res, next) => {
  const sheet = new ServerStyleSheet();
  const auth = req.jwtTest;
  const preloadedState = { user: auth.user };
  const store = createStore(rootReducer, preloadedState);
  const context = {};
  const markup = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );
  const styles = sheet.getStyleTags();

  res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Property App</title>
            ${styles}
            <script src="/bundle.js" defer></script>
            <script>window.__PRELOADED_STATE__ = ${serialize(
              preloadedState
            )}</script>
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>
      `);
});

app.listen(process.env.PORT || 3000);
