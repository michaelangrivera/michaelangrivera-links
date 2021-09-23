import * as React from 'react';
import {useEffect} from 'react';

//mui components
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


//mui icons
import ComputerIcon from '@mui/icons-material/Computer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PetsIcon from '@mui/icons-material/Pets';

//styling
import menucss from '../../assets/css/menucss';
import {commonStyles, commonBorderColor} from '../../assets/css/menucss';
import {commonWidthMainMenu, commonSpacingTop} from '../../assets/css/sizingcss';

// import ActionAreaCard from './MenuSubList'; assets
import sheetscienceLogo from '../../assets/images/sheetscience-logo.png';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Menu() {

  const [open,
    setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const menuClasses = menucss();

  const [menuItem1,
    setmenuItem1] = React.useState(false);

  const handleMenu1 = () => {
    setmenuItem1(!menuItem1);
  };

  const [menuItem2,
    setmenuItem2] = React.useState(false);

  const handleMenu2 = () => {
    setmenuItem2(!menuItem2);
  };

  const [menuItem3,
    setmenuItem3] = React.useState(false);

  const handleMenu3 = () => {
    setmenuItem3(!menuItem3);
  };

  const [start,
    setStart] = React.useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setStart(true), 1);

    // this will clear Timeout when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
<div>
    <Slide
      direction="left"
      in={start}
      mountOnEnter
      unmountOnExit
      {...(start ? { timeout: 2000 } : {})}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center">

        <Grid
          item
          sx={{
          ...commonWidthMainMenu,
          ...commonSpacingTop
        }}>
          <Typography variant="h6" sx={{
            color: "white"
          }}>My Links</Typography>
        </Grid>
        <Grid item sx={commonWidthMainMenu}>
          <List >

            <Box
              sx={{
              ...commonStyles,
              ...commonBorderColor
            }}>
              <ListItemButton onClick={handleMenu1} sx={commonBorderColor}>
                <ListItemIcon>
                  <ComputerIcon fontSize='large' className={menuClasses.menuIconMain}/>
                </ListItemIcon>
                <ListItemText
                  primary=
                  {<Typography variant = "h6" className = {menuClasses.menuMainText}> Technology </Typography>}/> {menuItem1
                  ? <ExpandLess className={menuClasses.menuIconSecondary}/>
                  : <ExpandMore className={menuClasses.menuIconSecondary}/>}
              </ListItemButton>

              <Collapse in={menuItem1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <AccessibilityNewIcon fontSize='large' className={menuClasses.menuIconMain2}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={< Typography variant = "h6" className = {
                      menuClasses.menuMainText
                    } > About Me 
                    </Typography>}/>

                  </ListItemButton>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <GitHubIcon
                        sx={{
                        fontSize: 30
                      }}className={menuClasses.menuIconMain2}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={< Typography variant = "h6" className = {
                      menuClasses.menuMainText
                    } > My GitHub </Typography>}/>
                  </ListItemButton>
                </List>
                <Grid
                  item
                  sx={{
                  marginTop: 1,
                  marginBottom: 2
                }}>
                  <Divider >
                    <Chip
                      label={< Typography sx = {{fontSize: 18}}className = {
                      menuClasses.menuMainText
                    } > My Apps </Typography>}/>
                  </Divider>
                </Grid>
                <Grid container justify="center">
                  <Grid item sx={{
                    marginLeft: 15
                  }}></Grid>
                </Grid>

                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={3}
                  sx={{
                  marginTop: 1,
                  marginBottom: 2
                }}>
                  <Box onClick = {handleClick}>
                    <Avatar src={sheetscienceLogo}/>
                    <Typography variant="h6" className={menuClasses.menuMainText}>
                      SheetScience
                    </Typography>
                  </Box>
                  <Box>
                    {< PetsIcon fontSize = 'large' sx = {{color: "#FFA500"}}/>}
                    <Typography variant="h6" className={menuClasses.menuMainText}>
                      PetKick
                    </Typography>
                  </Box>

                </Stack>

              </Collapse>
            </Box>
          </List>

        </Grid>

        <Grid item sx={commonWidthMainMenu}>
          <List >

            <Box
              sx={{
              ...commonStyles,
              ...commonBorderColor
            }}>
              <ListItemButton onClick={handleMenu2} sx={commonBorderColor}>
                <ListItemIcon>
                  <DirectionsRunIcon fontSize='large' className={menuClasses.menuIconMain}/>
                </ListItemIcon>
                <ListItemText
                  primary=
                  {<Typography variant = "h6" className = {menuClasses.menuMainText}> Fitness & Endurance </Typography>}/> {menuItem1
                  ? <ExpandLess className={menuClasses.menuIconSecondary}/>
                  : <ExpandMore className={menuClasses.menuIconSecondary}/>}
              </ListItemButton>

              <Collapse in={menuItem2} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred"/>
                  </ListItemButton>
                </List>

              </Collapse>
            </Box>
          </List>

        </Grid>

        <Grid item sx={commonWidthMainMenu}>
          <List >

            <Box
              sx={{
              ...commonStyles,
              ...commonBorderColor
            }}>
              <ListItemButton onClick={handleMenu3} sx={commonBorderColor}>
                <ListItemIcon>
                  <MusicNoteIcon fontSize='large' className={menuClasses.menuIconMain}/>
                </ListItemIcon>
                <ListItemText
                  primary=
                  {<Typography variant = "h6" className = {menuClasses.menuMainText}> Music & Percussion </Typography>}/> {menuItem1
                  ? <ExpandLess className={menuClasses.menuIconSecondary}/>
                  : <ExpandMore className={menuClasses.menuIconSecondary}/>}
              </ListItemButton>

              <Collapse in={menuItem3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{
                    pl: 4
                  }}>
                    <ListItemIcon>
                      <StarBorder fontSize='large' className={menuClasses.menuIconMain}/>
                    </ListItemIcon>
                    <ListItemText
                      primary={< Typography variant = "h6" className = {
                      menuClasses.menuMainText
                    } > Youtube Channel </Typography>}/>
                  </ListItemButton>

                </List>
              </Collapse>
            </Box>
          </List>

        </Grid>

      </Grid>

  
    </Slide>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
        Not available yet!
      </Alert>
    </Snackbar>
    </div>
  );
};

export default Menu;