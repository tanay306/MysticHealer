import React, { useState, useEffect, useContext } from "react";

import styled from "styled-components";

import api from 'utils/api';

import { useHistory } from 'react-router-dom';
import {GlobalContext} from '../../GlobalContext';
import { Button } from "@material-ui/core";

const Reviews = () => {
    const history = useHistory();


    const { user } = useContext(GlobalContext);
    const [userData, setUserData] = user;

    const [ phase1, setPhase1 ] = useState(0);
    const [ phase2, setPhase2 ] = useState(0);
    const [ phase3, setPhase3 ] = useState(0);

    if(userData.role === 'doctor'){
        history.push('/user/dashboard'); 
    }

    const apiData = () => {
        setTimeout(() => {
            setPhase1(1);
        }, 4000);

        setTimeout(() => {
            setPhase2(1);
        }, 8000);
    };

    const [age, setAge] = useState('18');

    const [choice, setChoice] = useState('');

    const handleChangeChoice = (event) => {
        setChoice(event.target.value);
    };

    const formSubmitHandler = () => {
        setPhase3(1);
        setPhase2(0);
        setTimeout(() => {
            history.push('/user/healers');
        }, 4000);
    };

    return(
        <div>
            <div>
                {phase1 === 0 && (<StyledFileInput
                    type="file"
                    placeholder="Upload File"
                    variant="outlined"
                    onChange={apiData}
                    />)}
            </div>
            <div>
                {phase1 === 1 && phase2 === 0 && phase3 === 0 && (<div>xxx</div>)}
            </div>
            <div>
                {phase2 === 1 && (<div>
                    <div>
                        <Container>
                            <Label htmlFor="textInput">Age:</Label>
                            <Input
                                id="textInput"
                                type="text"
                                placeholder="18"
                                value={age}
                                onChange={e => setAge(e.target.value)}
                            />
                        </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Marital Status:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">Single</Option>
                            <Option value="option2">Divorced</Option>
                            <Option value="option3">Widowed</Option>
                            <Option value="option3">Married</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Education:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">High School</Option>
                            <Option value="option2">Bachelors</Option>
                            <Option value="option3">Masters</Option>
                            <Option value="option3">PhD</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Children:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">0</Option>
                            <Option value="option2">1</Option>
                            <Option value="option3">2</Option>
                            <Option value="option3">3+</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Smoking:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">Yes</Option>
                            <Option value="option2">No</Option>
                            <Option value="option3">Occasional</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Physical Activity:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">Sedantary</Option>
                            <Option value="option2">Moderate</Option>
                            <Option value="option3">Active</Option>
                            <Option value="option3">Highly Active</Option>
                        </Select>
                    </Container>
                    </div>

                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Employment:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">Full Time</Option>
                            <Option value="option2">Part Time</Option>
                            <Option value="option3">Self Employed</Option>
                            <Option value="option3">Unemployed</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Income:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">$0 - $30k</Option>
                            <Option value="option2">$30k - $60k</Option>
                            <Option value="option3">$60k+</Option>
                            <Option value="option3">Prefer Not to say</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Alchohol:</Label>
                        <Select id="selectInput" value={choice} onChange={handleChangeChoice}>
                            <Option value="">-- Select an option --</Option>
                            <Option value="Single">None</Option>
                            <Option value="option2">Low</Option>
                            <Option value="option3">Medium</Option>
                            <Option value="option3">High</Option>
                        </Select>
                    </Container>
                    </div>
                    <Button onClick={formSubmitHandler}>Submit</Button>
                </div>)}
                <div>
                    {phase3 === 1 && (<div>aaa</div>)}
                </div>
            </div>
        </div>
    );
};

export default Reviews;

const StyledFileInput = styled.input`
  border-radius: 10px;
  padding: 12px;
  width: 100%;
  font-family: calibri;
  width: 200px;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border: 1px dashed #BBB;
  text-align: center !important;
  background-color: #DDD;
  cursor: pointer;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 2px solid #6c5ce7;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #5944b3;
    outline: none;
  }
`;

// Optional styled label for better UX
const Label = styled.label`
  font-size: 14px;
  color: #444;
  margin-bottom: 8px;
  display: block;
`;

const Container = styled.div`
  margin: 20px;
`;

const Select = styled.select`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 2px solid #6c5ce7;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;
  color: #333;
  transition: border-color 0.2s ease;
  appearance: none;

  &:focus {
    border-color: #5944b3;
    outline: none;
  }
`;

const Option = styled.option``;