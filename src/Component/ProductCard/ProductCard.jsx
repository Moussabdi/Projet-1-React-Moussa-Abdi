import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Image from "../Image/Image";
import Pokedex from "../../assets/Pokedex.png";
import Bulbasaur from "../../assets/Bulbasaur.png";
import { useState } from "react";
import "./ProductCard.css";
import PokemonsList from "../Pokemons/PokemonsList";
const NO_IMAGE_SELECTED = 0;
const ProductCard = (props) => {
  const [onMouseEnter, onMouseLeave] = useState(NO_IMAGE_SELECTED);
  const imageProps = props.image;
  const handleClick = (index) => {
    if (index === onMouseEnter) {
      onMouseLeave(NO_IMAGE_SELECTED);
      return;
    }
    onMouseLeave(index);
  };

  return (
    <div className="grid">
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={1}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={2}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={3}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={4}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={5}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={6}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={7}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={8}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={9}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
      <Card>
        <Title>{props.title}</Title>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          value={10}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
          fuga minima praesentium. Voluptatum temporibus ducimus numquam est!
          Facilis adipisci sint quos facere reprehenderit fuga?
        </Image>
      </Card>
    </div>
  );
};

export default ProductCard;
