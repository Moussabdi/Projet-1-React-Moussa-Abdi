import React from "react";
import Card from "../Card/Card";
import Text from "../Text/Text";
import Title from "../Title/Title";
import Image from "../Image/Image";
import Pokedex from "../../assets/Pokedex.png";
import Button from "../Button/Button";
import IconButton from "../../../../previewCard/src/Component/IconButton/IconButton";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageProps = props.image;
  const onClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Card>
      {JSON.stringify(isHovered)}
      <Title>{props.title}</Title>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
      />
      <Text>{props.description}</Text>
      <Button onClick={onClick}>{props.label}</Button>
      <IconButton icon={<FaCartPlus />}>{props.label}</IconButton>
    </Card>
  );
};

export default ProductCard;
