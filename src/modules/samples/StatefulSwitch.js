import { Grid, Switch } from "@material-ui/core";
import React, { useState } from "react";

export default function StatefulSwitch() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <label>Opt-in to join the mailing list</label>
        <Switch
          id="aSwitch"
          checked={switchOn}
          onChange={() => setSwitchOn(!switchOn)}
        />
        {switchOn && <p>Thank you!</p>}
      </Grid>
    </Grid>
  );
}
