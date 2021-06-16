import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import RoomIcon from '@material-ui/icons/Room';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import styles from '../../styles/Organisation.module.css'
import Link from 'next/link'

const Organisation = ({name, viewAll}) => {
    return (
        <div className={styles.organisation}>
            <div className={styles.container}>
                <div className={styles.sectionField}>
                    <span className={styles.sectionTitle}>{name}</span>
                    {
                        viewAll && 
                        <Link href="/desc" className={styles.sectionViewAll}>View All</Link>
                    }
                </div>
                <div className={styles.card}>
                    <div className={styles.cardRow}>
                        <Card className={styles.cardRoot}>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://upload.wikimedia.org/wikipedia/commons/1/15/Buddhist_Temple_on_No._5_Road%2C_Richmond%2C_British_Columbia%2C_Canada.jpg'
                                title="Paella dish"
                            />
                            <CardContent
                                className={styles.cardContents}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.cardLocation}>
                                <RoomIcon 
                                    className={styles.locationIcon}
                                />
                                <a href="#" className={styles.locationTitle}>
                                    WETHERILL PARK,NSW AUSTRALIA
                                </a>
                            </div>
                            <CardActions 
                                disableSpacing
                                className={styles.cardActions}
                            >
                                <Tooltip title="Share" arrow>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Favorites" arrow>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Donate" arrow>
                                    <IconButton aria-label="donate">
                                        <MonetizationOnIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={styles.cardRow}>
                        <Card className={styles.cardRoot}>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://upload.wikimedia.org/wikipedia/commons/1/15/Buddhist_Temple_on_No._5_Road%2C_Richmond%2C_British_Columbia%2C_Canada.jpg'
                                title="Paella dish"
                            />
                            <CardContent
                                className={styles.cardContents}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.cardLocation}>
                                <RoomIcon 
                                    className={styles.locationIcon}
                                />
                                <a href="#" className={styles.locationTitle}>
                                    WETHERILL PARK,NSW AUSTRALIA
                                </a>
                            </div>
                            <CardActions 
                                disableSpacing
                                className={styles.cardActions}
                            >
                                <Tooltip title="Share" arrow>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Favorites" arrow>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Donate" arrow>
                                    <IconButton aria-label="donate">
                                        <MonetizationOnIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={styles.cardRow}>
                        <Card className={styles.cardRoot}>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://upload.wikimedia.org/wikipedia/commons/1/15/Buddhist_Temple_on_No._5_Road%2C_Richmond%2C_British_Columbia%2C_Canada.jpg'
                                title="Paella dish"
                            />
                            <CardContent
                                className={styles.cardContents}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.cardLocation}>
                                <RoomIcon 
                                    className={styles.locationIcon}
                                />
                                <a href="#" className={styles.locationTitle}>
                                    WETHERILL PARK,NSW AUSTRALIA
                                </a>
                            </div>
                            <CardActions 
                                disableSpacing
                                className={styles.cardActions}
                            >
                                <Tooltip title="Share" arrow>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Favorites" arrow>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Donate" arrow>
                                    <IconButton aria-label="donate">
                                        <MonetizationOnIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={styles.cardRow}>
                        <Card className={styles.cardRoot}>
                            <CardMedia
                                className={styles.cardMedia}
                                image='https://upload.wikimedia.org/wikipedia/commons/1/15/Buddhist_Temple_on_No._5_Road%2C_Richmond%2C_British_Columbia%2C_Canada.jpg'
                                title="Paella dish"
                            />
                            <CardContent
                                className={styles.cardContents}
                            >
                                <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <div className={styles.cardLocation}>
                                <RoomIcon 
                                    className={styles.locationIcon}
                                />
                                <a href="#" className={styles.locationTitle}>
                                    WETHERILL PARK,NSW AUSTRALIA
                                </a>
                            </div>
                            <CardActions 
                                disableSpacing
                                className={styles.cardActions}
                            >
                                <Tooltip title="Share" arrow>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Favorites" arrow>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Donate" arrow>
                                    <IconButton aria-label="donate">
                                        <MonetizationOnIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Organisation
