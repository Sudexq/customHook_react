//öncelikle use ile dosya adı oluşturmamız hook olarak kullanılmasını sağlıyor

import { useEffect } from "react";

function useTitle(num) {
  useEffect(() => {
    document.title = `sayı ${num}`; 
  }, [num]);
  //num da herhangi bir değişiklik olduğu zaman document title ı değişecek
}

export default useTitle;
