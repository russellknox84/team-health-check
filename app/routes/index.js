export default (app) => {
    app.get("/", (req, res) => res.render("health-check"))
}