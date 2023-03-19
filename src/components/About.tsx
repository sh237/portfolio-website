import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#EDEDED',
        borderWidth: '10px',
        padding: '2.5%',
        borderRadius: '7px',
        opacity: 0.93,
    },
    title: {
        fontWeight: 'bold',
    },
    text: {
        color: '#4D4D4D',
        fontSize: 16,
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
          },
    },
    rootBox: {
        width: "55%",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
          },
    },
  }));

const About: React.FC = () => {
    const classes = useStyles();

    return (
        <>
        <Box p={2} className={classes.rootBox}>
            <Box display='flex' justifyContent='center' p={1}>
                <Typography variant='h5' className={classes.title} >
                    About
                </Typography>
            </Box>
            <Box display='flex' justifyContent='center' p={1} className={classes.container}>
                <Typography variant='body1' align='left' className={classes.text}>
                    長嶋隼矢と申します。<br/>
                    慶應義塾大学理工学部情報工学科杉浦孔明研究室に所属しております。<br/>研究室ではマルチモーダル言語処理について研究しています。
                    <br/>好きな言語・フレームワークはPython、Django、Pytorch、React、React Nativeです。
                </Typography>
            </Box>
        </Box>
        </>
    );
}

export default About;