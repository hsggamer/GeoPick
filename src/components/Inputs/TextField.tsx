import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import theme from '../../theme';

export default function TextFields() {
    return (
        <div>
            <TextField id="outlined" name="contained" label="ANYTEXT" variant="outlined" color="primary" />
        </div>
    );
}
