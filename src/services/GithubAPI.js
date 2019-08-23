import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://api.github.com/repos/',
    timeout: 1000,
});

export function getRepository(repository) {
    return instance.get(repository);
}
