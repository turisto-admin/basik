'use server';

export interface EventCalendar {
    summary:     string;
    description: string;
    start:       SelectDate;
    end:         SelectDate;
}

export interface SelectDate {
    dateTime: string;
    timeZone: string;
}


export const CreateEventMeeting = async (data:  EventCalendar) => {
    
    try {
        
        const createEvent = await fetch(`${process.env.BACKEND_URL}/calendar/event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .catch(error => console.log(error) )

        return {
            ok: true,
            createEvent
        }
        
    } catch (error) {
        console.error('Error en CreateEventMeeting:', error);
        throw error;
    }

}