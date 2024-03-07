import "./preview.scss";

import { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
import textTransforms from "../utils/textTransforms";

const lorem = new LoremIpsum();

export function Preview({ type, userText }) {
  const [previewText, setPreviewText] = useState(type);

  useEffect(() => {
    let generatedText = lorem.generateWords(8);

    if (userText) {
      generatedText = userText;
    }
    const converted = textTransforms[type](generatedText);

    setPreviewText(converted);
  }, [type, userText]);

  return (
    <>
      <div className="preview-wrapper">
        <h2 className="preview-label">Preview</h2>

        <div className="preview">
          <p>{previewText}</p>

          {type === "spongebob" ? (
            <img
              src="/spongebob.png"
              alt="mocking spongebob image"
              className="img-spongebob"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
