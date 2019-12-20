import axios from "axios";

const BASE_URL = 'http://localhost:4000/timeboxes';
const AxiosTimeboxesAPI = {
    getAllTimeboxes: async function(accessToken) {
        const response = await axios.get(BASE_URL, { headers: {'Authorization': `Bearer ${accessToken}`} });
        const timeboxes = response.data;
        return timeboxes;
    },
    addTimebox: async function(timeboxToAdd, accessToken) {
        const response = await axios.post(BASE_URL, timeboxToAdd, { headers: {'Authorization': `Bearer ${accessToken}`} });
        const addedTimebox = response.data;
        return addedTimebox;
    },
    replaceTimebox: async function(timeboxToReplace, accessToken) {
        if (!timeboxToReplace.id) {
            throw new Error('Nie można zamienić timeboxa nieposiadającego id');
        }
        const response = await axios.put(`${BASE_URL}/${timeboxToReplace.id}`, timeboxToReplace, { headers: {'Authorization': `Bearer ${accessToken}`} });
        const replacedTimebox = response.data;
        return replacedTimebox;
    },
    removeTimebox: async function(timeboxToRemove, accessToken) {
        if (!timeboxToRemove.id) {
            throw new Error('Nie można zamienić timeboxa nieposiadającego id');
        }
        await axios.delete(`${BASE_URL}/${timeboxToRemove.id}`, { headers: {'Authorization': `Bearer ${accessToken}`} });
    }
}

export default AxiosTimeboxesAPI;