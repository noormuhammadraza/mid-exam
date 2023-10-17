import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './Table'
import Filter from './Filter'
import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState(0)

  const handleChange = (event) => {
    const { name, value, type } = event.target

    if (type === "text") {
      setUserName(value)
    } else if (type === 'number') {
      setUserAge(value)
    }
  }

  const handleFilter = () => {
    const newArr = sampleData.filter((item) => {
        item.name === userName
    })
    showFilteredData(newArr)
  }

  function showFilteredData(data) {
    const filteredListItems = data.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.city}</td>
        <td>{item.occupation}</td>
      </tr>
    ))

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredListItems}
        </tbody>
    </table>
    )
  }

  const handleReset = () => {
    setUserName('')
    setUserAge(0)
  }





  const sampleData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
    { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
    { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
    { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
    { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
    { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
    { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
    { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
  ];

  const listItems = sampleData.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>{item.occupation}</td>
    </tr>
  ))

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
      <div>
        <label htmlFor="">Name: <input type="text" name="userName" value={userName} onChange={handleChange} /></label><br />
        <label htmlFor="">Age: <input type="number" name="userAge" value={userAge} onChange={handleChange} /></label><br />
        <label htmlFor="">City:
          <select name="userCity" id="">
            <option value="">New York</option>
            <option value="">San Francisco</option>
            <option value="">Chicago</option>
            <option value="">Los Angeles</option>
            <option value="">Houston</option>
            <option value="">Miami</option>
            <option value="">Seattle</option>
            <option value="">Boston</option>
            <option value="">Denver</option>
            <option value="">Atlanta</option>
          </select>
        </label><br />
        <label htmlFor="">Occupation:
          <select name="userCity" id="">
            <option value="">Engineer</option>
            <option value="">Designer</option>
            <option value="">Accountant</option>
            <option value="">Teacher</option>
            <option value="">Doctor</option>
            <option value="">Artist</option>
            <option value="">Software Engineer</option>
            <option value="">Lawyer</option>
            <option value="">Marketing Manager</option>
            <option value="">Entrepreneur</option>
          </select>
        </label><br />
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
