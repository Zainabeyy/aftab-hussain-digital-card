import { useParams } from "react-router-dom";
import cards from "../assets/data/cards";
import type { cardData } from "../assets/data/types";
import DigitalCard from "../components/DigitalCard";

export default function CardPage() {
  const { company } = useParams();
  const cardData: cardData | undefined = cards[company as keyof typeof cards];

  if (!cardData) {
    return <p>Page not found</p>; // show 404 if company not in cards
  }

  return <DigitalCard cardData={cardData} />;
}
