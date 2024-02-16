import { fetchEventData } from '@/app/lib/data'

export default async function Event({ params }: { params: {id: string }}) {
    const data = await fetchEventData(params.id)

    return (
        <>
            <h1>Event name: {data.name} </h1>
        </>
    )
}