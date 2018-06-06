import React, {Component} from 'react'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {Button,Segment,Form,Input} from 'semantic-ui-react';
import {createNewQuestions} from '../Data/GameAPIs';
import {updateQuestions} from "../actions/questions";
import {updateUser} from "../actions/users";
class CreateQuestionPage extends Component {
    state = {
        OptionA : '',
        OptionB : '',
        isQuestionCreate : false,
    };
    onQuestionCreate = () => {
        if (this.state.OptionA === '' || this.state.OptionA === ' '){
            alert("Please Enter Option A");
        }
        else if (this.state.OptionB === '' || this.state.OptionB === ' '){
            alert("Please Enter Option B");
        }else {
            createNewQuestions(this.state.OptionA,this.state.OptionB,this.props.UserData.currentUser).then(({users,questions}) => {
                this.props.dispatch(updateUser(users));
                this.props.dispatch(updateQuestions(questions));
                this.setState({isQuestionCreate:true});
            });
        }

    };
    onAnswerChange = (e, { name, value }) =>
        this.setState({ [name]: value });

    render()
    {
        const{isQuestionCreate,isLogin}=this.state;
        if(isLogin === null)
        {
            return <Redirect to={'/login'}/>
        }
        if(isQuestionCreate)
        {
            return <Redirect to={'/'}/>
        }

        return (
            <div>
                <Segment attached='top' textAlign='center' size='massive'>Would You Rather ?</Segment>
                <Form onSubmit={this.onQuestionCreate}>
                    <Form.Field>
                        <label>Option A</label>
                        <Input name={'OptionA'} onChange={this.onAnswerChange} placeholder='Answer A' />
                    </Form.Field>
                    <Form.Field>
                        <label>Option A</label>
                        <Input name={'OptionB'} onChange={this.onAnswerChange} placeholder='Answer B' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )

    }
}


function mapStateToProps({userData}) {
    return{
        isLogin: userData.currentUser.id,
        UserData : userData
    }
}

export default connect(mapStateToProps)(CreateQuestionPage);