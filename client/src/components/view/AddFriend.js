import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './styles.css'

class AddFriend extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      bio: '',
      isAdding: false
    }
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  addFriend = (e) => {
      e.preventDefault()
      const newUser = {
          name: `${this.state.name}`,
          bio: `${this.state.bio}`
      }
      this.setState({isAdding: !this.state.isAdding})
      axios.post('http://localhost:4003/api/users', newUser)
      .then(res=>{
          this.setState({isAdding: !this.state.isAdding})
          this.props.toggle()
      })
        .catch(e=>{
            console.log(e)
        })
    this.setState({name: '', bio: ''})
  }
  render () {
    return (
      <div className='friends-list-container'>
        <h1>Add a User</h1>
        <div className='friends-container'>
          <form onSubmit={this.addFriend} className="add-friend-form">
            <fieldset>
              <label htmlFor='name'>Name</label>
              <input type='text' value={this.state.name} name='name' onChange={this.handleChange} />
            </fieldset>
            <fieldset>
              <label htmlFor='bio'>Bio</label>
              <input type='text' value={this.state.bio} name='bio' onChange={this.handleChange} />
              <button type='submit' id="add-friend">{this.state.isAdding ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Add Friend'}</button>
            </fieldset>

          </form>
        </div>
      </div>
    )
  }
}

export default AddFriend
