import { useState } from 'react'
import styles from './UserForm.module.css'
const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState(0)

    const clickHandler = (event) => {
        event.preventDefault()
        props.showUserData(userName, userAge, Math.random(0, 100))
        setUserAge(0)
        setUserName('')
    }

    return (
        <form>
            <div className={styles.userInput}>
                <label>Username</label>
                <input type="text" id="username" name="username" onChange={(event)=> {setUserName(event.target.value)}}></input>
            </div>
            <div className={styles.userInput}>
                <label>Age (Years)</label>
                <input type="text" id="years" name="years" onChange={(event)=> {setUserAge(event.target.value)}}></input>
            </div>
                <button type="submit" className={styles.button} onClick={clickHandler}>Add User</button>
        </form>
    )
}

export default UserForm