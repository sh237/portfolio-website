import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 770,
    backgroundColor: '#EDEDED',
    padding: '0.5%',
    color: '#2E2E2E',
    opacity: 0.94,
  },
  title: {
    fontWeight: 'bold',
  },
  rootBox: {
    justifyContent: 'center',
    width: "70%",
    [theme.breakpoints.down('sm')]: {
        width: "90%",
      },
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2} className={ classes.rootBox } >
        <Box p={1} >
          <Typography variant='h5' className={ classes.title } >
            Works
          </Typography>
        </Box>
        <Box p={1} >
          <List className={classes.root}>
            <ListItem>
              <ListItemLink href='https://github.com/sh237/LocationTrackingAppEjected'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='LocationTrackingAppEjected' secondary='旅・日常生活の移動経路保存アプリ。撮った写真も地図上に表示され、記録できます。フロントエンドはReact Native、バックエンドはDjango(REST Framework)。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/sh237/uno-online-multiplay'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='uno-online-multiplay' secondary='ALGORI(UNOのアルゴリズムを競う大会)の参加者ためにGUIを提供するアプリ。フロントエンドはReact、バックエンドはNode.js(Express, socket.io)。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/sh237/TutorStudentContactApp'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='TutorStudentContactApp' secondary='家庭教師のアルバイトにおいて、生徒と予定の共有をスムーズにするために作ったアプリ。フロントエンド、バックエンド共にDjango。一部jQueryを使用。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/sh237/DjangoClassifyAI'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='DjangoClassifyAI' secondary='機械学習のAPIを用いず、独自のモデルで学習したImage to Textタスクのモデルによる推論などができる。フロントエンド、バックエンド共にDjango。一部jQueryを使用。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='https://github.com/sh237/interactive-video-generation-system'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='interactive-video-generation-system' secondary='チャット形式で知りたい単語を入力すると、その解説動画を作成してくれるアプリ。chatGPTのAPI、アバター動画生成を行うD-IDのAPIを用いている。フロントエンドはReact、バックエンドはfirebase。' />
              </ListItemLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;