import React, { useState } from "react";
import useTitle from "./useTitle"; //useTitle ı çektik

function TitleOne() {
  const [num, setNum] = useState(0);
  useTitle(num); //binevi bir fonksiyonu eklemiş olduk
  return (
    <div>
      <button className="button" onClick={() => setNum(num + 1)}>Sayı {num}</button>
    </div>
  );
}

export default TitleOne;
