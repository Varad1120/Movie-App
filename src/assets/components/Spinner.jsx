import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-8" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-light-200/30 border-t-light-100" />
    </div>
  );
};

export default Spinner
