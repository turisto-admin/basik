export const parseTime = (timeString: string) => {
    const match = timeString.match(/(\d+):(\d+)(AM|PM)/i);
    
    if (!match) {
        throw new Error(`Formato de tiempo inválido: ${timeString}`);
    }
    
    const [, hoursStr, minutesStr, period] = match;
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    
    if (period.toUpperCase() === "PM" && hours < 12) {
        hours += 12;
    } else if (period.toUpperCase() === "AM" && hours === 12) {
        hours = 0;
    }
    
    return { hours, minutes };
};