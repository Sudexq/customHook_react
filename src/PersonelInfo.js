import React from "react";
import useGetInfo from './useGetInfo.js';
function PersonelInfo() {
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');

  const [firstName, bindFirstName, resetFirstName] = useGetInfo("");
  const [lastName, bindLastName, resetLastName] = useGetInfo("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhabalar ${firstName} ${lastName}!`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form className="formElement" onSubmit={submitForm}>
        <div>
          <label>Ad:</label>
          <input
            type="text"
            {...bindFirstName}
          ></input>
        </div>
        <div>
          <label>soyad: </label>
          <input
            type="text"
            {...bindLastName}
          ></input>
        </div>
        <button className="button">Gönder</button>
      </form>
    </div>
  );
}

export default PersonelInfo;
