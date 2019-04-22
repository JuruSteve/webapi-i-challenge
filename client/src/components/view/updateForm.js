import React, { Component } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import './styles.css'

class UpdateForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            bio:'',
            isAdding: false
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    updateUser=(e)=>{
        e.preventDefault()
        const { Id } = this.props.user.id
        const newUser = {
            name: this.state.name,
            bio: this.state.bio
        }
        this.setState({isAdding: !this.state.isAdding})
        axios.put(`http://localhost:4003/api/users/${this.props.user.id}`, newUser)
        .then(res=>{
          console.log(res.data)
          this.props.toggle()
        })
        .catch(e=>{
            console.log(e)
        })
    }
  render () {
    const { name, bio } = this.props.user

    return (
          <form onSubmit={this.updateUser} className='add-friend-form'>
        <fieldset>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder={name} value={this.state.name} name='name' onChange={this.handleChange} />
        </fieldset>
        <fieldset>
          <label htmlFor='bio'>Bio</label>
          <input type='text' placeholder={bio} value={this.state.bio} name='bio' onChange={this.handleChange} />
          <button type='submit' id='add-friend'>{this.state.isAdding ? <Loader type='ThreeDots' color='#1f2a38' height='12' width='26' /> : 'Update'}</button>
        </fieldset>
      </form>
    ) 
}
}
export default UpdateForm
