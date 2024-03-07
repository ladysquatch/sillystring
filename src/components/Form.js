import "./form.scss";
import { Radio } from "./Radio";
import { Preview } from "./Preview";
import textTransforms from "../utils/textTransforms";
import { useState } from "react";

export function Form() {
  const [transformationType, setTransformationType] = useState("spongebob");
  const [textInput, setTextInput] = useState("");

  function handleClickType(value) {
    setTransformationType(value);
  }
  function handleTextInput(e) {
    setTextInput(e.target.value);
  }

  function handleClearInput() {
    setTextInput("");
  }

  function handleCopyText() {
    let converted = textTransforms[transformationType](textInput);

    if (Array.isArray(converted)) {
      converted = converted.join("");
    }
    window.navigator.clipboard.writeText(converted);
  }
  return (
    <>
      <div className="form-wrapper">
        <div className="radio-wrapper">
          <h2 className="label">Choose your format</h2>

          <Radio
            value="spongebob"
            label="Mocking Spongebob"
            onClickRadio={handleClickType}
            checked={transformationType === "spongebob"}
          />
          <Radio
            value="friendly"
            label="Friendly Reminder"
            onClickRadio={handleClickType}
            checked={transformationType === "friendly"}
          />
          <Radio
            value="abomination"
            label="Abomination"
            onClickRadio={handleClickType}
            checked={transformationType === "abomination"}
          />
          <Radio
            value="tiny"
            label="Tiny Screaming"
            onClickRadio={handleClickType}
            checked={transformationType === "tiny"}
          />
          <Radio
            value="sparkles"
            label="Sparkles Emphasis"
            onClickRadio={handleClickType}
            checked={transformationType === "sparkles"}
          />
          <Radio
            value="mirror"
            label="Mirror mirror..."
            onClickRadio={handleClickType}
            checked={transformationType === "mirror"}
          />
        </div>
        <div className="input-wrapper">
          <Preview type={transformationType} userText={textInput} />
          <h2 className="label">Enter your text</h2>
          <textarea value={textInput} onChange={handleTextInput}></textarea>
          <div className="button-wrapper">
            <button
              className="button"
              onClick={handleCopyText}
              disabled={!textInput}
            >
              Copy Text
            </button>
            <button className="button-link" onClick={handleClearInput}>
              Clear Input
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
