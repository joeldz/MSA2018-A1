import * as React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const Title = () => (
    <AppBar position="static" >
        <Toolbar>
            <div>
                <Typography variant="display2" gutterBottom>Crypto Price Converter</Typography>
                <Typography variant="headline" gutterBottom>Check the value of any cryptocurrency</Typography>
            </div>
        </Toolbar>
    </AppBar>
);

export default Title;