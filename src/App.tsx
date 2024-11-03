import { createSignal } from "solid-js";

const localStorageKey = "text";

export default function App() {
  const [text, setText] = createSignal(
    localStorage.getItem(localStorageKey) || ""
  );
  let textArea: HTMLTextAreaElement;

  return (
    <textarea
      ref={textArea!}
      style={{
        display: "block",
        "box-sizing": "border-box",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: "1rem",
        border: 0,
        outline: 0,
        resize: "none",
      }}
      spellcheck={false}
      value={text()}
      onInput={(e) => {
        setText(e.currentTarget.value)
        localStorage.setItem(localStorageKey, text());
      }}
    ></textarea>
  );
}
