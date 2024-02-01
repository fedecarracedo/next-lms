import React from "react";

export default function parseEditorElement(
  blockElement: any
): JSX.Element | undefined {
  let elemTag: string;
  let elemProps: { className?: string };
  let elemContent: string;
  switch (blockElement.type) {
    case "header":
      elemTag = "h" + blockElement.data.level;
      elemProps = {
        className:
          "block font-sans text-" +
          (6 - blockElement.data.level) +
          "xl antialiased font-semibold leading-tight tracking-normal text-inherit mb-5 mt-5",
      };
      elemContent = blockElement.data.text;
      break;
    case "paragraph":
      elemTag = "p";
      elemProps = {
        className:
          "block font-sans text-lg antialiased font-normal leading-relaxed text-inherit text-justify mb-4",
      };
      elemContent = blockElement.data.text;
      break;
    case "list":
      elemTag = blockElement.data.style == "unordered" ? "ul" : "ol";
      elemContent = blockElement.data.items.map((item: string) =>
        React.createElement("li", {}, item)
      );
      let classes: string =
        elemTag == "ul"
          ? "max-w-md space-y-1 list-disc list-inside"
          : "ps-5 mt-2 space-y-1 list-decimal list-inside";
      elemProps = { className: classes };
      break;
    default:
      elemTag = "";
      elemProps = {};
      elemContent = "";
  }

  if (elemTag != "") {
    let ReactElement: JSX.Element = React.createElement(
      elemTag,
      elemProps,
      elemContent
    );
    return ReactElement;
  }

  return;
}
