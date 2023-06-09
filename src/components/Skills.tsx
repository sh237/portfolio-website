import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  cardClass: {
    margin: '0.5%',
    backgroundColor: '#EDEDED',
    opacity: 0.94,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: '#2E2E2E',
    [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        color: '#2E2E2E',
      },
  },
  textSecondary:  {
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
        fontSize: 10,
        },
    },
  rootBox: {
    justifyContent: 'center',
    width: "60%",
    [theme.breakpoints.down('sm')]: {
        width: "90%",
      },
  }
}));

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2} className={classes.rootBox}>
        <Box p={1} >
          <Typography variant='h5' className={classes.title} >
            Skills
          </Typography>
        </Box>
            <Box p={1} >
                <Card className={classes.cardClass}>
                    <CardContent>
                    <Typography variant="h6" className={classes.text}>
                        言語
                    </Typography>
                    <Typography color="textSecondary" className={classes.textSecondary}>
                        Python / JavaScript / TypeScript / Java / C# / C
                    </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.cardClass}>
                    <CardContent>
                    <Typography variant="h6" className={classes.text}>
                        フレームワーク
                    </Typography>
                    <Typography color="textSecondary" className={classes.textSecondary}>
                        Django / Pytorch / React / React Native / Node.js / Express 
                    </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.cardClass}>
                    <CardContent>
                    <Typography variant="h6" className={classes.text}>
                        データベース
                    </Typography>
                    <Typography color="textSecondary" className={classes.textSecondary}>
                        PostgreSQL / SQLite / MongoDB / firebase
                    </Typography>
                    </CardContent>
                </Card>
            </Box>
      </Box>
    </>
  );
}

export default Skills;