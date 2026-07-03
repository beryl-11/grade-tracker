import courses from "./courses.json" with { type: "json" };

console.log(courses["Fall 2025"][0].name + " " + courses["Fall 2025"][0].grade);