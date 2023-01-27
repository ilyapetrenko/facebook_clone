import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return(<div>
            {/*<div>*/}
            {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" alt=""/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
    </div>)
}

export default ProfileInfo