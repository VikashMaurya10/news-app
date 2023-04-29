import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShowCaseSkeleton = (props) => {
  return Array(props.cards)
    .fill(0)
    .map((item, i) => (
      <div
        className="Grid_skeleton d-f ai-c jc-c fd-c"
        key={i}
        style={{ gap: "0.5rem" }}
      >
        <Skeleton width="1000px" height={400} style={{ borderRadius: "20px" }} />
        <Skeleton width={700} height={15} style={{ borderRadius: "2px" }} />
        <Skeleton width={300} height={15} style={{ borderRadius: "2px" }} />
      </div>
    ));
};

export default ShowCaseSkeleton;
