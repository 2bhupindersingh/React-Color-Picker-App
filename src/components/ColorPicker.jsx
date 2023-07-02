import React, { useState } from "react";
import GlobalTitle from "./GlobalTitle";
import ColorPickerForm from "./ColorPickerForm";
import Values from "values.js";
import ColorList from "./ColorList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorPicker = () => {
  const [colors, setColors] = useState(new Values("#B71C1C").all(10));

  const addColors = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div>
      <GlobalTitle title="Color Picker App" />
      <ColorPickerForm addColors={addColors} />
      <ColorList colors={colors} />
     <ToastContainer />
    </div>
  );
};

export default ColorPicker;
