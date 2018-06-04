import React, { Component} from 'react';
import {connect} from "react-redux";
import {Image,Segment,Button,Header} from 'semantic-ui-react';
import getImageName from "../Images/ImageManager";
import {answerQuestions} from '../Data/GameAPIs';
import {updateUser} from "../actions/users";
import {updateQuestions} from "../actions/questions";
import {Redirect} from 'react-router-dom';
class QuestionPage extends Component {

    calculatePeopleAnswers = (question,answer) => {
        const totalPeopleAnswers = question.optionOne.votes.length + question.optionTwo.votes.length;
        const numberOfPeopleAnswers = question[answer].votes.length;

        return (numberOfPeopleAnswers*100)/totalPeopleAnswers;
    };

    onAnswerClick = (question,answer,currentAnswer) => {
        if(currentAnswer === undefined)
        {
            answerQuestions(this.props.User.id,question.id,answer).then(({users,questions}) => {
                this.props.dispatch(updateUser(users));
                this.props.dispatch(updateQuestions(questions));
            });
        }
    };

    render() {
        const {Questions,User,isLogin} = this.props;
        if(isLogin === null)
        {
            return <Redirect to={'/login'}/>
        }
        const questionInfo = Questions.find((question) => question.id === this.props.match.params.id.toString());

        if(questionInfo === undefined)
        {
            return (
                <div>
                    <Header as={'h1'}>ERROR 404 Question not found!</Header>
                </div>
            )
        }else
        {
            const isAnswer = User.answers[this.props.match.params.id];
            return(
                <div>
                    <Image src={getImageName(User.avatarURL)} size='medium' circular centered/>
                    <Segment attached='top' textAlign='center' size='massive'>Would You Rather ?</Segment>
                    <Segment.Group horizontal attached='bottom'>
                        <Segment textAlign='center' size='large' color={isAnswer === 'optionOne' ? 'green' : null}>
                            <Button fluid onClick={() => this.onAnswerClick(questionInfo,'optionOne',isAnswer)}>{questionInfo.optionOne.text}</Button>
                        </Segment>
                        <Segment textAlign='center' size='large' color={isAnswer === 'optionTwo' ? 'green' : null}>
                            <Button fluid onClick={() => this.onAnswerClick(questionInfo,'optionTwo',isAnswer)}>{questionInfo.optionTwo.text}</Button>
                        </Segment>
                    </Segment.Group>
                    {isAnswer === undefined ? null :
                        <Segment.Group horizontal attached='bottom'>
                            {
                                isAnswer === 'optionOne' ? <Segment textAlign='center' size='large'>
                                    <Segment attached='top'>{`# of People Choose This Answer : ${questionInfo.optionOne.votes.length}`}</Segment>
                                    <Segment attached='bottom'>{`Percent of People Choose This Answer : ${this.calculatePeopleAnswers(questionInfo,isAnswer)}`}</Segment>
                                </Segment> : null
                            }
                            {
                                isAnswer === 'optionTwo' ? <Segment textAlign='center' size='large'>
                                    <Segment attached='top'>{`# of People Choose This Answer : ${questionInfo.optionTwo.votes.length}`}</Segment>
                                    <Segment attached='bottom'>{`Percent of People Choose This Answer : ${this.calculatePeopleAnswers(questionInfo,isAnswer)}`}</Segment>
                                </Segment> : null
                            }
                        </Segment.Group>
                    }
                </div>
            );
        }

    }
}

function mapStateToProps({questionData,userData}) {

    return {
        isLogin: userData.currentUser.id,
        User: userData.currentUser,
        Users: userData.users,
        Questions : questionData.questions,
    }
}

export default connect(mapStateToProps)(QuestionPage);