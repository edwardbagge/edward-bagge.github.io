export class DataHandler
{
    async getData()
    {
        try
        {
            const response = await fetch('../personal_data/personal_data.json');
            const data = await response.json();

            this.fetchContactInformation(data["contactInformation"]);
            this.fetchCommonSkills(data["commonSkills"]);
            this.fetchLanguageSkills(data["languageSkills"]);
            this.fetchDriversLicenses(data["driversLicenses"]);
        }

        catch (error)
        {
            console.error('Error fetching JSON:', error);
        }
    }


    fetchContactInformation(sectionData)
    {
        const container = document.getElementById(sectionData["id"]);
        const ul = document.createElement('ul');

        for (const item of sectionData["dataList"])
        {
            const li = document.createElement('li');
            const p = document.createElement('p');

            const key = Object.keys(item)[0];
            const value = item[key];

            p.innerHTML = '<b>' + key + ':</b> ' + value;
            li.appendChild(p);
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }


    fetchCommonSkills(sectionData)
    {
        const container = document.getElementById(sectionData["id"]);

        for (const item of sectionData["dataList"])
        {
            const section = document.createElement('section');
            const ul = document.createElement('ul');
            const h4 = document.createElement('h4');

            const category = item["category"];
            const skills = item["skills"];
            h4.innerHTML = category;

            section.appendChild(h4);

            skills.forEach(skill =>
            {
                const li = document.createElement('li');
                li.innerHTML = '<p>' + skill + '</p>';
                ul.appendChild(li);
            });

            section.appendChild(h4);
            section.appendChild(ul);
            section.classList.add('row');
            container.appendChild(section);
        }
    }


    fetchLanguageSkills(sectionData)
    {
        const container = document.getElementById(sectionData["id"]);
        const ul = document.createElement('ul');

        const sectionHeader = document.createElement('p');
        sectionHeader.innerHTML = '<p><b>' + sectionData["category"] + ':</b></p>';
        container.appendChild(sectionHeader);

        for (const item of sectionData["dataList"])
        {
            const li = document.createElement('li');
            const p = document.createElement('p');

            const language = item["language"];
            const fluency = item["fluency"];
            p.innerHTML = language + ' (' + fluency + ')';

            li.appendChild(p);
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }


    fetchDriversLicenses(sectionData)
    {
        const container = document.getElementById(sectionData["id"]);
        const ul = document.createElement('ul');

        const sectionHeader = document.createElement('p');
        sectionHeader.innerHTML = '<p><b>' + sectionData["category"] + ':</b></p>';
        container.appendChild(sectionHeader);

        for (const item of sectionData["dataList"])
        {
            const li = document.createElement('li');
            const p = document.createElement('p');

            const type = item["type"];
            const vehicle = item["vehicle"];
            p.innerHTML = type + ' (' + vehicle + ')';

            li.appendChild(p);
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }


    async getTexts(file_path, text_id)
    {
        const scriptUrl = new URL(import.meta.url);
        const filePath = new URL(file_path, scriptUrl).toString();

        if (text_id === 'workExperiences')
        {
            let container = document.getElementById("workExperiences");

            let rawFile = new XMLHttpRequest();
            rawFile.open("GET", "../common_texts/work_experiences.txt", true);
            rawFile.onreadystatechange = function ()
            {
                if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0))
                {
                    let allText = rawFile.responseText;

                    let parser = new DOMParser();
                    let htmlDoc = parser.parseFromString(allText, 'text/html');

                    let ulElement = document.createElement("ul");

                    let liNodes = htmlDoc.querySelectorAll("li");
                    liNodes.forEach(function (liNode)
                    {
                        ulElement.appendChild(liNode);
                    });

                    container.appendChild(ulElement);
                }
            }
            rawFile.send(null);
        }

        else
        {
            const response = await fetch(filePath);
            const text = await response.text();
            const content = document.getElementById(text_id);

            content.innerHTML = `<p>${text.replace(/\n\n/g, '<br><br>\n')}</p>`;
        }
    }
}
