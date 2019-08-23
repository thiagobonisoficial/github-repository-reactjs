import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://api.github.com/repos/',
    timeout: 1000,
});

export function getRepository(repository) {
    return instance.get(repository);
}

export function getIssues(repository) {
    return instance.get(`${repository}/issues`, {
        params: {
            state: 'open',
            per_page: 5,
        },
    });
}
