export class DataHandler
{
    static async getData()
    {
        try
        {
            const response = await fetch('../personal_data/personal_data.json');
            const data = await response.json();

            for (const sectionKey in data)
            {
                if (data.hasOwnProperty(sectionKey))
                {
                    const sectionData = data[sectionKey];
                    const container = document.getElementById(sectionData["id"]);
                    const ul = document.createElement('ul');

                    if (sectionData["category"] !== undefined)
                    {
                        const sectionHeader = document.createElement('p');
                        sectionHeader.innerHTML = '<p><b>' + sectionData["category"] + ':</b></p>';
                        container.appendChild(sectionHeader);
                    }

                    for (const item of sectionData["data-list"])
                    {
                        const li = document.createElement('li');
                        const p = document.createElement('p');

                        if (sectionData["id"] === 'contactInformation')
                        {
                            const key = Object.keys(item)[0];
                            const value = item[key];
                            p.innerHTML = '<b>' + key + ':</b> ' + value;
                        }
                        else if (sectionData["id"] === 'commonSkills')
                        {
                            const value = Object.values(item)[0];
                            p.innerHTML = '<b>' + value + '</b>';
                        }
                        else if (sectionData["id"] === 'languageSkills')
                        {
                            const language = item["language"];
                            const fluency = item["fluency"];
                            p.innerHTML = language + ' (' + fluency + ')';
                        }
                        else if (sectionData["id"] === 'driversLicenses')
                        {
                            const type = item["type"];
                            const vehicle = item["vehicle"];
                            p.innerHTML = type + ' (' + vehicle + ')';
                        }

                        li.appendChild(p);
                        ul.appendChild(li);
                    }

                    container.appendChild(ul);
                }
            }
        }

        catch (error)
        {
            console.error('Error fetching JSON:', error);
        }
    }

    static async getTexts(file_path_list, text_id_list)
    {
        for (let index = 0; index < file_path_list.length; index++)
        {
            const scriptUrl = new URL(import.meta.url);
            const filePath = new URL(file_path_list[index], scriptUrl).toString();

            const response = await fetch(filePath);
            const text = await response.text();

            const content = document.getElementById(text_id_list[index]);
            content.innerHTML = `<p>${text.replace(/\n\n/g, '<br><br>\n')}</p>`;
        }
    }
}
