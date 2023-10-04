import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="pb-5 border-b border-base-300">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};

export default SectionTitle;
