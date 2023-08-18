import { useState, useRef } from 'react'
import styles from './UserForm.module.css'
import Card from './Card'
import Button from './Button'
import ErrorModal from './ErrorModal'
const UserForm = (props) => {
    // We can use refs to get the value from the input instead of storing it in the state
    // This is an example of uncontrolled components because the internal state is not controlled
    // by react. 
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    //This is an example of a controlled component since we are using React to manage the internal state
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
        // props.showUserData(nameInputRef.current.value, ageInputRef.current.value, Math.random(0, 100))
        // To reset the values entered by the user we would do: Don't so this often though
        // nameInputRef.current.value = '';
        // ageInputRef.curent.value = '';
        props.showUserData(userName, userAge, Math.random(0, 100))
        setUserAge(0)
        setUserName('')
    }
    
    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={clickHandler}>
                    <div>
                        <label>Username</label>
                        <input ref={nameInputRef} type="text" id="username" name="username" value={userName} onChange={(event)=> {return(setUserName(event.target.value), console.log(nameInputRef))}}></input>
                    </div>
                    <div>
                        <label>Age (Years)</label>
                         {/*If using refs we wont need the value and onChange properties */}
                        <input ref={ageInputRef} type="text" id="years" name="years" value={userAge} onChange={(event)=> {setUserAge(event.target.value)}}></input>
                    </div>
                        <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserForm