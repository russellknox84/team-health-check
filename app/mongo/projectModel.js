import db from "./config"

const ProjectSchema = new db.Schema({
    projectName: String,
    surveys: [{
        type: String,
        ref: "Survey"
    }]
})

const projectModel = db.model('Project', ProjectSchema)

export default projectModel