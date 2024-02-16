'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [showCreatedEvent, setShowCreatedEvent] = useState(false)
  const [formData, setFormData] = useState
    <
      {
        name: string;
      }
    >(
      {
        name: "",
      }
  )
  

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  async function handleSubmit(event: any) {
    event.preventDefault()
    try {
      const response: Response = await postData("http://localhost:3001/events/new", formData)
      const json = await response.json()
      router.push(`/events/${json.uuid}`)
    } catch (error) {
        console.log(error)
    }
  }

  async function postData(url = "", data = {}) {
    return await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <h1>Make A Santa Party Event!</h1>
      <form onSubmit={handleSubmit}>
        <label>Exchange Name</label>
        <input
          type="text"
          placeholder="Exchange Name"
          data-test="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>

        {showCreatedEvent && "Event saved!"}
      </form>
   </>
  )
}
