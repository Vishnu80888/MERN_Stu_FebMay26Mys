//cancel .js
//TO cancel the existing booking if exists and restore the seat count in the showtime data
const bookingEmitter = require("./events");
const { getCurrentBooking, clearCurrentBooking } = require("./booking");

function cancelBooking(){
    const currentBooking = getCurrentBooking();

    if(!currentBooking){
        bookingEmitter.emit(bookingFailed,"No booking found to cancel...");
        return null;
    }

    const movie = movies.find((m) => m.id === booking.movieId);
    if(movie){
        bookingEmitter.emit("BookingFailed","Movie data not found while cancelling booking...");
        return null;
    }

     const Showtime = movie.showtimes.find((show) => show.time.toLowerCase() === booking.time.toLowerCase());
     if(!showtime){
        bookingEmitter.emit("BookingFailed","Showtime data not found while cancellling booking...");
        return null;
     }

     //restore the seat count
     showtime.seatsAvailable += booking.seatsAvailable;

     //clear the current booking
     clearCurrentBooking();
     bookingEmitter.emit("BookingCancelled",booking);
     return booking;
}

module.exports = {
    cancelBooking
};
