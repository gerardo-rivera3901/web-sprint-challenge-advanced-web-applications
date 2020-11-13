import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithauth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axiosWithAuth().get('/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ColorList colors={colorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
