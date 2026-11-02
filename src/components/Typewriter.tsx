import { useEffect, useState } from "react";

/** Střídavě „píše“ a maže zadaná slova. */
const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    const word = words[index];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === word) delay = 1600;
    else if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-[2px] h-[1em] -mb-[0.15em] bg-primary animate-caret" />
      </span>
    </span>
  );
};

export default Typewriter;
