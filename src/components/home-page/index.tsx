import { ChangeEvent, useCallback, useState } from "react";
import styles from "./styles.module.css";
import getAddressData from "../../requests/getAddressData";

type Options = {
  name?: string;
  symbol?: string;
  serializedTotalSupply?: string;
};

const HomePage = (): JSX.Element => {
  const [text, setText] = useState("");
  const [options, setOptions] = useState<Options>({});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const getData = useCallback(async () => {
    const data = await getAddressData(text);
    setOptions(data);
  }, [text]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          className={styles.input}
        />
        <button onClick={getData}>Get Options</button>
      </div>
      <div className={styles.data}>
        <div>Name : {options?.name}</div>
        <div>Symbol : {options?.symbol}</div>
        <div>Total Supply : {options?.serializedTotalSupply}</div>
      </div>
    </div>
  );
};
export default HomePage;
