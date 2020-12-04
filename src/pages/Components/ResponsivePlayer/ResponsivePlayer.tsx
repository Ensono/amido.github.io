import React from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.css";

function ResponsivePlayer({url}) {
    return (
        <div className={styles.playerSection}>
            <div className={styles.playerWrapper}>
                <ReactPlayer className={styles.player}
                             url={url}
                             controls={true}
                             width='100%'
                             height='100%'
                             config={{
                                
                              }}
                />
            </div>
        </div>
    )
}

export default ResponsivePlayer;
