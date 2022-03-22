import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
import firebase from "firebase/compat/app";
import "firebase/compat/database";



class Home extends React.Component {
    constructor(props) {

        super(props);

        this.state = { MessageList: [] }
    }

    componentDidMount() {



        firebase.database().ref("mlx90614/2-push").on("value", snapshot => {
            let MessageList = [];
            snapshot.forEach(snap => {

                MessageList.push(snap.val());
                console.log(snap.val());
            });
            this.setState({ MessageList: MessageList });
        });


    }

    render() {
        return (


        <div className="home">
            <div class="container">
                <h1 className="text-center mt-5">Patient Health Parameters</h1>



                <Col style={{ marginTop: 30 }}>
                    <Card>

                        <Card.Body>
                            <Card.Title style={{ marginTop: 5 }}>Body Temperature</Card.Title>
                            <Card.Text>
                                Normal body Temperature of a person : 36.1 C to 37.2 C
                            </Card.Text>
                                <Card.Text>
                                    Patient body temperature : hey
                                    <tbody>
                                        {this.state.MessageList.map(data => {

                                            return (
                                                <tr>
                                                    <td >{data.ambient}{' '}</td>
                                                   
                                                    

                                                </tr>
                                            );
                                        })}
                                    </tbody>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>



            </div>
        </div>
  );
    }
}

export default Home;
