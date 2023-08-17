
export class TextReader
{
    static async getIntroduction()
    {
        const response = await fetch('../common_texts/introduction.txt');
        const text = await response.text();

        const content = document.getElementById('introductionText');
        content.innerHTML = `<p>${text.replace(/\n\n/g, '<br><br>\n')}</p>`;
    }

    static async getHobbiesAndInterests()
    {
        const response = await fetch('../common_texts/hobbies_and_interests.txt');
        const text = await response.text();

        const content = document.getElementById('hobbiesAndInterestsText');
        content.innerHTML = `<p>${text.replace(/\n\n/g, '<br><br>\n')}</p>`;
    }

    static async getStudies()
    {
        const response = await fetch('../common_texts/studies.txt');
        const text = await response.text();

        const content = document.getElementById('studiesText');
        content.innerHTML = `<p>${text.replace(/\n\n/g, '<br><br>\n')}</p>`;
    }

    static async getWorkExperiences()
    {
        const file_names = ['../work_experiences/job_A.txt',
                                    '../work_experiences/job_B.txt',
                                    '../work_experiences/job_C.txt',
                                    '../work_experiences/job_D.txt',
                                    '../work_experiences/job_E.txt'];

        const text_id = ['Job_A', 'Job_B', 'Job_C', 'Job_D', 'Job_E'];

        for (let index = 0; index < file_names.length; index++)
        {
            const scriptUrl = new URL(import.meta.url);
            const filePath = new URL(file_names[index], scriptUrl).toString();

            const response = await fetch(filePath);
            const text = await response.text();

            const content = document.getElementById(text_id[index]);
            content.innerHTML = `<p>${text.replace(/\n\n/g, '<br><br>\n')}</p>`;
        }
    }
}