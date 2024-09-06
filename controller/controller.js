const enevntSechema=require('../models/models');

const getevents=async(req,res)=>{
    try{
        const data=await enevntSechema.find();
        res.json(data);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

const eventssend= async (req, res) => {
    const { title, description } = req.body;
  
    try {
      if (!title || !description) {
        return res.status(400).json({
          code: 'VALIDATION_ERROR',
          message: 'Please provide title and description',
        });
      }
  
      const date=new Date();
    const final = date.toLocaleDateString();
      const newEvent = enevntSechema({ title, description, date:final});
      await newEvent.save();
  
      res.status(201).json(newEvent);
    } catch (err) {
      console.error(err); // log the error
      res.status(400).json({
        code: 'INTERNAL_ERROR',
        message: 'Error creating event',
        details: err.message,
      });
    }
  };
const eventupdate=async(req,res)=>{
    const {id}=req.params;
    const {title,description,date}=req.body;
    try{
        if(!title&&!description){
            return res.status(400).json({message:'Please provide title and description'});
        }
        const updatedEvent=await enevntSechema.findByIdAndUpdate(id,{title,description},{new:true});
        if(!updatedEvent){
            return res.status(404).json({message:'Event not found'});
        };
         res.json({
            status:200,
            message:'Event updated successfully',
         });
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

const eventdelete=async(req,res)=>{
    const {id}=req.params;
    try{
        const deletedEvent=await enevntSechema.findByIdAndDelete(id);
        if(!deletedEvent){
            return res.status(404).json({message:'Event not found'});
        }
        res.json({
            status:200,
            message:'Event deleted successfully',
        });
    }catch(err){
        res.status(500).json({message:err.message});
    }
 };

module.exports={getevents ,eventssend,eventupdate,eventdelete}; 