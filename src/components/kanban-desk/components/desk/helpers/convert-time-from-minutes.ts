export const convertTimeFromMinutes = (amount: number): string => {
    if (amount) {
        const hours = Math.trunc(amount / 60);
        const minutes = amount % 60;
        return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}h`;
    }
    return '';
};
