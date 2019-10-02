import { h, JSX } from "preact";
import * as style from "./style.scss";

interface Props { };

export default ({ }: Props): JSX.Element => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
    </div>
  );
}
