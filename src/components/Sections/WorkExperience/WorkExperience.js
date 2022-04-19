import React, { Fragment } from "react";
import Card from "../../Utility/Card/Card";
import Input from "../../Utility/Input/Input";
import styles from "../../Styles/Sections.module.css";

const WorkExperience = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <Card className={styles.card}>
          <h2 className={styles.h2}>Work Experience</h2>
          <hr />
          <form>
            <div className={styles["form-control"]}>
              <Input
                className={styles.input}
                label="Company/Organzation"
                type="text"
                placeholder="E.g Microsoft"
              />
            </div>
            <div className={styles["form-control"]}>
              <Input label="State" type="text" placeholder="Lagos" />
              <Input label="Country" type="text" placeholder="Nigeria" />
            </div>
            <div className={styles["form-control"]}>
              <Input
                label="Job Title"
                type="text"
                placeholder="E.g Senior Backend Developer"
              />
              <Input
                label="Department"
                type="text"
                placeholder="E.g Technology Department"
              />
            </div>
            <div className={styles["form-control"]}>
              <Input label="Start Date" type="date" placeholder="Start Date" />
              <Input
                label="End Date"
                type="date"
                placeholder="Graduation Date"
              />
            </div>
          </form>
        </Card>
      </section>
    </Fragment>
  );
};

export default WorkExperience;
