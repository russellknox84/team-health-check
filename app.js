import express from 'express';
import exphbs from "express-handlebars";
import bodyParser from 'body-parser'

import routes from './app/routes'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var hbs = exphbs.create({
    extname: '.handlebars',
    layoutsDir: "./views",
    defaultLayout: "./layouts/main",
    helpers: {
        renderPartial: (partial) => partial,
        times: (x) => {
            return [1,2,3,4]
        }
    }
});

app.use(express.static("./dist/public"))
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

routes(app);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log("listening on PORT: ", PORT));