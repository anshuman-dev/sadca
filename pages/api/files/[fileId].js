import connectMongo from "../../../database/conn"
import { getFilebyid, putFile } from '../../..database/controller'

export default async function handler(req, res) {

    connectMongo().catch(()=>res.status(405).json({error: "Error in the connection"}))

    const { method } = req
    
    switch (method){
        case "GET":
            getFilebyid(req,res);
            break;
        case'PUT':
            putFile(req,res)
            break;
        default:
            res.setHeader('Allow',['GET','PUT']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }

}