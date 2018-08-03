import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, Form, Item, Input, Button } from 'native-base';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ucapanSukses: 'Belum',
      emailAddress: '',
      emailSubject: '',
      emailMessages: ''
    }
    
  }
  
  klikPost(){
    console.log(this.state.emailAddress);
    console.log(this.state.emailSubject);
    console.log(this.state.emailMessages);

    var url = 'http://192.168.1.36:3210/data';
    axios.post(url, {
      addressEmail: this.state.emailAddress,
      subjectEmail: this.state.emailSubject,
      messagestEmail: this.state.emailMessages
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(this.addressEmail);

    this.state.emailAddress = '';
    this.state.emailMessages = '';
    this.state.emailSubject = '';
    
  };

  render() {
    return(
      <Container>
        <Header>
          <Text>React Native & Nodemailer</Text>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="To (Email Recipient)" onChangeText={(input) => this.setState({emailAddress:input})}/>
            </Item>
            <Item>
              <Input placeholder="Email Subject" onChangeText={(input) => this.setState({emailSubject:input})}/>
            </Item>
            <Item>
              <Input placeholder="Messages" onChangeText={(input) => this.setState({emailMessages:input})}/>
            </Item>
          </Form>

          <Button block warning onPress={this.klikPost.bind(this)}>
            <Text>SEND EMAIL</Text>
            </Button>
        </Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App;
