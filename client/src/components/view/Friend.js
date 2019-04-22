import React, { Component, Fragment} from 'react'
import './styles.css'
import Axios from 'axios';
import UpdateForm from './updateForm'

class Friend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      updateForm: false,
      name: '',
      bio: '',
      isAdding: false
    }
  }
  handleChange = e=> {
    this.setState({[e.target.name]: e.target.value})
  }
  toggle =()=>{
    this.setState({updateForm: !this.state.updateForm})
  }
  render () {
    const { friend, deleteUser } = this.props
    const newFriend = {
      name: friend.name,
      bio: friend.bio,
      id: friend.id
    }
    return (
      <div className='friend'>
          {!this.state.updateForm && (<div className='delete'>
            <p
              onClick={
                () => {
                  deleteUser(friend.id)
                }
              }
            >X</p>
          </div>)}
          {!this.state.updateForm ? (
            <Fragment>
              <ul>
                <li>{friend.name}</li>
              </ul>
              <p className='age'>{friend.bio}</p>
            </Fragment>
              )
            :
            <UpdateForm  user={newFriend} toggle={this.toggle}/>
        }
          <div className='update'>
            {!this.state.updateForm && (<button onClick={
              () => {
                if (!this.state.updateForm) {
                  this.setState({ updateForm: !this.state.updateForm })
                }
                if (this.state.updateForm) {
                  this.updateUser(friend.id)
                }
              }
            }>Update</button>)}
          </div>
      </div>
    )
  }
}


export default Friend
