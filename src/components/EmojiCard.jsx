import React from "react";
import emojipedia from "../emojipedia";

function EmojiCard(props) {
    return (
    <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="emoji">
                {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
                {props.meaning}
          </dd>
    </div>
    );
}

export default EmojiCard;