import React, { Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import {createUser} from '../actions/users';
class CreateUserPage extends Component {

    state = {
        name :'',
        gender : '',
        isCreate: false
    };

    handleSubmit = () =>{
        this.props.dispatch(createUser(this.state.name,this.state.gender));
        this.setState({isCreate:true})
    };

    OnNameChange = (e) =>{
        this.setState({name:e.target.value});
    };

    OnGenderChange = (e, { name, value }) => this.setState({ [name]: value });

    render() {
        const {isCreate} = this.state;
        const genderOptions = [
            { key: 'm', text: 'Male', value: 'male'},
            { key: 'f', text: 'Female', value: 'female'},
        ];

        if(isCreate)
        {
            return <Redirect to={'/login'}/>
        }

        return(
            <div className={'login_container'}>
                <Form  widths='equal' onSubmit={this.handleSubmit}>
                    <Form.Input fluid label='First name' placeholder='First name' value={this.state.name} onChange={this.OnNameChange}/>
                    <Form.Select fluid label='Gender' options={genderOptions} placeholder='Gender' name={'gender'} onChange={this.OnGenderChange}/>
                    <Form.Button>Create</Form.Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps({questionData,userData}) {
    return {
        isLogin: userData.currentUser.id,
    }
}

export default connect(mapStateToProps)(CreateUserPage);