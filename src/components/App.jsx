import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function createEmojiCard(emojipedia) {
    return <EmojiCard 
      key={emojipedia.id}
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
          {emojipedia.map(createEmojiCard)}
      </dl>
    </div>
  );
}

export default App;
