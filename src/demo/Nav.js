import React, { Component } from 'react'
import { login } from '../api/api'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    const savedUser = localStorage.getItem('user')
    this.state = {
      user: JSON.parse(savedUser),
      loading: false,
      showForm: false,
      username: ''
    }

    this.inputRef = React.createRef()

    this.handleLogin = this.handleLogin.bind(this)
    this.enableForm = this.enableForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  enableForm() {
    this.setState({ showForm: true })
    setTimeout(() => {
      this.inputRef.current.focus()
    }, 100)
  }

  async handleLogin(e) {
    e.preventDefault()
    this.setState({ loading: true, showForm: false })
    try {
      const user = await login(this.state.username, 2000)
      this.setState({ user })
      localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
      console.log('---------- error ----------->', error)
      this.setState({ user: null })
    } finally {
      this.setState({ loading: false })
    }
  }

  handleChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    const { user, loading, showForm, username } = this.state
    return user ? (
      <nav>
        Authenticated Nav <span>{user.name}</span>
      </nav>
    ) : (
      <nav>
        Not Authenticated Nav
        <span>
          {!showForm && (
            <button onClick={this.enableForm}>
              {loading ? <>Loading...</> : <>Log in</>}
            </button>
          )}

          <form
            onSubmit={this.handleLogin}
            className={showForm ? 'show' : 'hide'}
          >
            <label>
              Username:
              <input
                ref={this.inputRef}
                type="text"
                onChange={this.handleChange}
                value={username}
              />
            </label>
            <button type="submit">go</button>
          </form>
        </span>
      </nav>
    )
  }
}
