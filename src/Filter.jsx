import { useState } from "react"


export default function Filter() {
    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState(0)

    const handleChange = (event) => {
        const {name, value, type} = event.target

        if (type === "text") {
            setUserName(value)
        } else if (type === 'number') {
            setUserAge(value)
        }
    }

    const handleFilter = () => {
        
    }

    const handleReset = () => {
        setUserName('')
        setUserAge(0)
    }

    return (
        <div>
            <label htmlFor="">Name: <input type="text" name="userName" value={userName} onChange={handleChange}/></label><br />
            <label htmlFor="">Age: <input type="number" name="userAge" value={userAge} onChange={handleChange}/></label><br />
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
        
        
    )
}