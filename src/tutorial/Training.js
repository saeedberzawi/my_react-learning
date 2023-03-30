import React from "react";

const sentence = "This is a sentence with a bold word.";
const boldWord = "bold";
// -------- 2
const sentence2 = "This is a big sentence with some {enclosed text} inside.";
const start = sentence2.indexOf("{");
const end = sentence2.indexOf("}");
const before = sentence2.substring(0, start);
const inside = sentence2.substring(start + 1, end);
const after = sentence2.substring(end + 1);
// -------- 3
const jamel = "This {is} a big {jamel} with some {enclosed text} inside.";
const regex = /{([^}]+)}/g;
let match;
let lastIndex = 0;
const parts = [];
while ((match = regex.exec(jamel)) !== null) {
  const text = match[1];
  const start = match.index;
  const end = start + match[0].length;
  parts.push(jamel.substring(lastIndex, start));
  parts.push(<span style={{ fontWeight: "bold" }}>{text}</span>);
  lastIndex = end;
}
parts.push(jamel.substring(lastIndex));
// ----- 4
const arr = [
  "مرحبا بالعالم",
  "{المحتوى الأول}",
  "{المحتوى الثاني}",
  "النص العادي",
];
const result = arr.map((item) => {
  if (item.includes("{") && item.includes("}")) {
    return <strong>{item}</strong>;
  } else {
    return <span>{item}</span>;
  }
});

const Training = () => {
  return (
    <>
      <div>
        <p>
          {sentence.split(" ").map((word, index) => {
            if (word === boldWord) {
              return (
                <span key={index} style={{ fontWeight: "bold" }}>
                  {word}{" "}
                </span>
              );
            }
            return <span key={index}>{word} </span>;
          })}
        </p>
      </div>
      {/* ---- 2 */}
      <div>
        {before}
        <span style={{ fontWeight: "bold" }}>{inside}</span>
        {after}
      </div>
      {/* ----- 3 */}
      <div>{parts}</div>
      {/* ----- 4 */}
      <div>{result}</div>
    </>
  );
};

export default Training;
