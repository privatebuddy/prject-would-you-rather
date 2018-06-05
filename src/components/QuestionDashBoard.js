import React, { Component} from 'react';
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom';
import {Card,Header,Menu,Dropdown,Button,Grid} from 'semantic-ui-react';
import QuestionCard from './QuestionCard';
import {applyFilterToQuestion} from '../actions/gamestate'
class QuestionDashBoard extends Component {

    onApplyFilter = (e, { value }) => this.props.dispatch(applyFilterToQuestion(value));

    render() {
        const {isLogin,allQuestions} = this.props;

        if(isLogin === null)
        {
            return <Redirect to={'/login'}/>
        }

        const options = [
            { key: 1, text: 'Answered', value: 1 },
            { key: 2, text: 'Unanswered', value: 2 },
            { key: 3, text: 'Latest', value: 3 },
            { key: 4, text: 'Oldest', value: 4 },
        ];


        return(
            <div>
                <Menu>
                    <Menu.Item>
                        <Header as='h2' textAlign='center'>Dash Board</Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Button as={Link} to='/add'>Create New Question</Button>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Dropdown text='Filter' icon='filter' floating labeled button className='icon' options={options} onChange={this.onApplyFilter}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            {
                                allQuestions.Answer.length > 0 ? <Header as='h3' textAlign='center'>Answer</Header> : null
                            }
                            <Card.Group>
                                {
                                    allQuestions.Answer.length > 0 ? allQuestions.Answer.map((question,index) => <QuestionCard key={index} index={index+1} id={question.id}/>) : null
                                }
                            </Card.Group>
                        </Grid.Column>
                        <Grid.Column>
                            {
                                allQuestions.UnAnswer.length > 0 ? <Header as='h3' textAlign='center'>UnAnswer</Header> : null
                            }
                            <Card.Group>

                                {
                                    allQuestions.UnAnswer.length > 0 ? allQuestions.UnAnswer.map((question,index) => <QuestionCard key={index} index={index+1} id={question.id}/>) : null
                                }
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

function applyFilterQuestion(filterCode,questions,currentUser) {
    let sortQuestions = questions;
    switch (filterCode)
    {
        case 1:
            sortQuestions = questions.slice(0);
            sortQuestions.sort((questionA,questionB) => {
                return questionB.timestamp - questionA.timestamp;
            });

            if(currentUser.answers != null)
            {
                const answers = Object.keys(currentUser.answers).map(key => sortQuestions.find((question) => question.id === key));
                let unAnswerQuestions = [];
                for (let i = 0;i<sortQuestions.length;i++)
                {
                    const question = sortQuestions[i];
                    let isAlreadyAnswer = false;
                    for (let j = 0;j<answers.length;j++)
                    {
                        if(question.id === answers[j].id)
                        {
                            isAlreadyAnswer = true;
                        }
                    }

                    if(!isAlreadyAnswer)
                    {
                        unAnswerQuestions.push(question);
                    }
                }

                return {
                    Answer : answers,
                    UnAnswer : []
                }
            }else {
                return sortQuestions;
            }
        case 2:
            sortQuestions = questions.slice(0);
            sortQuestions.sort((questionA,questionB) => {
                return questionB.timestamp - questionA.timestamp;
            });

            if(currentUser.answers != null)
            {
                const answers = Object.keys(currentUser.answers).map(key => sortQuestions.find((question) => question.id === key));
                let unAnswerQuestions = [];
                for (let i = 0;i<sortQuestions.length;i++)
                {
                    const question = sortQuestions[i];
                    let isAlreadyAnswer = false;
                    for (let j = 0;j<answers.length;j++)
                    {
                        if(question.id === answers[j].id)
                        {
                            isAlreadyAnswer = true;
                        }
                    }

                    if(!isAlreadyAnswer)
                    {
                        unAnswerQuestions.push(question);
                    }
                }

                return {
                    Answer : [],
                    UnAnswer : unAnswerQuestions
                };
            }else {
                return sortQuestions;
            }
        case 3:
            sortQuestions = questions.slice(0);
            sortQuestions.sort((questionA,questionB) => {
                return questionB.timestamp - questionA.timestamp;
            });

            if(currentUser.answers != null)
            {
                const answers = Object.keys(currentUser.answers).map(key => sortQuestions.find((question) => question.id === key));
                let unAnswerQuestions = [];
                for (let i = 0;i<sortQuestions.length;i++)
                {
                    const question = sortQuestions[i];
                    let isAlreadyAnswer = false;
                    for (let j = 0;j<answers.length;j++)
                    {
                        if(question.id === answers[j].id)
                        {
                            isAlreadyAnswer = true;
                        }
                    }

                    if(!isAlreadyAnswer)
                    {
                        unAnswerQuestions.push(question);
                    }
                }

                return {
                    Answer : answers,
                    UnAnswer : unAnswerQuestions
                };
            }else {
                return sortQuestions;
            }
        case 4:
            sortQuestions = questions.slice(0);
            sortQuestions.sort((questionA,questionB) => {
                return questionA.timestamp - questionB.timestamp;
            });
            if(currentUser.answers != null)
            {
                const answers = Object.keys(currentUser.answers).map(key => sortQuestions.find((question) => question.id === key));
                let unAnswerQuestions = [];
                for (let i = 0;i<sortQuestions.length;i++)
                {
                    const question = sortQuestions[i];
                    let isAlreadyAnswer = false;
                    for (let j = 0;j<answers.length;j++)
                    {
                        if(question.id === answers[j].id)
                        {
                            isAlreadyAnswer = true;
                        }
                    }

                    if(!isAlreadyAnswer)
                    {
                        unAnswerQuestions.push(question);
                    }
                }

                return {
                    Answer : answers,
                    UnAnswer : unAnswerQuestions
                };
            }else {
                return sortQuestions;
            }
        default:
            return questions;
    }
}

function mapStateToProps({questionData,userData,gameData}) {
    const filterQuestion = applyFilterQuestion(gameData.dashBoardFilterBy,questionData.questions,userData.currentUser);
    return {
        isLogin: userData.currentUser.id,
        allQuestions : filterQuestion,

    }
}

export default connect(mapStateToProps)(QuestionDashBoard);