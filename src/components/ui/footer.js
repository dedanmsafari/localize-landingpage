import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        sx={{
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "primary.main",
          marginBottom: "-50px",
        }}
      >
        <Grid item>
          <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
            © {new Date().getFullYear()} Localize. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}
