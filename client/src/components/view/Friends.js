import React from 'react'
import './styles.css'
import Friend from './Friend'

const Friends = props => {
  return (
    <div className='friends-list-container'>
      <h1>Users</h1>
      <div className='friends-container'>
        {
          props.friends.length > 0 && props.friends.map((friend, i) => {
            return <Friend key={i} friend={friend} deleteUser={props.deleteUser} />
          })
        }
      </div>
    </div>
  )
}

export default Friends
