import React from 'react';

const WomanIcon = props => {
    const styles = {
      path: {
        fill: "#757575",
      },
    };

    return (
        <svg width="22" height="22" viewBox="0 0 1024 1024">
          <path
            style={styles.path}
            d="M576 96c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"
          ></path>
          <path
            style={styles.path}
            d="M719 512l49-35.5-133.286-206.116c-5.92-8.98-15.958-14.384-26.714-14.384h-256c-10.756 0-20.792 5.404-26.714 14.384l-133.286 206.116 49 35.5 110.644-143.596 38.458 89.74-134.102 245.856h122.666l21.334 320h64v-320h32v320h64l21.334-320h122.666l-134.104-245.858 38.458-89.74 110.646 143.598z"></path>
        </svg>
      );
    };

export default WomanIcon;