const  Show = require("../models/Show");
const Movie = require("../models/Movie");

//Generate Seats
const generateSeats = (totalSeates) =>{
    const seats = [];
    const rows = ["A","B","C","D","E","F","G","H"];
    let seatCount = 0;
    for(let row of rows){
        for(let i = 1; i<=10 ;i++){
            if(seatCount >=  totalSeates)
                break;

            seats.push({
                seatNumber:`${row}${i}`,
                isBooked:false,
            });
            seatCount++;
        }
    }
    return seats;
};

//Create a Show
exports.createShow = async({movieId,date,time,totalSeates})=>{
    //check if moovie is exists
    const movie = await Movie.findById(movieId);
    if(!movie)
        throw new Error ("Movie not Found");

    //Generate seats
    const seats = generateSeats(totalSeates);

    const shown = await Show.create({
        movieId,
        date,
        time,
        totalSeates,
        availableSeats:totalSeates,
        seats,
    });
    return shown;
}

//get Shows
exports.getShowsByMovie = async ({movieId,date}) => {
    const fliter ={isActive:true};
    if(movieId) fliter.movieId = movieId;
    if(date) fliter.date = new Date(date);

    const shows = await Show.find (fliter)
    .populate("movieId")
    .sort({date:1});

    return shows;
};

//Get show by movieId

exports.getShowsByMovie = async ({id}) =>{
    const show = await Show.findById(id).populate("movieId");

    if(!show)
        throw new Error ("Show is not found");

    return show;
};

//Update the Show
exports.updateShow = async (id,date)=>{
    const show = await Show.findByIdAndUpdate(id,date,{
        returnDocument:"after",
        runValidators:true,
    });

    if(!show)
        throw new Error ("Show is not found");

    return show;
};

// Delete a Show
exports.deleteShow = async (id) => {
    const show = await Show.findByIdAndDelete(id,{
        isActive:false,
    });

    if (!show) {
        throw new Error("Show not found or already deleted");
    }
    return {
        showId: deletedShow._id
    };
};