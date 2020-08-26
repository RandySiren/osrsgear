import axios from 'axios';

export const getURL = (): Promise<string[]> => {
    let suggestions: string[] = [];
    const url: string = 'https://www.osrsbox.com/osrsbox-db/items-json-slot/';
    return new Promise<string[]>((resolve, reject) => {
        (async () => {
            const data: any = (await axios.get(url + 'items-weapon.json')).data;
            for (let key in data) {
                suggestions.push(data[key].name);
            }
            resolve(suggestions);
        })();
    });
};
