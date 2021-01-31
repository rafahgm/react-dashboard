import React from "react";

import { Paper } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";

type BaseCardProps = {
  minHeight: number | string;
  style?: CSSProperties;
};

const BaseCard: React.FC<BaseCardProps> = ({ minHeight, style, children }) => {
  return (
    <Paper
      elevation={3}
      style={{
        minHeight: minHeight,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </Paper>
  );
};

export default BaseCard;
