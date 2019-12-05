import { getMinutesAndSecondsFromDurationInSeconds } from '../../lib/time';

describe('getMinutesAndSecondsFromDurationInSeconds', () => {
    describe('for duration shorter than 1 minute', () => {
        it('returns 0 minutes and 45 seconds for 45 second-duration', () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(45)).toStrictEqual([0, 45]);
        });

        it('returns 0 minutes for 45 second-duration', () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(45)[0]).toBe(0);
        });
    
        it('returns 45 seconds for 45 second-duration', () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(45)[1]).toBe(45);
        });
    });
    
    describe('for duration longer or equal to 1 minute', () => {
        it('returns 1 minute and 0 seconds for 60 second-duration', () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(60)[0]).toBe(1);
        });
    
        it('returns 3 minutes and 40 seconds for 220 second-duration', () => {
            expect(getMinutesAndSecondsFromDurationInSeconds(220)).toStrictEqual([3, 40]);
        });
    });
});