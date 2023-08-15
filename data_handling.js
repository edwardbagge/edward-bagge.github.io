/*

    In this file I'll implement some classes, functions & other structures, to make the
    program more interactive (hopefully) :D

 */


fetch('projects.json').then(response => response.json()).then(data =>
{
    const projectList = document.getElementById('project-list');

    data.forEach(project =>
    {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        const projectTitle = document.createElement('h4');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectDescription);
        projectList.appendChild(projectItem);
    });
})
.catch(error =>
{
    console.error('Error fetching projects:', error);
});