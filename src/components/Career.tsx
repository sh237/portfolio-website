import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        shadow: '0 0 10px #000',
        fontWeight: 'bold',
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3B3B3B',
    },
    root: {
        display: 'flex',
        backgroundColor: '#EDEDED',
        borderRadius: 1,
        opacity: 0.94,
    },
    rootBox: {
        width: 650,
    },
  }));
  
  const Career: React.FC = () => {
    const classes = useStyles();
  
    return (
        <>
        <Box className={classes.rootBox}>
            <Box className={classes.titleBox} >
                <Typography variant='h5' className={classes.title}>
                    Career
                </Typography>
            </Box>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.3,
                    },
                }}
                className={classes.root}
            >
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>
                            2020/04
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>
                            慶應義塾大学理工学部入学。
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>
                            2020/10~2023/03
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>
                            家庭教師のアルバイトを行う。
                        </Typography>
                        <Typography variant='body2' color='textPrimary'>
                            大学受験生の数学、物理、英語の授業を行った。
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>
                            2020/11~
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>
                            Djangoでwebアプリを作成する。<br/>
                        </Typography>
                        <Typography variant='body2' color='textPrimary'>
                            独学で学びつつ、様々なアプリを作成する。
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>
                            2020/10~2023/03
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>
                            N Code Laboでアルバイトを行う。
                        </Typography>
                        <Typography variant='body2' color='textPrimary'>
                            Pythonでのwebアプリ開発、機械学習やUnityでのゲーム開発など幅広い内容を中高生に教える。
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography className={classes.text}>
                            2022/02~2023/03
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.text}>
                            Reactでwebアプリを作成する。
                        </Typography>
                        <Typography variant='body2' color='textPrimary'>
                            チームでの開発も行った。
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
        </>
      );
    }

export default Career;