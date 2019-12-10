import axios from "axios";

const BASE_URL = 'http://localhost:4000/timeboxes';
const AxiosTimeboxesAPI = {
    getAllTimeboxes: async function() {
        const response = await axios.get(BASE_URL);
        const timeboxes = response.data;
        return timeboxes;
    },
    addTimebox: async function(timeboxToAdd) {
        const response = await axios.post(BASE_URL, timeboxToAdd);
        const addedTimebox = response.data;
        return addedTimebox;
    },
    replaceTimebox: async function(timeboxToReplace) {
        if (!timeboxToReplace.id) {
            throw new Error('Nie można zamienić timeboxa nieposiadającego id');
        }
        const response = await axios.put(`${BASE_URL}/${timeboxToReplace.id}`, timeboxToReplace);
        const replacedTimebox = response.data;
        return replacedTimebox;
    },
    removeTimebox: async function(timeboxToRemove) {
        if (!timeboxToRemove.id) {
            throw new Error('Nie można zamienić timeboxa nieposiadającego id');
        }
        await axios.delete(`${BASE_URL}/${timeboxToRemove.id}`);
    }
}

export default AxiosTimeboxesAPI;