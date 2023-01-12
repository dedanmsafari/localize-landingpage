import React, { useState } from "react"
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material"
import Alert from "@mui/material/Alert"
import { useTheme } from "@mui/material/styles"
import jsonp from "jsonp"
import Preview from "../images/preview.png"

const Home = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const theme = useTheme()
  const MatchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const MatchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const handleChange = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    const url =
      "https://gmail.us12.list-manage.com/subscribe/post-json?u=0df6d6d558a2fe32e333a7f15&amp;id=d066905e47&amp;f_id=006243e0f0" // you can use .env file to replace this
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, { msg }) => {
      // alert(msg)
      setAlertMessage(msg)
      setLoading(false)
      setTimeout(() => {
        setAlertMessage("")
      }, 3000)
      setEmail("")
    })
  }

  return (
    <Grid
      container
      direction={MatchesMD ? "column" : "row"}
      sx={{
        alignItems: "center",
        justifyContent: "space-around",
        padding: "20px  30px 0px 30px",
      }}
    >
      <Grid item>
        <Grid
          item
          container
          direction={"column"}
          sx={{
            alignItems: MatchesMD ? "center" : "",
            textAlign: MatchesMD ? "center" : "",
            maxWidth: MatchesMD ? "650px" : MatchesSM ? "550px" : "750px",
          }}
        >
          <Grid
            item
            sx={{
              paddingBottom: "25px",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1">
              Same{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Neighborhood,
              </Box>
              <br />
              Better{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Vibes.
              </Box>
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              paddingBottom: "30px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "secondary.main", lineHeight: "2.3rem" }}
            >
              Breathe life to your area by engaging the locals. Share your
              Interests, View and vibe with Arrivals. Explore different
              neighborhoods around the world from the natives eye. Our aim -
              make the next generation of social media users healthy and social.{" "}
              <br />
              Localize will launch soon. Join the waitlist to try the beta
              before it's publicly available.
            </Typography>
          </Grid>
          <Grid item>
            <Box component="form" onSubmit={handleSubmit} autoComplete="off">
              {alertMessage ? (
                <Alert variant="filled" severity="success">
                  Thank you for Believing in us. We'll be in touch soon!
                </Alert>
              ) : (
                <>
                  <TextField
                    required
                    type="Email"
                    // id="outlined-basic"
                    size="small"
                    label="Enter your Email"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "primary.light",
                        },
                        "&:hover fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      marginRight: "10px",
                      paddingBottom: MatchesMD ? "20px" : "",
                      width: MatchesMD ? "80%" : "60%",
                    }}
                    value={email}
                    onChange={handleChange}
                  />

                  <Button type="submit" disabled={loading} variant="contained">
                    Join Waitlist
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          item
          container
          direction={MatchesMD ? "column" : "row"}
          sx={{ justifyContent: "center", paddingTop: MatchesMD ? "40px" : "" }}
        >
          <Grid item>
            <img src={Preview} alt="preview phone" height={450} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          padding: "50px 20px 20px 20px",
          alignItems: MatchesMD ? "center" : "",
          textAlign: MatchesMD ? "center" : "",
          maxWidth: MatchesMD ? "650px" : MatchesSM ? "550px" : "100%",
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontStyle: "italic",
            fontWeight: "1rem",
          }}
        >
          "The Future of Social Media lies not in the improvement of technology
          into the Metaverse nor the exploitation of the human psyche,but in
          going back to the initial goals of whats its meant to be,to make
          everyone social and interactive,Every user being both an influencer
          and consumer of content." ~ Dedan Msafari,Co-Founder
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Home
