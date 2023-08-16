
export class JsonReader
{
    static async getContactInformation()
    {
        try
        {
            const response = await fetch('../personal_data/contact_information.json');
            const data = await response.json();

            const container = document.getElementById('contactInformation');
            const ul = document.createElement('ul');

            for (const key in data)
            {
                if (data.hasOwnProperty(key))
                {
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = '<b>' + key + ':</b> ' + data[key];
                    li.appendChild(p);
                    ul.appendChild(li);
                }
            }

            container.appendChild(ul);
        }

        catch (error)
        {
            console.error('Error fetching JSON:', error);
        }
    }

    static getCommonSkills()
    {
        fetch('../personal_data/common_skills.json').then(response => response.json()).then(data =>
        {
            const commonSkillsContainer = document.getElementById('commonSkills');
            let content = '<ul>';

            data.skills.forEach(skill =>
            {
                content += '<li><p><b>' + skill + '</b></p></li>';
            })

            content += '</ul>';

            commonSkillsContainer.innerHTML = content;
        })
            .catch(error =>
            {
                console.error('Error fetching JSON:', error);
            });
    }

    static getLanguageSkills()
    {
        fetch('../personal_data/language_skills.json').then(response => response.json()).then(data =>
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

    static getDriversLicenses()
    {
        fetch('../personal_data/drivers_licenses.json').then(response => response.json()).then(data =>
        {
            const driversLicensesContainer = document.getElementById('driversLicenses');
            let content = '';

            data.forEach(item =>
            {
                if (item.category === 'Drivers Licenses')
                {
                    content += '<p><b>' + item.category + ':</b></p>';
                    content += '<ul>';

                    item.licenses.forEach(license =>
                    {
                        content += '<li><p>' + license.type + ' (' + license.vehicle + ')</p></li>';
                    });

                    content += '</ul>';
                }
            });

            driversLicensesContainer.innerHTML = content;
        })
            .catch(error =>
            {
                console.error('Error fetching JSON:', error);
            });
    }
}