import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import{ Paper, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        alignContent: "center",
        alignItems: "center",
        justify: "center",
        paddingTop: 65
    },
    media: {
        height: 350,
        margin: 0,
        maxWidth: "100%",
        padding: 0,

        // paddingTop: '56.25%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

  }));
const Projects = props => {
    const classes = useStyles();
    const { history} = props

    const data = [
        {id: 1, name: "SONIDO TROPICO SANTO DOMINGO", image: "https://pro2-bar-s3-cdn-cf.myportfolio.com/85c14576433a7f087cf8c29eebe9ddb9/87a63727-3a94-4673-9d68-a52fe59009e5_car_1x1.png?h=3dac36eefab36cadc3ac296980034da1"
        , onClick: () => history.push(`/projects/1`)}, 
        {id: 2, name: "NIGHT OF THE JACKAL 2016", image: "https://pro2-bar-s3-cdn-cf1.myportfolio.com/85c14576433a7f087cf8c29eebe9ddb9/c10df7d3-4e2c-4850-a696-56bde2b725bb_car_1x1.jpg?h=55fc98bf703b3bf06f0d303255875f9d"
        , onClick: () => history.push(`/projects/2`)},
        {id: 3, name: "PERMISSION TO RELAX", image: "https://pro2-bar-s3-cdn-cf6.myportfolio.com/85c14576433a7f087cf8c29eebe9ddb9/7e767093-be78-4627-9064-1a1eea039337_car_1x1.jpg?h=a6bf063b887ae7977035406f664ccfb9"
        , onClick: () => history.push(`/projects/3`)}, 
        {id: 4, name: "The Pineapple Ball 2016", image: "https://pro2-bar-s3-cdn-cf.myportfolio.com/85c14576433a7f087cf8c29eebe9ddb9/1c840e15201c459a7d6c1c4bc0accdd36f7e702d58e4193494a04321df96fce0a28717272c36f50c_car_1x1.png?h=8b12a3b116980b4282b2689c078e7dde&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RzL29yaWdpbmFsL2U5OGQyMDQyNzU5NjUxLlkzSnZjQ3d6TWpZNExESTFOVGdzTVRZc01BLnBuZw=="
        , onClick: () => history.push(`/projects/4`)}, 
        {id: 5, name: "The Colony Honey Co.", image: "https://pro2-bar-s3-cdn-cf5.myportfolio.com/85c14576433a7f087cf8c29eebe9ddb9/6e03ed6273608183b2b80f65d8fe0401b7e2bef4183191b1d83631795a445642c08fb31d207df131_rwc_316x-373x4863x4863x4863.jpg?h=8f9d8a7b6c220795d6f2881ad050c3fe&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RzL29yaWdpbmFsL2UwMjBkMzQyNzYzMDUxLlkzSnZjQ3cwTURrNExETXlNRGNzTmprNExEWTVPQS5qcGc="
        , onClick: () => history.push(`/projects/5`)}, 
        {id: 6, name: "Bright Island Outreach - Cotui", image: "https://pro2-bar-s3-cdn-cf2.myportfolio.com/85c14576433a7f087cf8c29eebe9ddb9/302e1749a825ffa21fb2ede90e78bb70e5f14d84fab60f141121bf97a416496b004eac7f505355d6_car_1x1.png?h=834c5136ae56678c65bef53de247e387&url=aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3Byb2plY3RzL29yaWdpbmFsLzNiMDAyYjQyNzU4MjM1LlkzSnZjQ3cyTURFc05EY3dMREFzTmpVLnBuZw=="
        , onClick: () => history.push(`/projects/6`)}
      ] 
      console.log(data)

    return (
        <Grid container  className={classes.root}>
            {data.map((item) => {
                return(
                <Grid item className={classes.media} xs={12} sm={6} m={4}>
                <React.Fragment key={item.id}>
                    <Card className={classes.media} onClick={item.onClick}>
                        <CardMedia
                            className={classes.media}
                            image={item.image}
                            title={item.title}
                        />
                    </Card> 
                </React.Fragment>
                </Grid>
                )
            })} 
       </Grid>
    )
}
export default Projects