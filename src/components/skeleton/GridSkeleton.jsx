import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GridSkeleton = (props) => {
  return Array(props.cards)
    .fill(0)
    .map((item, i) => (
      <div
        className="Grid_skeleton d-f ai-c jc-c fd-c"
        key={i}
        style={{ gap: "0.5rem" }}
      >
        <Skeleton width={220} height={250} style={{ borderRadius: "20px" }} />
        <Skeleton width={180} height={15} style={{ borderRadius: "2px" }} />
      </div>
    ));
};

export default GridSkeleton;
