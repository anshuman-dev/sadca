// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "../../../database/conn"
import { getFiles, postFile, putFile } from '../../../database/controller'
export default async function handler(req, res) {
  connectMongo().catch(()=>res.status(405).json({error: "Error in the connection"}))

    //type of request
    const { method } = req

    switch(method){
        case'GET':
            getFiles(req,res)
            break;
        case'POST':
            postFile(req,res)
            break;
        case'PUT':
            putFile(req,res)
            break;
        case'DELETE':
            res.status(200).json({method, name: 'DELETE Request'});
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }

  res.status(200).json({ name: 'John Doe' })
}
