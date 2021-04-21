import { Grid } from "@material-ui/core";
import { DeveloperScoreCard } from "./DeveloperScore";
import { PullRequestTimelineCard } from "./PullRequestTimeline";
import { ScoreCard } from "./ScoreCard";
import faker from "faker";
import React, { useState } from "react";
import { RepositorySelector } from "./RepositorySelector";
import { ProductionLeadTimeCard } from "./ProductionLeadTime";
import { ActivityRatioCard } from "./ActivityRatio";

const scoreData = [
  {
    title: "Productivity",
    score: faker.random.number(100),
    unit: "",
    ratio: faker.random.number({ min: -100, max: 100 }).toString(),
    chip: "today",
  },
  {
    title: "Efficiency",
    score: faker.random.number(100),
    unit: "",
    ratio: faker.random.number({ min: -100, max: 100 }).toString(),
    chip: "1 week",
  },
  {
    title: "Total Amount",
    score: faker.random.number(100),
    unit: "",
    ratio: faker.random.number({ min: -100, max: 100 }).toString(),
    chip: "yesterday",
  },
  {
    title: "Goal",
    score: faker.random.number(100),
    unit: "",
    ratio: faker.random.number({ min: -100, max: 100 }).toString(),
    chip: "today",
  },
];

const repositoies = [
  "intecrb/sample_app",
  "intecrb/demo_app",
  "daisuke-awaji/qiitaScraper",
  "daisuke-awaji/serverless-appsync-offline-typescript-template",
];

const ProductivityPage = () => {
  const [repo, setRepo] = useState(repositoies[0]);
  const handleChange = (event: any) => {
    setRepo(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <RepositorySelector
          repositories={repositoies}
          selectedRepository={repo}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Grid container spacing={2}>
          {scoreData.map((item) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <ScoreCard
                  title={item.title}
                  score={item.score}
                  unit={item.unit}
                  ratio={item.ratio}
                  chip={item.chip}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <ActivityRatioCard repository={repo} />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ProductionLeadTimeCard repository={repo} />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <PullRequestTimelineCard repository={repo} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <DeveloperScoreCard repository={repo} />
      </Grid>
    </Grid>
  );
};

export default ProductivityPage;
