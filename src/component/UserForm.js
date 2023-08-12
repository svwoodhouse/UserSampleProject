import { useState } from 'react'
import styles from './UserForm.module.css'
import Card from './Card'
import Button from './Button'
import ErrorModule from './ErrorModal'
const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState(0)
    const [error, setError] = useState()

    const clickHandler = (event) => {
        event.preventDefault()
        if(userName.trim().length === 0 || userAge.trim().length === 0)
        {
            setError({title: 'Invalid', message: 'Please enter a valid name and age (non-empty values).'})
            return
        }
        props.showUserData(userName, userAge, Math.random(0, 100))
        setUserAge(0)
        setUserName('')
    }
    
    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={clickHandler}>
                    <div>
                        <label>Username</label>
                        <input type="text" id="username" name="username" value={userName} onChange={(event)=> {setUserName(event.target.value)}}></input>
                    </div>
                    <div>
                        <label>Age (Years)</label>
                        <input type="text" id="years" name="years" value={userAge} onChange={(event)=> {setUserAge(event.target.value)}}></input>
                    </div>
                        <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserForm