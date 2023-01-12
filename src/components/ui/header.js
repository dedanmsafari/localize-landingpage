import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Fab from "@mui/material/Fab"
import Box from "@mui/material/Box"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import Fade from "@mui/material/Fade"
import { alpha, styled } from "@mui/material/styles"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

import logo from "../../images/Logo.svg"

function ScrollTop(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

const NavTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 700,
  fontFamily: "Raleway",
  color: theme.palette.primary.light,
  minWidth: 10,
  marginLeft: "25px",
}))

export const Header = props => {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <AppBar sx={{ bgcolor: "common.tan" }} position="fixed">
        <Toolbar>
          <img
            height={matchesMD ? 40 : matchesSM ? 30 : 60}
            src={logo}
            alt="Localize Logo"
          />
          {/* <Tabs
            value={0}
            sx={{
              marginLeft: "auto",
              "& .MuiTabs-indicator": {
                backgroundColor: "common.tan",
              },
            }}
            aria-label="basic tabs example"
          >
            <NavTab label="Home" />
            <NavTab label="The Revolution" />
            <NavTab label="Blog" />
            <NavTab label="About Us" />
            <NavTab label="Contact Us" />
          </Tabs> */}
        </Toolbar>
      </AppBar>

      <Toolbar sx={{ marginBottom: 3 }} id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
