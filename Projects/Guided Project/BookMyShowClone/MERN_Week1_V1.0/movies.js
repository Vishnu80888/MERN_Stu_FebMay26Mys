//movies.js
//This file Store the movie data used in the CLI App
const movies = [
    {
        id : 1,
        title: "Dhurandar 2",
        showtimes: [
            {time:"10:00AM",seatsAvailable:100},
            {time:"01:00PM",seatsAvailable:80},
            {time:"06:00PM",seatsAvailable:300},
        ]
    },
     {
        id : 2,
        title: "LoveMockTail 3",
        showtimes: [
            {time:"09:00AM",seatsAvailable:100},
            {time:"01:00PM",seatsAvailable:80},
            {time:"07:00PM",seatsAvailable:300},
        ]
    },
     {
        id : 3,
        title: "Hayagreeva",
        showtimes: [
            {time:"11:00AM",seatsAvailable:100},
            {time:"02:00PM",seatsAvailable:80},
            {time:"07:00PM",seatsAvailable:300},
        ]
    }
];

//Exporting the movie data so that other file can use it....
module.exports = movies;