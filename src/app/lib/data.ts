export async function fetchEventData(uuid: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3001/events/${uuid}`)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}