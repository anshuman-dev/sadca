import { Schema, models, model } from 'mongoose'

const fileSchema = new Schema({
    file_id: String,
    file_name: String,
    file_department: String,
    file_desc: String,
    time: String
})

const Files = models.file || model("file",fileSchema)
export default Files;