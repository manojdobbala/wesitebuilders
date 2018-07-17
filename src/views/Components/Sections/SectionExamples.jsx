import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import exampleStyle from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

import efitbay from "assets/img/efitbay.png";
import nicolette from "assets/img/nicoletteItServices.png";
import rootInsure from "assets/img/rootInsure.png";
import hunt2save from "assets/img/hunt2save.png";

class SectionExamples extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <a href="www.hunt2save.com" className={classes.link}>
                                <img
                                    src={hunt2save}
                                    alt="..."
                                    className={
                                        classes.imgRaised +
                                        " " +
                                        classes.imgRounded +
                                        " " +
                                        classes.imgFluid
                                    }
                                />
                                <Button color="primary" size="lg" simple>
                                    View Hunt2save page
                                </Button>
                            </a>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <a href="nicolette" className={classes.link}>
                                <img
                                    src={nicolette}
                                    alt="..."
                                    className={
                                        classes.imgRaised +
                                        " " +
                                        classes.imgRounded +
                                        " " +
                                        classes.imgFluid
                                    }
                                />
                                <Button color="primary" size="lg" simple>
                                    View Nicolette IT Services page
                                </Button>
                            </a>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <a href="www.rootinsure.com" className={classes.link}>
                                <img
                                    src={rootInsure}
                                    alt="..."
                                    className={
                                        classes.imgRaised +
                                        " " +
                                        classes.imgRounded +
                                        " " +
                                        classes.imgFluid
                                    }
                                />
                                <Button color="primary" size="lg" simple>
                                    View Root Insure page
                                </Button>
                            </a>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <a href="www.efitbay.com" className={classes.link}>
                                <img
                                    src={efitbay}
                                    alt="..."
                                    className={
                                        classes.imgRaised +
                                        " " +
                                        classes.imgRounded +
                                        " " +
                                        classes.imgFluid
                                    }
                                />
                                <Button color="primary" size="lg" simple>
                                    View efitbay page
                                </Button>
                            </a>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(exampleStyle)(SectionExamples);
