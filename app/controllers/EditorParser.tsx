import React from "react";

export default function parseEditorElement(
  blockElement: any
): JSX.Element | undefined {
  let elemTag: string;
  let elemProps;
  let elemContent: any;
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
    case "embed":
      elemTag = "div";
      elemProps = {
        className: "rounded-lg flex justify-center w-full mt-6 mb-6 ",
      };
      elemContent = React.createElement("iframe", {
        src: blockElement.data.source.replace("watch?v=", "embed/"),
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        frameborder: 0,
        width: 580,
        height: 415,
      });
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
