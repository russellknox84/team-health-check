import express from 'express';
import exphbs from "express-handlebars";

import routes from './app/routes'

const app = express();

var hbs = exphbs.create({
    extname: '.handlebars',
    layoutsDir: "./views",
    defaultLayout: "./layouts/main",
    helpers: {
        renderPartial: (partial) => partial
    }
});

app.use(express.static("./dist/public"))
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

routes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("listening on PORT: ", PORT));