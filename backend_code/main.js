
import { DataHandler } from './data_handling.js';


async function main()
{
    const data_handler = new DataHandler();

    await data_handler.getTexts('../common_texts/introduction.txt', 'introductionText');
    await data_handler.getTexts('../common_texts/hobbies_and_interests.txt', 'hobbiesAndInterestsText');
    await data_handler.getTexts('../common_texts/studies.txt', 'studiesText');
    await data_handler.getData();
    await data_handler.getTexts('../common_texts/work_experiences.txt', 'workExperiences');
}

main().then(() => {console.log('All operations in main have completed.')});
