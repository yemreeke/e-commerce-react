export const API_FetchProducts = () => {
    return fetch('https://gist.githubusercontent.com/ArxEmze/9286f5c34bb019ac87d0b93ba65b08c4/raw/bc64d74186830fab4e26b71d4d4b1df515a5d137/data.json')
        .then(res => res.json())
        .then(data => data.products);
};