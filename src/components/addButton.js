import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { Switch, Route } from 'react-router'


export default class AddFunc extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AddBtn} />
                <Route path="/addBM" component={AddForm} />
            </Switch>
            </BrowserRouter>
        )
    }
}

const AddBtn = props => {
    return (
        <div>
            <Link to="/addBM"><i className="fas fa-plus-circle" ></i></Link>
            
        </div>
    )
}

const AddForm = props => {
    return (
        <div className="addForm">
            <form>
                <div className="form-controls">
                    <label className="label"> <h1> Title :</h1></label>
                    <input type="text" placeholder="add your bookmark's title .." />
                </div>
                <div className="form-controls">
                    <label className="label"><h1>The Link :</h1></label>
                    <input type="text" placeholder="put the link of your bookmark .." />
                </div>
                <div>
                    <button type="button" className="addBtn" >Submit</button>
                </div>
            </form>
        </div>
    )
}