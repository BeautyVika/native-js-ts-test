import React, {ChangeEvent, MouseEvent} from 'react'

window.setTimeout(()=>{}, 1000)

export const User =() => {
    const deleteUser= (event: MouseEvent<HTMLButtonElement>)=> {
        alert(event.currentTarget.name)
    }
    const onNameChanged = () =>{
        console.log('name changed')
    }
    const focusLostHandler = () =>{
        alert('return and added your name')
    }
    const onAgeChanged =(event: ChangeEvent<HTMLInputElement>)=>{
        console.log('age changed' + event.currentTarget.value)
    }
    return <div> <textarea
                       onBlur={focusLostHandler}
                       onChange={onNameChanged}>Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name='delete' onClick={deleteUser}>delete</button>
        <button name='save' onClick={deleteUser}>save</button>
    </div>
}