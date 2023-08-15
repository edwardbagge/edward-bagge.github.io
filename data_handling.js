/*

    In this file I'll implement some classes, functions & other structures, to make the
    program more interactive (hopefully) :D

 */


function getLanguageSkills()
{
    fetch('language_skills.json').then(response => response.json()).then(data =>
    {
        const languageSkillsContainer = document.getElementById('languageSkills');
        let content = '';

        data.forEach(item =>
        {
            if (item.category === 'Language Skills')
            {
                content += '<p><b>' + item.category + ':</b></p>';
                content += '<ul>';

                item.languages.forEach(language =>
                {
                    content += '<li><p>' + language.language + ' (' + language.fluency + ')</p></li>';
                });

                content += '</ul>';
            }
        });

        languageSkillsContainer.innerHTML = content;
    })
    .catch(error =>
    {
        console.error('Error fetching JSON:', error);
    });
}


function getRecentProjects()
{
    const dataList = document.getElementById('recentProjectInformation');

    fetch('projects.json').then(response => response.json()).then(jsonData =>
    {
        jsonData.forEach(item =>
        {
            const listItem = document.createElement('li');
            const titleHeader = document.createElement('h4');
            const descriptionPara = document.createElement('p');

            titleHeader.textContent = item.title;
            descriptionPara.textContent = item.description;

            listItem.appendChild(titleHeader);
            listItem.appendChild(descriptionPara);
            dataList.appendChild(listItem);
        });
    })
    .catch(error =>
    {
        console.error('Error fetching JSON data:', error);
    });
}


getLanguageSkills();
getRecentProjects();
