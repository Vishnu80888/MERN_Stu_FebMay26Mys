//movies.js
//This file Store the movie data used in the CLI App
const movies = [
    {
        id : 1,
        title: "Dhurandar 2",
        showtimes: [
            {time:"10:00AM",seatsAvailable:10},
            {time:"01:00PM",seatsAvailable:8},
            {time:"06:00PM",seatsAvailable:30},
        ]
    },
     {
        id : 2,
        title: "LoveMockTail 3",
        showtimes: [
            {time:"09:00AM",seatsAvailable:10},
            {time:"01:00PM",seatsAvailable:8},
            {time:"07:00PM",seatsAvailable:30},
        ]
    },
     {
        id : 3,
        title: "Hayagreeva",
        showtimes: [
            {time:"11:00AM",seatsAvailable:10},
            {time:"02:00PM",seatsAvailable:8},
            {time:"07:00PM",seatsAvailable:30},
        ]
    }
];

//Exporting the movie data so that other file can use it....
module.exports = movies;