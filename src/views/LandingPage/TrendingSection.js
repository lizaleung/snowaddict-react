import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui core components
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';


// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import InfoArea from "../../components/InfoArea/InfoArea.js";

import landingPageSections from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(landingPageSections);

export default function Trending() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Trending People and Gear</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.title}>People</h2>
            <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography
                  primary={ <Typography type="body2" style={{ color: '#000' }}>
                            Shawn White
                            </Typography> }
                  secondary={ <Typography type="body2" style={{ color: '#999' }}>
                            X game champion
                            </Typography> }
                 />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography
                  primary={ <Typography type="body2" style={{ color: '#000' }}>
                            Elon Musk
                            </Typography> }
                  secondary={ <Typography type="body2" style={{ color: '#999' }}>
                            Legendary Rocket but Noob Snowboarder
                            </Typography> }
                 />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography
                  primary={ <Typography type="body2" style={{ color: '#000' }}>
                            Chloe Kim
                            </Typography> }
                  secondary={ <Typography type="body2" style={{ color: '#999' }}>
                            X game champion
                            </Typography> }
                 />
              </ListItem>
            </List>



          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h2 className={classes.title}>Gear</h2>


          <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography
                  primary={ <Typography type="body2" style={{ color: '#000' }}>
                            Stratos
                            </Typography> }
                  secondary={ <Typography type="body2" style={{ color: '#999' }}>
                            Jones
                            </Typography> }
                 />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography
                  primary={ <Typography type="body2" style={{ color: '#000' }}>
                            Archetype
                            </Typography> }
                  secondary={ <Typography type="body2" style={{ color: '#999' }}>
                            Endeavor
                            </Typography> }
                 />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText disableTypography
                  primary={ <Typography type="body2" style={{ color: '#000' }}>
                            Klassy
                            </Typography> }
                  secondary={ <Typography type="body2" style={{ color: '#999' }}>
                            Gnu
                            </Typography> }
                 />
              </ListItem>
            </List>


          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}
