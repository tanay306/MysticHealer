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

    const [file, setFile] = useState();

    if(userData.role === 'doctor'){
        history.push('/user/dashboard'); 
    }

    const apiData = async (file) => {
        // try {
        //     if (!file || file.length === 0) {
        //         console.error("No file selected");
        //         return;
        //     }
        //     const response = await api.predictWearable(file[0]);  // Pass only the first file
        //     console.log("API Response:", response);
        // } catch (error) {
        //     console.error("Error calling API:", error);
        // }
        const response = await api.predictTest();  // Pass only the first file
        console.log("API Response:", response);

    };

    return(
        <div>
            <StyledFileInput
                type="file"
                placeholder="Upload File"
                variant="outlined"
                onChange={(e) => {
                    const files = e.target.files;
                    if (files.length > 0) {
                        setFile(files[0]); // Store only the first file
                        apiData(files);    // Pass files to API function
                    } else {
                        console.error("No file selected.");
                    }
                }}
                />

                <Button onClick={apiData}>CLick</Button>
        </div>
    );
};

export default Reviews;

const StyledFileInput = styled.input`
  border-radius: 10px;
  padding: 12px;
  width: 100%;
`;