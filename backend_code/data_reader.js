
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

    static async getCommonSkills()
    {
        try
        {
            const response = await fetch('../personal_data/common_skills.json');
            const data = await response.json();

            const container = document.getElementById('commonSkills');
            const ul = document.createElement('ul');

            for (const skill of data["skills"])
            {
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.innerHTML = '<b>' + skill + '</b>';
                li.appendChild(p);
                ul.appendChild(li);
            }

            container.appendChild(ul);
        }

        catch (error)
        {
            console.error('Error fetching JSON:', error);
        }
    }

    static async getLanguageSkills()
    {
        try
        {
            const response = await fetch('../personal_data/language_skills.json');
            const data = await response.json();

            const container = document.getElementById('languageSkills');
            const ul = document.createElement('ul');

            const section_header = document.createElement('p');
            section_header.innerHTML = '<p><b>' + data["category"] + ':</b></p>';
            container.appendChild(section_header)

            for (const key of data["languages"])
            {
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.innerHTML = key["language"] + ' ' + '(' + key["fluency"] + ')';
                li.appendChild(p);
                ul.appendChild(li);
            }

            container.appendChild(ul);
        }

        catch (error)
        {
            console.error('Error fetching JSON:', error);
        }
    }

    static async getDriversLicenses()
    {
        try
        {
            const response = await fetch('../personal_data/drivers_licenses.json');
            const data = await response.json();

            const container = document.getElementById('driversLicenses');
            const ul = document.createElement('ul');

            const section_header = document.createElement('p');
            section_header.innerHTML = '<p><b>' + data["category"] + ':</b></p>';
            container.appendChild(section_header)

            for (const key of data["licenses"])
            {
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.innerHTML = key["type"] + ' ' + '(' + key["vehicle"] + ')';
                li.appendChild(p);
                ul.appendChild(li);
            }

            container.appendChild(ul);
        }

        catch (error)
        {
            console.error('Error fetching JSON:', error);
        }
    }
}