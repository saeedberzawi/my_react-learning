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
// ------ 5
const data = [
  {
    id: 1,
    name: "{المحتوى الأول}هناك المزيد",
    title: "{المحتوى الثاني}هناك المزيد",
    title2: "{المحتوى الثاني}مشايه ",
    age: "النص العادي",
  },
  {
    id: 2,
    name: "{المحتوى الأول}",
    title: "{المحتوى الثاني}",
    title2: "{المحتوى الثاني}مشايه ",
    age: "النص العادي",
  },
];

const boldData = data.map((item, index) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>
        {item.name.split("{").map((text, i) => {
          if (text.includes("}")) {
            const boldText = text.split("}")[0];
            return (
              <span key={i}>
                <span style={{ fontWeight: "bold" }}>{boldText}</span>
                {text.split("}")[1]}
              </span>
            );
          }
          return text;
        })}
      </p>
      <h3>
        {item.title2.split("{").map((text, i) => {
          if (text.includes("}")) {
            const boldText = text.split("}")[0];
            return (
              <span key={i}>
                <span style={{ fontWeight: "bold" }}>{boldText}</span>
                {text.split("}")[1]}
              </span>
            );
          }
          return text;
        })}
      </h3>
      <p>{item.age}</p>
    </div>
  );
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
      {/* -------- 5 */}
      <>{boldData}</>
    </>
  );
};

export default Training;
