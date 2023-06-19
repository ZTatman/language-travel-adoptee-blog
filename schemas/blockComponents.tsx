import React from "react";

const HighlightIcon = () => <span className="font-bold">H</span>;

const HighlightDecorator = ({children}: any) => (
  <span className="bg-sky-300">{children}</span>
);

export {HighlightDecorator, HighlightIcon};
