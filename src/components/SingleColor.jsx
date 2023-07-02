import React from "react";
import { ToastContainer, toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const saveClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success("Color copied to clipboard!");
      } catch (error) {
        toast.error("Copy to clipboard not available");
      }
    } else {
      toast.error("Copy to clipboard not available");
    }
  };
  return (
    <div
      key={index}
      className={index > 10 ? "single-color color-light" : "single-color"}
      style={{ background: `#${hex}` }}
      onClick={saveClipboard}
    >
      <span className="d-block">{weight}%</span>
      <span>#{hex}</span>
    </div>
  );
};

export default SingleColor;
