// document.getElementById('project-filter').addEventListener('change', function() {
//     const filterValue = this.value;
    
//     // Fetch projects dynamically if connected to a backend or filter client-side data
//     fetch(`/get-projects?type=${filterValue}`)
//       .then(response => response.json())
//       .then(data => {
//         displayProjects(data); // function to render projects on the page
//       })
//       .catch(error => console.error('Error fetching projects:', error));
//   });
  
//   function displayProjects(projects) {
//     const projectsContainer = document.getElementById('projects-container');
//     projectsContainer.innerHTML = ''; // Clear existing projects
    
//     projects.forEach(project => {
//       const projectElement = document.createElement('div');
//       projectElement.classList.add('project-card');
//       projectElement.innerHTML = `
//         <h3>${project.name}</h3>
//         <p>${project.description}</p>
//       `;
//       projectsContainer.appendChild(projectElement);
//     });
//   }
  