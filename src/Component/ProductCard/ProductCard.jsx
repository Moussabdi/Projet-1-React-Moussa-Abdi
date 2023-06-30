import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Image from "../Image/Image";
import { useState } from "react";
import "./ProductCard.css";

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
        <Title>Golbat</Title>
        <Image
          src="/src/assets/Golbat.png"
          alt="Golbat"
          width={imageProps.width}
          height={imageProps.height}
          value={1}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Inner Focus Infiltrator Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Bulbasaur</Title>
        <Image
          src="/src/assets/Bulbasaur.png"
          alt="Bulbasaur"
          width={imageProps.width}
          height={imageProps.height}
          value={2}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Overgrow Chlorophyll Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Lvysaur</Title>
        <Image
          src="/src/assets/Lvysaur.png"
          alt="Lvysaur"
          width={imageProps.width}
          height={imageProps.height}
          value={3}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Overgrow Chlorophyll Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Venausaur</Title>
        <Image
          src="/src/assets/Venusaur.png"
          alt="Venusaur"
          width={imageProps.width}
          height={imageProps.height}
          value={4}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Overgrow Venusaur Chlorophyll Hidden Ability Thick Fat
          Mega Venusaur
        </Image>
      </Card>
      <Card>
        <Title>Charmander</Title>
        <Image
          src="/src/assets/Charmander.png"
          alt="Charmander"
          width={imageProps.width}
          height={imageProps.height}
          value={5}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Blaze Solar Power Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Charmeleon</Title>
        <Image
          src="/src/assets/Charmeleon.png"
          alt="Charmeleon"
          width={imageProps.width}
          height={imageProps.height}
          value={6}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Blaze Solar Power Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Golduck</Title>
        <Image
          src="/src/assets/Golduck.png"
          alt="Golduck"
          width={imageProps.width}
          height={imageProps.height}
          value={7}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Damp or Cloud Nine Swift Swim Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Alakazam</Title>
        <Image
          src="/src/assets/Alakazam.png"
          alt="Alakazam"
          width={imageProps.width}
          height={imageProps.height}
          value={8}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Synchronize or Inner Focus Alakazam Magic Guard Hidden
          Ability Trace Mega Alakazam
        </Image>
      </Card>
      <Card>
        <Title>Machamp</Title>
        <Image
          src="/src/assets/Machamp.png"
          alt="Machamp"
          width={imageProps.width}
          height={imageProps.height}
          value={9}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Guts or No GuardGen IV+ Steadfast Hidden Ability
        </Image>
      </Card>
      <Card>
        <Title>Victreebel</Title>
        <Image
          src="/src/assets/Victreebel.png"
          alt="Victreebel"
          width={imageProps.width}
          height={imageProps.height}
          value={10}
          active={onMouseEnter}
          onClick={handleClick}
        >
          Abilities : Chlorophyll Gluttony Hidden Ability
        </Image>
      </Card>
    </div>
  );
};

export default ProductCard;
