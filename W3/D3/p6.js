// Nested object
const student = {
    firstName: "Vishnu",
    lastName: "Reddy",

    scores: {
        math: 80,
        science: 86,
    },

    hobbies: ["reading", "singing"],

    fullName: function () {
        return this.firstName + " " + this.lastName;
    },

    greet: function () {
        console.log("Hi,", this.fullName());
    }
};

// Accessing values
console.log("Student:", student);
console.log("Math Score:", student.scores.math);

// Calling methods
console.log("Full Name:", student.fullName());
student.greet();