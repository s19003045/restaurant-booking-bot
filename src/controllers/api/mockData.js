const faker = require("faker");

const imgIds = { min: 110, max: 1084 };

const randomImgId = () => {
    return Math.floor(Math.random() * (imgIds.max - imgIds.min)) + imgIds.min;
};

const randomImgUrl = (length = 1) => {
    if (length === 1 || !Number.isInteger(length))
        return "https://picsum.photos/id/{id}/500/300".replace(
            "{id}",
            randomImgId()
        );
    const imgUrls = [];
    for (let i = 0; i < length; i++) {
        imgUrls.push(randomImgUrl());
    }
    return imgUrls;
};

const randomChecked = () => {
    return [true, false][Math.round(Math.random())];
};

const restCategories = [
    "日式燒肉",
    "義式",
    "美式",
    "泰式/東南亞料理",
    "歐式/綜合西式",
    "台式",
    "中式",
    "港式",
    "韓式",
];

const getRandomItem = (items) => {
    if (!Array.isArray(items)) return null;
    return items[Math.floor(Math.random() * items.length)];
};

const mockAPI = {}

// 所有餐廳
const allRestList = randomImgUrl(200).map((url) => ({
    key: faker.datatype.uuid(),
    id: faker.datatype.uuid(),
    name: faker.random.words(),
    address: faker.address.cityName() + ", " + faker.address.streetAddress(),
    tel: faker.phone.phoneNumber(),
    imgUrl: url,
    description: faker.lorem.paragraphs(),
    category: getRandomItem(restCategories),
    checked: randomChecked(),
}));
mockAPI.allRestList = allRestList

// 新增餐廳
const newRestList = randomImgUrl(20).map((url) => ({
    key: faker.datatype.uuid(),
    id: faker.datatype.uuid(),
    name: faker.random.words(),
    address: faker.address.cityName() + ", " + faker.address.streetAddress(),
    tel: faker.phone.phoneNumber(),
    imgUrl: url,
    description: faker.lorem.paragraphs(),
    category: getRandomItem(restCategories),
    checked: randomChecked(),
}));
mockAPI.newRestList = newRestList

/**
 * 以關鍵字搜尋餐廳
 * @param {Array} restList
 * @param {String} keyword
 * @param {Array || String} keys
 * @returns
 */
const findRestByKeyword = (restList, keyword, keys = ["name"]) => {
    if (!(restList && Array.isArray(restList))) return [];
    if (!keyword) return restList;
    if (typeof keyword !== "string") return [];
    if (!(Array.isArray(keys) || typeof keys === "string")) return [];
    const keysSearch = Array.isArray(keys) ? keys : [keys];
    const newRestList = [];
    let keywordTrim = keyword.trim();
    restList.forEach((rest) => {
        let found = false;
        keysSearch.forEach((key) => {
            if (typeof key !== "string" || !rest.hasOwnProperty(key)) return;
            if (rest[key].indexOf(keywordTrim) >= 0) found = true;
        });
        if (found) newRestList.push(rest);
    });
    return newRestList;
};
mockAPI.findRestByKeyword = findRestByKeyword

// todo: 假資料, 帶 api 完成後要移除
const fakeImgUrl = "https://fakeimg.pl/{size}/282828/EAE0D0/?text=menu{id}";


const imgSize = {
    small: {
        name: "small",
        size: "80x120",
    },
    normal: {
        name: "normal",
        size: "200x300",
    },
    large: {
        name: "large",
        size: "400x600",
    },
};
mockAPI.imgSize = imgSize

const genFakeImgUrls = (length, size) => {
    const urls = [];
    if (!Number.isInteger(length)) return urls;
    if (Object.keys(imgSize).indexOf(size) < 0) size = imgSize.normal.name;

    for (let i = 0; i < length; i++) {
        const url = fakeImgUrl
            .replace("{id}", i)
            .replace("{size}", imgSize[size].size);
        urls.push(url);
    }
    return urls;
};
mockAPI.genFakeImgUrls = genFakeImgUrls

module.exports = mockAPI
