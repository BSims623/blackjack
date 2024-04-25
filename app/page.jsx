'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import {createDeck} from '@/utils/create-deck';

export default function Home() {
  const [deck, setDeck] = useState(null);
  const [numberOfDecks, setNumberOfDecks] = useState(1);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);

  useEffect(() => {
    setDeck(createDeck(numberOfDecks));
  },[numberOfDecks]);



  return (
    <div className="border-solid border-2 border-pink-500 flex flex-col items-center justify-center space-y-4 py-4">
    <h1 className="text-3xl text-blue-500">Hello World</h1>
    <div className="flex flex-col">
      <h2 className="text-center text-2xl text-blue-500">Dealer</h2>
      <div className="flex justify-center gap-2 w-100">
        <img src="/images/ace_of_spades.png" alt="Playing Card" width={100} height={'auto'} />
        <img src="/images/king_of_spades.png" alt="Playing Card" width={100} height={'auto'} />
      </div>
    </div>
    <button className="bg-blue-700 px-3 py-1 rounded">Deal</button>

    </div>
  );
}
