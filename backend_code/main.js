
import { TextReader } from "./text_reader.js";
import { JsonReader } from './data_reader.js';


async function main()
{
    const common_text_path = ['../common_texts/introduction.txt',
                                      '../common_texts/hobbies_and_interests.txt',
                                      '../common_texts/studies.txt'];

    const common_text_id = ['introductionText', 'hobbiesAndInterestsText', 'studiesText'];

    const work_experience_path = ['../work_experiences/job_A.txt',
                                          '../work_experiences/job_B.txt',
                                          '../work_experiences/job_C.txt',
                                          '../work_experiences/job_D.txt',
                                          '../work_experiences/job_E.txt'];

    const work_experience_id = ['Job_A', 'Job_B', 'Job_C', 'Job_D', 'Job_E'];

    await TextReader.getTexts(common_text_path, common_text_id);

    await JsonReader.getContactInformation();
    await JsonReader.getCommonSkills();
    await JsonReader.getLanguageSkills();
    await JsonReader.getDriversLicenses();

    await TextReader.getTexts(work_experience_path, work_experience_id);
}

main().then(() => {console.log('All operations in main have completed.')});