import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

// 画像ファイルをインポート
import ImageFile from '../static/images/my_avatar.jpg'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    top: theme.spacing(3),
    width: theme.spacing(30),
    height: theme.spacing(30),
    border: 'solid 5px #D6D6D6',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
  name: {
    paddingTop: theme.spacing(4),
    shadow: '0 0 10px #000',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  }
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2} >
        <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='Taro Tanaka'
            src={ImageFile}
            className={classes.large}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' className={classes.name}>
            長嶋 隼矢<br />
            Shunya Nagashima
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body1'>
            Web Engineer, ML Engineer
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default MyAvatar;