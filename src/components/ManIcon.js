import React from 'react';

  const ManIcon = props => {
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
          d="M576 256h-192c-35.346 0-64 28.654-64 64v320h64v384h80v-384h32v384h80v-384h64v-320c0-35.346-28.652-64-64-64z"></path>
      </svg>
    );
  };
  

export default ManIcon;