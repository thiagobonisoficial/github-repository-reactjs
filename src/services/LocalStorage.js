const LOCAL_STORAGE = {
    key: 'repositories',
    get: () => {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE.key));
    },
    set: data => localStorage.setItem(LOCAL_STORAGE.key, JSON.stringify(data)),
};

export function setRepositories(data) {
    LOCAL_STORAGE.set(data);
}

export function getRepositories() {
    return LOCAL_STORAGE.get();
}

export function filterLocalStorage(repository_name) {
    if (Array.isArray(LOCAL_STORAGE.get())) {
        return LOCAL_STORAGE.get().filter(({ full_name }) => {
            return full_name === repository_name;
        })[0];
    } else {
        return null;
    }
}

export function hasLocalStorage() {
    return LOCAL_STORAGE.get() ? true : false;
}

export function hasRepository(repository_name) {
    if (hasLocalStorage()) {
        return filterLocalStorage(repository_name) ? true : false;
    } else {
        return false;
    }
}
