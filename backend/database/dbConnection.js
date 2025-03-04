import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.URI, {
      dbName: "MERN_JOB_SEEKING_APP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
