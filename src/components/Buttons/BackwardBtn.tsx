import React from 'react';
import { IconButton, ButtonBaseProps } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';

const BackBtn: React.FunctionComponent<ButtonBaseProps> = () => {
    return (
        <IconButton aria-label="forward">
            <ArrowBackRounded />
        </IconButton>
    );
};

export default BackBtn;
