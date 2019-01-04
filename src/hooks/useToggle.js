import { useState, useCallback } from "react";

const useToggle = () => {
  const [open, setOpen] = useState(false);

  return [open, useCallback(() => setOpen(status => !status))];
};

export default useToggle;
