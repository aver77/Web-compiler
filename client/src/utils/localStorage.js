const setLocalStorageItem = (path, item) => {
    localStorage.setItem(path, JSON.stringify(item));
};

const getLocalStorageItem = path => {
    return JSON.parse(localStorage.getItem(path));
};

export { setLocalStorageItem, getLocalStorageItem };
