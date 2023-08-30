// src/app.ts
import express from "express";
import axios from "axios";
import { Request, Response } from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/getSoftwareEngineeringCVs", async (req: Request, res: Response) => {
  try {
    const options = {
      // ... your axios options here ...
      method: "GET",
      url: "https://api.recruitcrm.io/v1/candidates",
      params: { limit: "5000000" },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer ADD API KEY HERE",
      },
    };

    let response = await axios(options).then((response) => {
      console.log(response.data);

      const allCVs = response.data.data;

      // Filter CVs based on the "position" attribute containing keywords "software" or "developer"
      const softwareEngineeringCVs = allCVs.filter(
        (cv: { position: any }) =>
          (cv.position || "").toLowerCase().includes("software") ||
          (cv.position || "").toLowerCase().includes("developer")
      );

      res.render("softwareEngineeringCVs", { softwareEngineeringCVs });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/JobDescriptions", async (req: Request, res: Response) => {
  try {
    const options = {
      // ... your axios options here ...
      method: "GET",
      url: "https://api.recruitcrm.io/v1/jobs",
      params: {
        limit: "500000",
      },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer ADD THE API KEY HERE",
      },
    };

    let response = await axios(options).then((response) => {
      console.log(response.data);

      const allJobDescriptions = response.data.data;

      // Filter job descriptions based on criteria
      const softwareEngineerJobDescriptions = allJobDescriptions.filter(
        (job: { job_status: { label: string }; name: string }) => {
          const jobStatusLabel = job.job_status.label.toLowerCase();
          const jobName = job.name.toLowerCase();
          return (
            jobStatusLabel.includes("open") ||
            jobStatusLabel.includes("fulfillment qualified") ||
            jobName.includes("developer") ||
            jobName.includes("software")
          );
        }
      );

      res.render("JobDescriptions", { softwareEngineerJobDescriptions });

      //res.render('JobDescriptions', { JobDescriptions });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
