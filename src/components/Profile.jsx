import React from 'react'
import Buttons from "./Buttons"
import Information from './Information'
import "./Profile.css"

const Profile = (props) => {
    const profile=props.profile;
    return (
    <div className='contenedor'>
        <img className='avatar' src={profile.avatar} alt="" />
        <Information name={profile.name} info={profile.info}/>
        <Buttons/>
    </div>
  )
}

export default Profile