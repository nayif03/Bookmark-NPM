import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import axios from 'axios'
export default class Form extends Component {

    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Btns} />
                    <Route exact path="/auth/register" render={() => (<><Btns /></>)} />
                    <Route exact path="/auth/login" render={() => (<><div>you've registered!</div><Btns /></>)} />
                    <Route exact path="/api/bookmarks" render={() => (<>sjdjs</>)} />
                </Switch>
            </BrowserRouter>

        );
    }
}

class Btns extends React.Component {
    constructor(props) {

        

        super(props);

        this.state = {
            username: "",
            password: "",
            data: []
        };



        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this)
    }
    handleChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
        console.log(this.state.username,this.state.password)
    }


    login(e) {
       
        fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                "loginData": {
                    "username": this.state.username,
                    "password": this.state.password
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ data: data }))
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
              });
    }


    register() {
        fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                "registerData": {
                    "username": this.state.username,
                    "password": this.state.password
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    retrieve() {
        console.log(this.state.data)
        fetch('/api/bookmarks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': this.state.data.token
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    render() {
        return (
            <>
                <FormUser onChangeUsername={(e)=> this.handleChangeUsername(e)} onChangePassword={(e)=> this.handleChangePassword(e)} username={this.state.username} password={this.state.password} />
                <Link to="/api/bookmarks" >
                    <button type="submit" id="login" onClick={(e)=>{this.login(e)}} >Login</button>
                </Link>

                <Link to="/auth/login">
                    <button type="submit" id="signup" onClick={this.register}>Sign up</button>
                </Link>



            </>
        )
    }
}

class FormUser extends React.Component {

    constructor(props) {
        super(props)
    }






    edit() {
        fetch('/api/bookmarks/5ce401549f5cd095775478e0', {
            method: 'PUT',
            body: JSON.stringify(
                {
                    "shortDescription": "new bookmark - edited",
                    "url": "http://theinternet.web"
                }
            ),
            headers: {
                'Content-Type': 'application/json',
                'token': this.state.data.token
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (

            <form action="#">
                <label className="username" htmlFor="username">Username: </label>
                <input type="text" id="username" value={this.props.username} onChange={this.props.onChangeUsername} />

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" value={this.props.password} onChange={this.props.onChangePassword} />

            </form>
        )
    }

}

