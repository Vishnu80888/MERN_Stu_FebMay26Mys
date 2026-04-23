const showService = require("../services/show.service");

//Creat Show :Admin
exports.createShow = async (req,res,next) =>{
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"Show created Successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};
//Get shows

exports.getShows = async (req,res,next) =>{
    try{
        const shows = await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message:"Shows fetched Successfully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};

//Get single Show Details
exports.getShowId = async (req,res,next) =>{
    try{
        const show = await showService.getShowId(req.param.id);
        res.status(200).json({
            success:true,
            message:"Show fetched Successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

//update show - admin
exports.updateShow = async (req,res,next) =>{
    try{
        const show = await showService.updateShow(req.param.id,rq.body);
        res.status(200).json({
            success:true,
            message:"Show updated Successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

//delete show - admin

exports.deleteShow = async (req,res,next) =>{
    try{
        const show = await showService.deleteShow(req.param.id);
        res.status(200).json({
            success:true,
            message:"Show deleted Successfully",
        });
    }
    catch(error){
        next(error);
    }
};
