import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { SERVICE_NAME } from "../Constants";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "20px 20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  text: {
    marginBottom: 12,
  },
  placeholder: {
    background: "rgba(207,216,220,.2)",
    borderTop: "1px solid rgba(0,0,0,.12)",
    color: "rgba(0,0,0,.54)",
    fontSize: "13px",
    lineHeight: "20px",
    textAlign: "center",
    margin: "0 -20px -20px",
    padding: "60px 20px",
  },
});

export default function UsageFreeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography variant="h6" component="h2" className={classes.text}>
        無料枠
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.text}
      >
        {SERVICE_NAME} では、有料のインフラストラクチャ
        プロダクトに無料枠が用意されています。これらの無料枠のしきい値を超える使用量に対してのみ請求が発生します。
      </Typography>
      <div className={classes.placeholder}>
        プロジェクトは最近、請求対象となる {SERVICE_NAME}{" "}
        サービスを使用していません。
      </div>
    </Card>
  );
}
