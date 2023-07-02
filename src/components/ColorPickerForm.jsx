import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ColorPickerForm = ({addColors}) => {
  const [colorPicker, setColorPicker] = useState("");
  const [colorList, setColorList] = useState([]);
  const handleInputChange = (event) => {
    setColorPicker(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!colorPicker) {
      return null;
    }

    setColorList((prevList) => [...prevList, colorPicker]);
    addColors(colorPicker)
    setColorPicker("");
  };

  return (
    <>
      <Form className="color-picker-form px-3 py-2" onSubmit={handleSubmit}>
        <Form.Group className="d-flex align-items-center pick-color">
          <Form.Label className="me-2">Pick Color</Form.Label>
          <Form.Control className="me-2"
            type="color"
            placeholder="#000000"
            name="color"
            value={colorPicker}
            onChange={handleInputChange}
          />
          <Form.Control
            type="text"
            placeholder="#000000"
            name="color"
            id="color"
            value={colorPicker}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button style={{backgroundColor:colorPicker, borderColor:colorPicker}} type="submit" variant="primary" className="ms-2">
          Generate
        </Button>
      </Form>
    </>
  );
};

export default ColorPickerForm;
