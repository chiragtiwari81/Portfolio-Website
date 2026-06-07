const projectContainer =
document.getElementById("project-container");

fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {

projectContainer.innerHTML = "";

data.forEach(project => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${project.title}</h3>

<p>${project.description}</p>

<a href="${project.github}" target="_blank">
View Project
</a>
`;

projectContainer.appendChild(card);

});

})
.catch(error => {

projectContainer.innerHTML =
"<h3>Unable to load projects.</h3>";

console.log(error);

});

fetch("http://localhost:5000/projects")
  .then(res => res.json())
  .then(data => {
    console.log("Projects from Backend:", data);
  })
  .catch(err => {
    console.error("Backend Error:", err);
  });