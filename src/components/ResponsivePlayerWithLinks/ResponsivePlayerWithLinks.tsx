import React, {useState} from "react";
import ReactPlayer from "react-player";

import styles from "./styles.module.css";

export const ResponsivePlayerWithLinks = ({url, links}) => {

    const playerRef = React.createRef()

    const [state, setState] = useState({
        links: links,
        playing: false,
        currentTime: 0
    });

    const jumpToTime = (newTime) => {
        setState({...state, playing: true});
        
        const a = newTime.split(':');
        const seconds = (+a[0] * 60 + (+a[1]));

        playerRef.current.seekTo(seconds);
    }

    let linksToRender;
    if (links) {
        linksToRender = links.map((link, key) => (
                <a className={styles.playlistItem}
                    onClick={() => jumpToTime(link.time)}
                    key={key}
                >
                    {link.time} - {link.title}
                </a>
            )
        )
    }

    return (
        <div className={styles.playerSection}>
            <div className={styles.playerWrapper}>
                <ReactPlayer className={styles.player}
                    ref={playerRef}
                    url={url}
                    playing={state.playing}
                    controls={true}
                    width='100%'
                    height='100%'
                    config={{
                    youtube: {
                        playerVars: {
                        modestbranding: 1,
                        controlsList: 'nodownload',
                        }
                    }
                    }}
                />
            </div>
            <div className={styles.playlistWrapper}>
                {linksToRender}
            </div>
        </div>
    )
}
