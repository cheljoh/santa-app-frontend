'use client'
import { useState } from 'react'

export default function Home() {
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

  function handleSubmit(event: any) {
    event.preventDefault()
    postData("http://localhost:3001/event/new", formData).then((data) => {
      if (data.ok) {
        console.log(data.json())
        setShowCreatedEvent(true)
      } else {
        console.log(data.statusText);
      }
    });
  }

  async function postData(url = "", data = {}) {
    console.log(JSON.stringify({name:'test'}))
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
