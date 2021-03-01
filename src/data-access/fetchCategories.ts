export const getCategories = (): Promise<any>=>{
    const url = "https://developers.zomato.com/api/v2.1/categories";
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'user-key': '94a3e43e5e16edd38d792a5ca1027c7e'}
    };
    return getJSON(url, requestOptions);
}

const getJSON = (url: string, requestOptions: any, tryCount = 3): Promise<Response>=>{
    const fetchAction = () =>
    fetch(url, requestOptions)
    .then((response: Response) => {
        if(!response.ok && tryCount > 0){
            return delay().then(() => getJSON(url, tryCount - 1));
        } else {
            return handleResponse(response);
        }
    });
    return fetchAction();
}

const delay = ()=>{
    return new Promise(resolve=>{
        setTimeout(resolve, 500);
    });
}

const handleResponse = (response: Response): Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
            response.json().then(result=>resolve(result)).catch(()=>resolve({}));
        } catch(error) {
            reject(error);
        }
    });
}
