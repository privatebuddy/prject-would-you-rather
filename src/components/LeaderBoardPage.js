import React, {Component} from 'react'
import {connect} from "react-redux";
import {Segment,Image,Card} from 'semantic-ui-react';
import getImageName from "../Images/ImageManager";
import {Redirect} from 'react-router-dom';
class LeaderBoardPage extends Component {

    render()
    {
        const {UserData,isLogin} = this.props;
        if(isLogin === null)
        {
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Segment attached='top' textAlign='center' size='massive'>Leader Board</Segment>
                <Card.Group>
                    {
                        UserData.map((user,index) =>
                            <Card fluid key={index}>
                            <Card.Content>
                                <Image floated='left' size='tiny' src={getImageName(user.UserData.avatarURL)} />
                                <Card.Header>{`${user.UserData.name}`}
                                    <Card.Description textAlign='right'>{`Total Score : ${user.TotalScore}`}</Card.Description>
                                    <Card.Description textAlign='right'>{`Questions Asked : ${user.QuestionsAsked}`}</Card.Description>
                                    <Card.Description textAlign='right'>{`Questions Answers : ${user.AnswerQuestions}`}</Card.Description></Card.Header>

                            </Card.Content>
                        </Card>)
                    }
                </Card.Group>
            </div>
        )

    }
}

function mapStateToProps({userData}) {
    const generateUserScoreStat = userData.users.map((user) => {
        return{
            UserData : user,
            AnswerQuestions: Object.keys(user.answers).length,
            QuestionsAsked : user.questions.length,
            TotalScore : Object.keys(user.answers).length+user.questions.length
        }
    });

    const sortLeader = generateUserScoreStat.slice(0);
    sortLeader.sort((userA,userB) => {
        return userB.TotalScore - userA.TotalScore;
    });

    console.log(sortLeader);
    return{
        isLogin: userData.currentUser.id,
        UserData : sortLeader
    }
}

export default connect(mapStateToProps)(LeaderBoardPage);