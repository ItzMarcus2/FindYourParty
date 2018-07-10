import {getParties} from './database/FestFunctions';

export async function parties() {
    const data = await getParties();
    const array = data[0];

    return array;
}