import React from "react";
import Card from "../Card/Card";
import Text from "../Text/Text";
import Title from "../Title/Title";
import Image from "../Image/Image";
import Pokedex from "../../assets/Pokedex.png";
import Button from "../Button/Button";

const ProductCard = (props) => {
  const imageProps = props.image;
  const priceProps = props.price;
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
      <Button>{props.label}</Button>
    </Card>
  );
};

export default ProductCard;
