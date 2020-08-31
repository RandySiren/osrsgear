import axios from 'axios';

export const getURL = (): Promise<{ [unit: string]: string[] }> => {
    const dataObject: { [unit: string]: string[] } = {};
    const items = [
        '2h',
        'ammo',
        'body',
        'cape',
        'feet',
        'hands',
        'head',
        'legs',
        'neck',
        'ring',
        'shield',
        'weapon',
    ];
    const url: string =
        'https://www.osrsbox.com/osrsbox-db/items-json-slot/items-';
    return new Promise<{ [unit: string]: string[] }>((resolve, reject) => {
        (async () => {
            items.map(async (item) => {
                let suggestions: string[] = [];
                const data: any = (await axios.get(url + item + '.json')).data;
                for (let key in data) {
                    suggestions.push(data[key].name);
                }
                dataObject[item] = suggestions;
            });
            resolve(dataObject);
        })();
    });
};
