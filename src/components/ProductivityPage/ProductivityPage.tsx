import { Grid } from "@material-ui/core";
import { CommitsTop } from "./CommitsTop";
import { PullRequestTimeline } from "./PullRequestTimeline";
import { BasicCard } from "../BasicCard";
import { ScoreCard } from "./ScoreCard";

const ProductivityPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ScoreCard
              title="Productivity"
              score={82}
              unit=""
              ratio="+12"
              chip="today"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ScoreCard
              title="Efficiency"
              score={17}
              unit=""
              ratio="+9"
              chip="1 week"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ScoreCard
              title="Total Amount"
              score={33}
              unit=""
              ratio="+2"
              chip="today"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ScoreCard
              title="Productivity"
              score={2}
              unit=""
              ratio="-20"
              chip="yesterday"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <BasicCard title="ABC" style={{ height: 300 }} />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <BasicCard title="Pull Request timeline">
          <PullRequestTimeline />
        </BasicCard>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <BasicCard title="Developer score">
          <CommitsTop />
        </BasicCard>
      </Grid>
    </Grid>
  );
};

export default ProductivityPage;
