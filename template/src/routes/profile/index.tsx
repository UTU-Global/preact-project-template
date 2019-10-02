import { h, JSX } from "preact";
import { useState, useEffect } from "preact/hooks";
import * as style from "./style.scss";

interface Props {
  user: string;
}

export default ({
  user = '',
}: Props): JSX.Element => {

  const [timer, setTimer] = useState<number | undefined>(undefined);
  const [count, setCounter] = useState<number>(10);
  const [time, updateTime] = useState<number>(Date.now());

  useEffect(() => {
    setTimer(window.setInterval(tick, 1000));
    return () => clearInterval(timer);
  }, []);

  const tick = () => updateTime(Date.now());

  const increment = () => setCounter(count + 1);

  return (
    <div class={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={increment}>Click Me</button> Clicked{" "}
        {count} times.
      </p>
    </div>
  );
}
