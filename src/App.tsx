import { useEffect } from "react";
import { Principal } from "./components/Principal";
import { Title } from "./components/Title";
import { useCryptoStore } from "./store";

function App() {

  const getCriptos = useCryptoStore((state) => state.getCriptos);

  useEffect(() => {
    getCriptos();
  }, [getCriptos]);

  return (
    <>
      <Title />
      <Principal />
    </>
  );
}

export default App;
