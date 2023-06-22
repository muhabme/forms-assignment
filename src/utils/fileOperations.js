import * as fs from 'fs';

const dataPath = './src/data/data.json'; // path to our JSON file

export const saveData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
};
export const getData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
};
