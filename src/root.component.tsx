import { TextField } from "@mui/material";
import ButtonUsage from "./components/Button";

export default function Root(props) {
  return (
    <section style={{ marginTop: 100 }}>
      {props.name} is mounted! <br />
      <a href="/angular">Angular App</a>
      <ButtonUsage />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </section>
  );
}
