
import { DataHandler } from './data_handling.js';


async function main()
{
    await DataHandler.getTexts('../common_texts/introduction.txt', 'introductionText');
    await DataHandler.getTexts('../common_texts/hobbies_and_interests.txt', 'hobbiesAndInterestsText');
    await DataHandler.getTexts('../common_texts/studies.txt', 'studiesText');
    await DataHandler.getData();
    await DataHandler.getTexts('../common_texts/work_experiences.txt', 'workExperiences');
}

main().then(() => {console.log('All operations in main have completed.')});