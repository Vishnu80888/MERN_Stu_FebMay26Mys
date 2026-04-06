//Callback based validation fuctions

function validateMovieSelection(movies,movieId,callback){
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    if(!selectedMovie){
        return callback("Invalid movie Selection,Choose a valid movie ID",null);
    }
    callback(null,selectedMovie);
}
function validateTimeSelection(movie, selectedTime, callback){
    const selectedShowtime = movie.showtimes.find((show) => show.time.toLowerCase() === selectedTime.toLowerCase());
    if(!selectedShowtime){
        return callback("Invalid time slot Selection,Choose a valid time Slot",null);
    }
    callback(null,selectedShowtime);
}

function validateSeatCount(seatCount, callback){
    if(!isNaN(seatCount) || seatCount <= 0){
        return callback("Invalid seat count,Please enter a vaild number of seats",null);
    }
    callback(null,seatCount);
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};