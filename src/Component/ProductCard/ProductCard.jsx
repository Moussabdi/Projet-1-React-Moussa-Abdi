import React from "react";
import Card from "../Card/Card";
import Text from "../Text/Text";
import Title from "../Title/Title";
import Image from "../Image/Image";
import Pokedex from "../../assets/Pokedex.png";
import Button from "../Button/Button";

const ProductCard = (props) => {
  const imageProps = props.image;
  const onClick = () => {
    alert("Are you sure want to see the message!", props.title);
  };
  const onSignIn = () => {};
  const onLogout = () => {};
  return (
    <Card>
      <Title>{props.title}</Title>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
      />
      <Text>{props.description}</Text>
      <Button onClick={onClick}>{props.label}</Button>
      <Button onSignIn={onSignIn}>{props.label2}</Button>
      <Button onLogout={onLogout}>{props.label3}</Button>
    </Card>
  );
};

export default ProductCard;
