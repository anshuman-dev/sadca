import Files from '../model/file'



// get: http://0.0.0.0/api/file
export async function getFiles(req,res){
    try{
        const files = await Files.find({})

        if(!files) return res.status(404).json({ error: "Files not found "})
        res.status(200).json(files)
    } catch(error){
        res.status(404).json( { error: "Error Fetching the Files "} )
    }
}

export async function getFilebyid(req,res){
    try{
        const { fileId } = req.query;
        if(fileId){
            const file = await Files.findById(fileId);
            res.status(200).json(user)
        }
        res.status(404).json({error: "File not selected "})
    }catch(error){
        res.status(404).json( {error: "Cant get data"} )
    }
}

export async function postFile(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({ error: "Fields Not Provided"});
        Files.create( formData, function(err, data){
            return res.status(200).json(data)
        })
    }catch(error){
        return res.status(400).json({error})
    }
}

export async function putFile(req,res){
    try{
        const { fileId }=req.query;
        const formData = req.body;

        if(userId && formData){
            const file = await Files.findByIdAndUpdate(fileId, formData);
            res.status(200).json(file)
        }
        res.status(404).json( { error:"File Not there...."} )
    }catch(error){
        res.status(404).json({ error: "Error Updating File "})
    }
}