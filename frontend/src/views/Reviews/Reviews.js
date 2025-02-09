import React, { useState, useEffect, useContext } from "react";

import styled from "styled-components";

import api from 'utils/api';

import { useHistory } from 'react-router-dom';
import {GlobalContext} from '../../GlobalContext';
import Button from "components/CustomButtons/Button.js";

const Reviews = () => {
    const history = useHistory();


    const { user } = useContext(GlobalContext);
    const [userData, setUserData] = user;

    const [ phase1, setPhase1 ] = useState(0);
    const [ phase2, setPhase2 ] = useState(0);
    const [ phase3, setPhase3 ] = useState(0);
    const [ phase4, setPhase4 ] = useState(0);
    const [ phase5, setPhase5 ] = useState(0);

    if(userData.role === 'doctor'){
        history.push('/user/dashboard'); 
    }

    const apiData = () => {
        setFile(true);
        setTimeout(() => {
            setPhase1(1);
        }, 4000);

        setTimeout(() => {
            setPhase2(1);
        }, 10000);
    };

    const [age, setAge] = useState('18');
    const [income, setIncome] = useState("0");
    const [alco, setAlco] = useState("0");

    const [choice, setChoice] = useState('');
    const [file, setFile] = useState(false);

    const [maritalStatus, setMaritalStatus] = useState("");
    const [education, setEducation] = useState("");
    const [children, setChildren] = useState("");
    const [smoking, setSmoking] = useState("");
    const [physicalActivity, setPhysicalActivity] = useState("");
    const [employment, setEmployment] = useState("");

    const handleChangeChoice = (event) => {
        setChoice(event.target.value);
    };

    const handleChangeChoiceIncome = (event) => {
        setIncome(event.target.value);
    };

    const handleChangeChoiceAlco = (event) => {
        setAlco(event.target.value);
    };

    const handleChangeMaritalStatus = (event) => {
        setMaritalStatus(event.target.value);
      };
    
      const handleChangeEducation = (event) => {
        setEducation(event.target.value);
      };
    
      const handleChangeChildren = (event) => {
        setChildren(event.target.value);
      };
    
      const handleChangeSmoking = (event) => {
        setSmoking(event.target.value);
      };
    
      const handleChangePhysicalActivity = (event) => {
        setPhysicalActivity(event.target.value);
      };
    
      const handleChangeEmployment = (event) => {
        setEmployment(event.target.value);
      };    


    const formSubmitHandler = () => {
        if (income === '3' && alco === '4') {
            setPhase3(1);
            setPhase2(0);

            setTimeout(() => {
                setPhase5(1);
            }, 5000);            
            
            setTimeout(() => {
                history.push('/user/dashboard');
            }, 10000);
        } else {
            setPhase3(1);
            setPhase2(0);

            setTimeout(() => {
                setPhase4(1);
            }, 5000);

            setTimeout(() => {
                history.push('/user/healers');
            }, 10000);
        }
    };

    return(
        <div style={{
            width: '100%', height: '70vh', display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"
        }}>
            <div>
                {phase1 === 0 && phase2 === 0 && phase3 === 0 && (<div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24 }}>Your wearable device can do much more!</div>
                    <FileUploadWrapper file={file}>
                        <HiddenFileInput type="file" id="fileInput" onChange={apiData}/>
                        <CustomLabel htmlFor="fileInput">Choose File</CustomLabel>
                    </FileUploadWrapper>
                </div>)}
            </div>
            <div>
                {phase1 === 1 && phase2 === 0 && phase3 === 0 && (<StyledAnimationText>
                    Your recent activity trends caught our attention. A few quick questions can help fine-tune things for you.
                </StyledAnimationText>)}
            </div>
            <div>
                {phase2 === 1 && (<><div style={{
                display: 'grid', gridTemplateColumns: "repeat(2, 300px)"
            }}> 
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
                        <Select id="selectInput" value={maritalStatus} onChange={handleChangeMaritalStatus}>
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
                        <Select id="selectInput" value={education} onChange={handleChangeEducation}>
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
                        <Select id="selectInput" value={children} onChange={handleChangeChildren}>
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
                        <Select id="selectInput" value={smoking} onChange={handleChangeSmoking}>
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
                        <Select id="selectInput" value={physicalActivity} onChange={handleChangePhysicalActivity}>
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
                        <Select id="selectInput" value={employment} onChange={handleChangeEmployment}>
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
                        <Select id="selectInput" value={income} onChange={handleChangeChoiceIncome}>
                            <Option value="0">-- Select an option --</Option>
                            <Option value="1">$0 - $30k</Option>
                            <Option value="2">$30k - $60k</Option>
                            <Option value="3">$60k+</Option>
                            <Option value="4">Prefer Not to say</Option>
                        </Select>
                    </Container>
                    </div>
                    <div>
                    <Container>
                        <Label htmlFor="selectInput">Alchohol:</Label>
                        <Select id="selectInput" value={alco} onChange={handleChangeChoiceAlco}>
                            <Option value="0">-- Select an option --</Option>
                            <Option value="1">None</Option>
                            <Option value="2">Low</Option>
                            <Option value="3">Medium</Option>
                            <Option value="4">High</Option>
                        </Select>
                    </Container>
                    </div>
                </div>
                <Button color="primary" onClick={formSubmitHandler} style={{ margin: '20px' }}>Submit</Button>
                </>
                )}
                <div>
                    {phase3 === 1 && phase4 === 0 && phase5 === 0 && (<StyledAnimationText>
                        Analyzing
                    </StyledAnimationText>)}
                </div>
                <div>
                    {phase5 === 1 && phase3 === 1 && (<StyledAnimationText>
                        You're on track! That was just a standard verification. Redirecting you to your dashboard.
                    </StyledAnimationText>)}
                </div>
                <div>
                    {phase4 === 1 && phase3 === 1 && (<div>
                        <StyledAnimationText>
                        This could be a good time to explore support options. Redirecting you to a resource where you can connect with someone.
                        </StyledAnimationText>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Reviews;

const FileUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
  border: 1px dashed #bbb;
  border-radius: 10px;
  background-color: #ddd;
  margin: 26px auto; /* Center horizontally */
  cursor: pointer;

  opacity: 1; 
    animation: ${props => props.file && `fadeIn 2s ease-in-out forwards`};
    font-size: 24px;

    @keyframes fadeIn {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
    }
`;

const HiddenFileInput = styled.input`
  display: none; /* Hide the default file input */
`;

const CustomLabel = styled.label`
  font-family: Calibri, sans-serif;
  font-size: 16px;
  color: #333;
  text-align: center;
  cursor: pointer;
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

const StyledAnimationText = styled.div`
    opacity: 0; 
    animation: fadeIn 2s ease-in-out forwards;
    font-size: 24px;

    @keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    }
`;