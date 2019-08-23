export function hasUrlParams(search) {
    const URL_SEARCH_PARAMS = new URLSearchParams(search);

    if (
        URL_SEARCH_PARAMS.has('owner') &&
        URL_SEARCH_PARAMS.has('repos') &&
        URL_SEARCH_PARAMS.get('owner') !== '' &&
        URL_SEARCH_PARAMS.get('repos') !== ''
    ) {
        return true;
    } else {
        return false;
    }
}

export function getRepositoryName() {
    const URL_SEARCH_PARAMS = new URLSearchParams(window.location.search);

    let owner = URL_SEARCH_PARAMS.get('owner'),
        repos = URL_SEARCH_PARAMS.get('repos');

    return `${owner}/${repos}`;
}
