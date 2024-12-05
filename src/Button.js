import React, { useState } from 'react';

const syllables = [
  [
    "Der Hund rennt.",
    "Mia lacht laut.",
    "Tim isst Eis.",
    "Die Sonne scheint.",
    "Papa fährt Auto.",
    "Der Apfel ist rot.",
    "Ich sehe ein Haus.",
    "Der Vogel fliegt.",
    "Das Kind spielt Ball.",
    "Oma backt einen Kuchen.",
    "Der Fisch schwimmt.",
    "Max mag Kakao.",
    "Anna liest ein Buch.",
    "Der Baum ist groß.",
    "Die Katze schläft.",
    "Ich gehe zur Schule.",
    "Der Zug ist schnell.",
    "Die Maus ist klein.",
    "Lisa singt ein Lied.",
    "Der Regen fällt."
  ],
  [
    "Dominik",
    "Ghihan",
    "Gianni",
    "Johanna",
    "Karl",
    "Lea",
    "Liam",
    "Maksym",
    "Matteo",
    "Micele",
    "Mira",
    "Miraslawa",
    "Miriam",
    "PaulE",
    "PaulF",
    "Pius",
    "Rose",
    "Ryen",
    "Samu",
    "Seif",
    "Selina",
    "Shivaay",
    "Teresa",
    "Theo",
    "Valerija",
    "Yusra"
  ],
  ["lacht.", "weint.", "popelt.", "schreit laut.", "kichert.", "schreibt.", "rechnet schnell.", "schminkt sich.", "malt Käse.", "liebt Schokolade. ", "redet viel.", "klebt Papier.", "lutscht Radiergummi.", "beißt in den Stift.", "heult wie ein Seehund.", "pupst.", "holt die Schuhe.", "krabbelt im Matsch.", "legt Eier.", "sammelt Müll.", "spuckt auf das iPad."],
    ];

function SyllableButton({ index, onSpeak }) {
  const [currentSyllable, setCurrentSyllable] = useState(syllables[index][0]);

  const handleClick = () => {
    const nextIndex = (syllables[index].indexOf(currentSyllable) + 1) % syllables[index].length;
    setCurrentSyllable(syllables[index][nextIndex]);
  };

  return (
    <div className="syllable-button-container">
      <button onClick={handleClick}>
        {currentSyllable}
      </button>
      <button onClick={() => onSpeak(currentSyllable)}>
        🎤
      </button>
    </div>
  );
}

export default SyllableButton;