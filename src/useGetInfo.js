import { useState } from "react";

function useGetInfo(intialValue) {
  const [value, setValue] = useState(intialValue);

  const reset = () => {
    setValue("");
  };

  const bind = {
    //obje oluşturduk
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return[value, bind, reset];
}

export default useGetInfo;
