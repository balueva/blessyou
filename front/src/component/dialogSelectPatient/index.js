import React, { useState, useEffect } from 'react';
import { Modal, Typography, Button, List, ListItem, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

import { DialogAddPatient } from '../dialogAddPatient/dialogAddPatient';

import {
    greenGradientBackground, greyGradientBackground,
    blueColor, greyColor, modalStyle, buttonStyle, greenColor,
} from '../../styleConst';

const textStyle = {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px'
};

const patients = [
    {
        id: '1', name: 'Любимый пациент', isActive: true
    },
    {
        id: '2', name: 'Доченька любимого пациента', isActive: false
    }
];

const useStyles = makeStyles((theme) => ({
    captionBox: {
        display: 'flex',
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(1)
    },
    captionIcon: {
        margin: 'auto 0',
        color: blueColor
    },
    caption: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '20px',
        lineHeight: '30px',
        color: greyColor,
        marginLeft: theme.spacing(1)
    },
    notificationText: {
        ...textStyle,
        color: blueColor,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    listStyle: {
        marginBottom: theme.spacing(3)
    },
    listItemStyle: {
        ...textStyle,
        color: greyColor,
        background: '#F2F7FA',
        borderBottom: '0.75px solid #C4C4C4',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    selectedPatient: {
        background: greenColor,
        color: 'white',
        '&:hover': {
            background: greenColor,
        }
    },
    btnSelect: {
        ...buttonStyle,
        background: greenGradientBackground
    },
    btnAdd: {
        ...buttonStyle,
        background: greenGradientBackground,
        marginLeft: theme.spacing(4.5)
    },
    btnCancel: {
        ...buttonStyle,
        background: greyGradientBackground,
        marginLeft: theme.spacing(4.5)
    }
}));

export const DialogSelectPatient = ({ open, onClose }) => {

    const [selectedPatient, setSelectedPatient] = useState('');
    const [openDialogAddPatient, setOpenDialogAddPatient] = useState(false);


    useEffect(() => {
        if (open)
            setSelectedPatient('');
    }, [open]);

    const classes = useStyles();


    const onSelectItemClick = (id) => {
        setSelectedPatient(id);
    }

    const onAddPatientClick = () => {
        setOpenDialogAddPatient(true);
    }

    const onCloseDialogAddPatient = () => {
        setOpenDialogAddPatient(false);
    }

    return (
        <>
            <Modal open={open}>
                <Box sx={{ ...modalStyle, width: 900 }}>
                    <Box className={classes.captionBox}>
                        <AutorenewIcon className={classes.captionIcon} />
                        <Typography className={classes.caption}>
                            Выбор пациента
                        </Typography>
                    </Box>
                    <Divider></Divider>
                    <Typography className={classes.notificationText}>
                        Обратите внимание, что дальнейшие действия будут производиться от имени выбранного пациента
                    </Typography >
                    <List className={classes.listStyle}>
                        {
                            patients.map((item) => (
                                <ListItem className={`${classes.listItemStyle} ${item.id === selectedPatient && classes.selectedPatient}`} key={item.id}
                                    button={true} onClick={() => onSelectItemClick(item.id)}>
                                    {item.isActive ? <CheckIcon /> : <></>}
                                    <Typography className={classes.patient}>
                                        {item.name}
                                    </Typography>
                                </ListItem>
                            ))
                        }
                    </List>
                    <Button className={classes.btnSelect} disabled={selectedPatient === ''}
                        onClick={() => onClose(true)}>
                        <CheckIcon />ВЫБРАТЬ
                    </Button>
                    <Button className={classes.btnAdd} onClick={onAddPatientClick}>
                        <AddIcon />ДОБАВИТЬ
                    </Button>
                    <Button className={classes.btnCancel} onClick={() => onClose(false)}>ОТМЕНА</Button>
                </Box>
            </Modal>
            <DialogAddPatient open={openDialogAddPatient} onClose={onCloseDialogAddPatient}></DialogAddPatient>
        </>
    )
}

