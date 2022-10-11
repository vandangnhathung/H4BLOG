import React from "react";

const TopUp = () => {
  const handleTopUp = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div
      className="fixed bottom-10 cursor-pointer right-10"
      onClick={handleTopUp}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default TopUp;
