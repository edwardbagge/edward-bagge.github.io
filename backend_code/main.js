
import { DataHandler } from './data_handling.js';


async function main()
{
    const data_handler = new DataHandler();

    data_handler.activateContactButtons();

    await data_handler.getTexts('../resources/about_me.txt', 'introductionText');
    await data_handler.getData();
    await data_handler.getTexts('../resources/work_experiences.txt', 'workExperiences');
}

main().then(() => {console.log('All operations in main have completed.')});
