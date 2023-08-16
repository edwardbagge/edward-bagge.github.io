
import { JsonReader } from './data_reader.js';


async function main()
{
    await JsonReader.getContactInformation();
    JsonReader.getCommonSkills();
    JsonReader.getLanguageSkills();
    JsonReader.getDriversLicenses();
}

main().then(() => {console.log('All operations in main have completed.')});