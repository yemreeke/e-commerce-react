export const API_FetchProducts = () => {
    return fetch('https://gist.githubusercontent.com/yemreeke/51d656ee02b123b851cd3d61520bff81/raw/1c38aa7e2529fb318d4b0b1f8ad7be7bf63b9153/data.json')
        .then(res => res.json())
        .then(data => data.products);
};