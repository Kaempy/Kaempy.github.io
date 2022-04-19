import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import Card from "../Utility/Card/Card";
import EducationDetails from "../Sections/Education/EducationDetails";
import PersonalDetails from "../Sections/PersonalDetails/PersonalDetails";
import WorkExperience from "../Sections/WorkExperience/WorkExperience";
import Button from "../Utility/Button/Button";
import "./Layout.css";
const Layout = () => {
  const [login, setLogin] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const btnHandler = (e) => {
    e.preventDefault();
    alert("Woohoo! CV created 😊 \n Your CV will be sent to your Email");
  };
  return (
    <Fragment>
      <Header />
      <main>
        {login === false ? (
          <Card className="card">
            <h2 className="h2">Welcome! 🤗</h2>
            <hr />
            <Button className='btn' onClick={loginHandler}>
              Get Started
            </Button>
          </Card>
        ) : (
          <section>
            <PersonalDetails />
            <EducationDetails />
            <WorkExperience />
            <Button onClick={btnHandler}>Done</Button>
          </section>
        )}
      </main>
    </Fragment>
  );
};

export default Layout;
