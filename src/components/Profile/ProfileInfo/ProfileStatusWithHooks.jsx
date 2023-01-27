import React, { useEffect, useState } from 'react'
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) =>{
    //useState первым элементом массива передает стейт, а вторым ф-ию которая может его менять
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    //выполнится когда изменится props.status
    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }
        return(
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
                }
                { editMode &&
                    <div>
                        <input onChange={onStatusChange}
                               autoFocus={true}
                               value={status}
                               onBlur={deactivateEditMode}/>
                    </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks