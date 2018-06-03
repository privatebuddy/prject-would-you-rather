import React, { Component} from 'react';
import {connect} from "react-redux";
import {Card} from 'semantic-ui-react';
class QuestionCard extends Component {

    render() {
        const {QuestionInfo,Index,Answer,CreateData} = this.props;

        return(
            <Card fluid color={Answer.StatusColor}>
                <Card.Content>
                    <Card.Header>{`Question ${Index}`}</Card.Header>
                    <Card.Meta>{QuestionInfo.timestamp}</Card.Meta>
                    <Card.Description>{`Create Date : ${CreateData}`}</Card.Description>
                    <Card.Description>{`Answer : ${Answer.Answer}`}</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

function getStatusInformation(answer,questionInfo)
{
    if (answer !== undefined)
    {
        return {
            Answer:questionInfo[answer].text,
            StatusColor: 'green'
        }
    }else {
        return {
            Answer:'None',
            StatusColor: 'black'
        }
    }
}

function mapStateToProps({questionData,userData},{id,index}) {

    const questionInfo = questionData.questions.find((question) => question.id === id);
    const date = new Date(questionInfo.timestamp);
    const answer = getStatusInformation(userData.currentUser.answers[id],questionInfo);
    return {
        QuestionInfo : questionInfo,
        Index : index,
        Answer:answer,
        CreateData:date.toLocaleString()
    }
}

export default connect(mapStateToProps)(QuestionCard);