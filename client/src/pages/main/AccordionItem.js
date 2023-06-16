import "./main.css";
import { useState } from "react";

function AccordionItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div class="question-btn" onClick={() => setIsOpen(!isOpen)}>
        <div class="btn-content">
          <p>{props.question}</p>
        </div>

        <div class="btn-content">
          {isOpen ? (
            <img
              src="/images-main/5.0-arrow-down.svg"
              alt="arrow-down"
              style={{ transform: "scaleY(-1)" }}
            />
          ) : (
            <img src="/images-main/5.0-arrow-down.svg" alt="arrow-down" />
          )}
        </div>
      </div>
      {isOpen === true ? (
        <div class="btn-content btn-answer">
          <p>{props.answer}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AccordionItem;
