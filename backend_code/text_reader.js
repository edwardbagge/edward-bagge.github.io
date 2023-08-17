
export class TextReader
{
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
