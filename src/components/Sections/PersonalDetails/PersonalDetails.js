import React, { Fragment } from "react";
import Card from "../../Utility/Card/Card";
import Input from "../../Utility/Input/Input";
import styles from "../../Styles/Sections.module.css";

const PersonalDetails = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <Card className={styles.card}>
          <h2 className={styles.h2}>Personal Details</h2>
          <hr />
          <form>
            <div className={styles["form-control"]}>
              <Input label="First Name" type="text" placeholder="First Name" />
              <Input label="Last Name" type="text" placeholder="Last Name" />
            </div>
            <div className={styles["form-control"]}>
              <Input
                className={styles.input}
                label="Profession"
                type="text"
                placeholder="E.g Backend Developer"
              />
            </div>
            <div className={styles["form-control"]}>
              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className={styles["form-control"]}>
              <Input
                label="City"
                type="text"
                placeholder="Lagos"
                className={styles["sub-input"]}
              />
              <Input
                label="Country"
                type="text"
                placeholder="Nigeria"
                className={styles["sub-input"]}
              />
              <Input
                label="Postal Code"
                type="number"
                placeholder="123456"
                className={styles["sub-input"]}
              />
            </div>
          </form>
        </Card>
      </section>
    </Fragment>
  );
};

export default PersonalDetails;
