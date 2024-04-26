import { useEffect, useState } from "react"

export default function DateTime() {
  const [currentDate, setCurrentDate] = useState(getDate())
  const [currentTime, setCurrentTime] = useState(new Date())

  let hour = currentTime.getHours()
  let min = currentTime.getMinutes()
  let sec = currentTime.getSeconds()

  let time = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${
    sec < 10 ? `0${sec}` : sec
  }`

  function getDate() {
    let today = new Date()

    let day = today.getDate()
    // let month = today.getMonth()
    let month = today
      .toLocaleString("default", { month: "long" })
      .substring(0, 3)
    let year = today.getFullYear()

    // For ordinal number
    const nthNumber = (number) => {
      return number > 0
        ? ["th", "st", "nd", "rd"][
            (number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10
          ]
        : ""
    }
    return `${day}${nthNumber(day)} ${month}, ${year}`
  }

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000)
  })

  useEffect(() => {
    setInterval(() => setCurrentDate(getDate()), 360000)
  })

  return (
    <div id="dateTimeContainer">
      <div id="date">{currentDate}</div>
      <div id="time">{time}</div>
    </div>
  )
}
