const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
        trim:true,
        index:true,
    },
    genre:{
        type:String,
        required:[true,'genre is required'],
        enum:['Action','Comedy','Drama','Horror','Sci-Fi','Romance','Thiller'],
        index:true,
    },
    rating:{
        type:Number,
        required:[true,'rating is required'],
        min:[1,"Rating must be at least 1"],
        max:[5,"Rating cannot exxeed 5"],
        index:true,
    },
    duration:{
        type:Number,
        required:[true,"duration is required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"release date is required"],
        index:true,
    },
    poster:{
        typr:String,
        default:"",
    },
    language:{
        type:String,
        index:true
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},
    {
        timestamps:true,
});

//compound index for title and genre

movieSchema.index({genre:1,rating:-1});

//text index
movieSchema.index({title:"text"});

//virtual field for reviews
movieSchema.virtual("isReleased").get(function(){
    return this.releaseDate <= new Date();
});
module.exports = mongoose.model("Movie",movieSchema);
