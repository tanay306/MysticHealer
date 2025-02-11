/*eslint-disable*/
import React, { useState, useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import { Avatar } from "@material-ui/core";
import doctor from "../../assets/img/faces/doctor.png";
import styled from "styled-components";
import CustomButton from "../../components/CustomButtons/Button";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CloseIcon from "@material-ui/icons/Close";
import api from "../../utils/api";
import { GlobalContext } from "../../GlobalContext";
import Notify from "notification/Notify";

import community from '../../assets/img/community.png';
import customer from '../../assets/img/customers.png';

const useStyles = makeStyles({
  ...styles,
  large: {
    width: 125,
    height: 125,
    padding: 16,
    borderRadius: "50%",
    border: "2px solid #ff9800",
  },
});

export default function SymptomsNew() {
  const [uApp, setUpp] = useState([]);

  const [pApp, setPpp] = useState([]);

  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;

  const [recall, setRecall] = useState(false);

  useEffect(() => {
    let data = [];
    const mf = async () => {
      try {
        data = await api.viewAllGroups();
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      let j = 1,
        k = 1;
      let upp = [],
        ppp = [];
      for (let i = 0; i < data.length; i++) {
        
        upp.push([
          `${j}`,
          data[i].meetId,
          data[i].meetType,
          data[i].numParticipants,
          data[i].topic, 
          data[i]._id,
        ]);
        j++;
      }
      setUpp(upp);
    };
    mf();
  }, [userData, recall]);

  const canceler = async (id) => {
    console.log("Id here:", id);
    try {
      const msg = await api.cancelAppointment(id);

      console.log(msg);
      setRecall(!recall);
    } catch (error) {
      console.error(error);
    }
  };

  const classes = useStyles();
  const arr = [1, 2, 3, 4, 5];
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader plain color="warning">
            <h4 className={classes.cardTitleWhite}>Sancturies</h4>
            <p className={classes.cardCategoryWhite}>
              Click on join to continue.
            </p>
          </CardHeader>
          <CardBody>
            {uApp.length != 0 &&
              uApp.map((elem) => (
                <StyledDoctorDataContainer>
                  {console.log(elem)}
                  {console.log("elem", userData.role)}
                  <Avatar src={elem[2] == "Peer Support" ? community : customer} className={classes.large} />
                  <StyledH6Mod >{elem[2]}</StyledH6Mod>
                  <StyledDoctorData>
                    <StyledH6>{userData.role == "doctor" ? elem[2].name : elem[1].name}</StyledH6>
                    {/* {userData.role == "doctor" ? "" : 
                    <StyledP style={{ color: "gray" }}>
                      {elem[1].specialization}
                    </StyledP>} */}
                  </StyledDoctorData>
                  <StyledDoctorData>
                    <StyledH6>{elem[3]} participants</StyledH6>
                  </StyledDoctorData>
                  <StyledDoctorData>
                    <StyledH6>Session Topic</StyledH6>
                    <StyledP>{elem[4]}</StyledP>
                  </StyledDoctorData>
                  <StyledDoctorData>
                    <CustomButton
                      fullWidth
                      color="success"
                      onClick={() => {
                        localStorage.setItem("review_docID", JSON.stringify(elem[1]._id));
                        localStorage.setItem("review_patientID", JSON.stringify(elem[2]._id));
                        window.location.href = `http://localhost:5001/?room=${elem[1]}`;
                      }}
                    >
                      <span>Join Meeting</span>{" "}
                      <span style={{ float: "right" }}>
                        <VideoCallIcon
                          style={{ marginLeft: 8, verticalAlign: "middle" }}
                        />
                      </span>
                    </CustomButton>
                    {/* <CustomButton
                      fullWidth
                      color="danger"
                      onClick={() => {
                        // console.log("Notif");
                        // return <Notify msg={"MSSG"} />;
                        canceler(elem[3]);
                      }}
                    >
                      {elem[3]} participants
                      <CloseIcon
                        style={{ marginLeft: 8, verticalAlign: "middle" }}
                      />
                    </CustomButton> */}
                  </StyledDoctorData>
                </StyledDoctorDataContainer>
              ))}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const StyledDoctorDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 8px;
  border-bottom: 1px solid #ccc;
  padding: 16px;
`;

const StyledDoctorData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
`;

const StyledH6 = styled.h6`
  margin: 0 !important;
`;

const StyledH6Mod = styled.h2`
    vertical-align: middle;
    margin: auto 0px !important;
    text-transform: uppercase;
    letter-spacing: 4px !important;
`;

const StyledP = styled.p`
  margin: 0 !important;
`;
