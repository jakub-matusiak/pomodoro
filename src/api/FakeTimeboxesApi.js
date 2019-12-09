import uuidv4 from 'uuid';

function wait(ms = 1000) {
    return new Promise(
        (resolve) => {
            setTimeout(resolve, ms);
        }
    )
}

const timeboxes = [
    { 'id': 1, 'title': 'uczę się funkcji asynchronicznych', 'totalTimeInMinutes': 25 },
    { 'id': 2, 'title': 'uczę się REST API', 'totalTimeInMinutes': 15 },
    { 'id': 3, 'title': 'uczę się async/await', 'totalTimeInMinutes': 20 }
];

function findIndexById(id) {
    const result = timeboxes.findIndex((timebox) => timebox.id === id);
    if (result < 0) {
        throw new Error('Timebox o podanym id nie istnieje');
    }
    return result;
}

const FakeTimeboxesAPI = {
    getAllTimeboxes: async function() {
        await wait(1000);
        return [...timeboxes];
    },
    addTimebox: async function(timeboxToAdd) {
        await wait(1000);
        const addedTimebox = {...timeboxToAdd, id: uuidv4()};
        timeboxes.push(addedTimebox);
        return addedTimebox;
    },
    replaceTimebox: async function(timeboxToReplace) {
        await wait(1000);
        if (!timeboxToReplace.id) {
            throw new Error('Nie można zamienić timeboxa nieposiadającego id');
        }
        const index = findIndexById(timeboxToReplace.id);
        const replacedTimebox = {...timeboxToReplace};
        timeboxes[index] = replacedTimebox;
        return replacedTimebox;
    },
    removeTimebox: async function(timeboxToRemove) {
        await wait(1000);
        if (!timeboxToRemove.id) {
            throw new Error('Nie można usunąć timeboxa nieposiadającego id');
        }
        const index = findIndexById(timeboxToRemove.id);
        timeboxes.splice(index, 1);
    }
}

export default FakeTimeboxesAPI;