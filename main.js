const firstName = "Mandilakhe";
const surname = "Mangumta";
let bio =
  "I am a freshly out of school junior developer is knowledge in programming languages such as Java, PHP, Visual studio basics.  As of last year 2023 I was doing my last year in Diploma in Information Technology at the Vaal University of Technology.  I hold various certifications from tech companies such as Amazon, Google, Cisco and Microsoft";
let projects = [
  {
    title: "Student Hub",
    description:
      "During my final year at university, I actively contributed to a group project where we successfully developed a website. My primary responsibility was on the backend, ensuring seamless user registration and login functionalities by implementing database management system. Additionally I facilitated content sharing among users and managed inventory updates for our online bookstore component.",
  },
];
const educationalBackground =
  "Diploma in Information Technology, Vaal University of Technology";

document.getElementById("aboutMetext").textContent = firstName;
document.getElementById("aboutMetext1").textContent = surname;
document.getElementById("aboutMetext2").textContent = bio;
//document.getElementById("aboutMetext3").textContent = project.title;
projects.forEach((project, index) => {
  document.getElementById("aboutMetext5").textContent =("Title:", project.title);
  document.getElementById("aboutMetext6").textContent =("Description:", project.description);
});
document.getElementById("aboutMetext3").textContent = educationalBackground;

console.log("Name:", fullName);
console.log("Surname:", surname);
console.log("Bio:", bio);
console.log("Projects:");
projects.forEach((project, index) => {
  console.log(`Project ${index + 1}:`);
  console.log("Title:", project.title);
  console.log("Description:", project.description);
});
console.log("Educational Background:", educationalBackground);
display.textContent = { $surname };
