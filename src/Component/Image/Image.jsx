import React from "react";
import "./Image.css";

const Image = (props) => {
  const classnames = ["image"];
  let loading = "lazy";

  if (props.className) classnames.push(props.className);

  if (props.loading) {
    loading = props.loading;
  }
  return (
    <img
      src={props.src}
      alt={props.alt}
      loading={props.loading}
      width={props.width}
      height={props.height}
      className={classnames.join(" ")}
    />
  );
};

export default Image;
