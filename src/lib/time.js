function getMinutesAndSecondsFromDurationInSeconds(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return [minutes, seconds];
}

export {
    getMinutesAndSecondsFromDurationInSeconds
}