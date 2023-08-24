export class DataHandler
{
    async getData()
    {
        try
        {
            const response = await fetch('../resources/personal_data.json');
            const data = await response.json();

            this.fetchContactInformation(data["contactInformation"]);
            this.fetchCommonSkills(data["commonSkills"]);
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
            const h4 = document.createElement('h4');
            const ul = document.createElement('ul');

            const category = item["category"];
            const skills = item["skills"];

            skills.forEach(skill =>
            {
                const li = document.createElement('li');
                li.innerHTML = '<p>' + skill + '</p>';
                ul.appendChild(li);
            });

            h4.innerHTML = category;

            section.appendChild(h4);
            section.appendChild(ul);
            section.classList.add('skill_box');

            container.appendChild(section);
        }
    }


    async getTexts(file_path, text_id)
    {
        const scriptUrl = new URL(import.meta.url);
        const filePath = new URL(file_path, scriptUrl).toString();

        let container = document.getElementById(text_id);

        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", filePath, true);
        rawFile.onreadystatechange = function ()
        {
            if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0))
            {
                let allText = rawFile.responseText;

                let parser = new DOMParser();
                let htmlDoc = parser.parseFromString(allText, 'text/html');

                let divElement = document.createElement("div");

                let sectionNodes = htmlDoc.querySelectorAll("section");
                sectionNodes.forEach(function (sectionNode)
                {
                    divElement.appendChild(sectionNode);
                });

                container.appendChild(divElement);
            }
        }

        rawFile.send(null);
    }
}
