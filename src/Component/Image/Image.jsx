import React from "react";
import "./Image.css";

const Image = (props) => {
  const classnames = ["image"];
  let loading = "lazy";

  //f (props.className) classnames.push(props.className);
  if (props.value === props.active) classnames.push("active");

  const onClick = () => {
    props.onClick(props.value);
  };

  if (props.loading) {
    loading = props.loading;
  }
  return (
    <div onClick={onClick} className={classnames.join(" ")}>
      <img
        src={props.src}
        alt={props.alt}
        loading={props.loading}
        width={props.width}
        height={props.height}
        className={classnames.join(" ")}
      />
      <div className="image__content">{props.children}</div>
    </div>
  );
};

export default Image;
