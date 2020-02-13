import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const ws = new W3CWebSocket("ws://localhost:3000", 'echo-protocol');

const ShhComm=()=> {
  const [commend, setCommend] = useState('')
  const [commendList, setCommendList] = useState([])

  useEffect(()=>{
    ws.onmessage = msg =>{
      setCommendList((currentState)=> ([...currentState,JSON.parse(msg.data)]))
    };
  },[]);

  const onSend = ()=>{
    let data = {method: 'command', command: commend};
      ws.send(JSON.stringify(data));
      setCommend('')
  }

  console.log('commendList', commendList)

  return (
    <div className="App">
      {/* <Form inline>
      <FormGroup>
        <Label for="exampleEmail" className="mr-sm-2">Enter your command</Label>
        <Input type="email" name="email" id="exampleEmail" value={commend} onChange={(e)=> setCommend(e.target.value)} placeholder="with a placeholder" />
      </FormGroup>
      <Button onClick={onSend}>Submit</Button>
      </Form>
      {commendList.map((list, i)=>{
        return <p key={i}>{list.data}</p>
      })} */}
      <div class="terminal">
      {commendList.map((list, i)=>{
            return <div id="history" style={{textAlign: 'left'}} key={i}>{list.data}</div>
      })}
  <div class="line">
    <span id="path">&nbsp;>&nbsp;</span>
    <input type="text"
       value={commend}
       onChange={(e)=> setCommend(e.target.value)}
       placeholder="Enter your command"
       onKeyPress={event => {
            if (event.key === 'Enter') {
              onSend()
            }
          }}  
        />
    </div>
  </div>
  </div>
  );
}

export default ShhComm;
