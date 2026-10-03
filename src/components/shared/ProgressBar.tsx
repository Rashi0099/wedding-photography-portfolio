import React from "react";

const ProgressBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] pointer-events-none">
      <div className="scroll-progress-bar h-full bg-[#F1EDE3] origin-left" />
    </div>
  );
};

export default ProgressBar;
