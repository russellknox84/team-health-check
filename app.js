import express from 'express';
import hbs from "express-handlebars";

import routes from './app/routes'

const app = express();

app.engine("handlebars", hbs({
    extname: '.handlebars',
    layoutsDir: __dirname + "/views",
    defaultLayout: __dirname + "/views/layouts/main"
}))
app.set("view engine", "handlebars")

routes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("listening on PORT: ", PORT));