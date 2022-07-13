import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";
const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">ABOUT US</Typography>

        <div>
          <div>
          <Typography component="h2">Description</Typography>
            <span>
            Created an ecommerce website using mern stack that is scalable and future proof. We have used React for frontend & Redux
            for state management,NodeJS & Express for backend with MongoDB as database.
            Features : Password and authentication for different users. Search product with filtration. Cart and Checkout. Product and
            user database handling by Admin.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contributors</Typography>
            <Typography component="h3">Shobhit Mishra</Typography>
            <Typography component="h3">Ritwick Singh Baghel</Typography>
            <Typography component="h3">Sachin Choudhary</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
