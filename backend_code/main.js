
import { TextReader } from "./text_reader.js";
import { JsonReader } from './data_reader.js';


async function main()
{
    await TextReader.getIntroduction();
    await TextReader.getHobbiesAndInterests();
    await TextReader.getStudies();

    await JsonReader.getContactInformation();
    await JsonReader.getCommonSkills();
    await JsonReader.getLanguageSkills();
    await JsonReader.getDriversLicenses();

    await TextReader.getWorkExperiences();
}

main().then(() => {console.log('All operations in main have completed.')});