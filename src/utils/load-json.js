import fs from 'fs';

function loadJson(path) {
    const data = fs.readFileSync(path, {encoding: 'utf-8'});
    const jsonData = JSON.parse(data);
    return jsonData;
}

export default loadJson;