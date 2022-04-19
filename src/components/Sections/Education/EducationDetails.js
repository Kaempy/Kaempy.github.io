import React, { Fragment } from "react";
import Card from "../../Utility/Card/Card";
import Input from "../../Utility/Input/Input";
import styles from "../../Styles/Sections.module.css";
const EducationDetails = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <Card className={styles.card}>
          <h2 className={styles.h2}>Education Details</h2>
          <hr />
          <form>
            <div className={styles["form-control"]}>
              <Input
                className={styles.input}
                label="Institution"
                type="text"
                placeholder="E.g Oxford University"
              />
            </div>
            <div className={styles["form-control"]}>
              <Input label="State" type="text" placeholder="Lagos" />
              <Input label="Country" type="text" placeholder="Nigeria" />
            </div>
            <div className={styles["form-control"]}>
              <Input label="From" type="date" placeholder="Start Date" />
              <Input label="To" type="date" placeholder="Graduation Date" />
            </div>
            <div className={styles["form-control"]}>
              <Input
                label="Course of Study"
                type="text"
                placeholder="E.g Computer Engineering"
              />
              <Input
                label="Qualification"
                type="text"
                placeholder="E.g Bachelor of Technology"
              />
            </div>
          </form>
        </Card>
      </section>
    </Fragment>
  );
};

export default EducationDetails;
