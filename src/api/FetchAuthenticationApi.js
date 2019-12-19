const BASE_URL = 'http://localhost:4000';
const FetchAuthenticationAPI = {
    login: async function(credentials) {
        const response = await makeRequest(`${BASE_URL}/login`, 'POST', credentials);
        const result = await response.json();
        return result;
    }
}

export default FetchAuthenticationAPI;

async function makeRequest(url, method, body) {
    const jsonBody = body ? JSON.stringify(body) : undefined;
    const response = await window.fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonBody
        });
        if (!response.ok) {
            throw new Error('Coś poszło nie tak :(');
        }
        return response;
}