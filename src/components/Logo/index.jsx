import React from 'react';
// import { Link } from 'dva/router';
import styles from './index.module.scss';

function Logo(props) {
  const {style, visible} = props;
  return (
    <div
      className={styles.wrap}
      style={style}
    >
      <div style={{
        display:'flex',
        cursor: 'default'
      }}>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4VJREFUeNrsmk9o01Acx79pk3TW4op/J8yxQ6fzohVlsJNuHgQR3BB28VAPIkzQTQ87KDLBMS/zHwiCCLrDQC9uIlPwDyqMTg9zEz1pHatTnE5mGbitadL4XtO06dqma1GT1P7gl5f38hry6e/3e+/3ksdAlSOymxzbibYRdcPcMkG0l+hlXGdCtIGJQ3jJsZ9oNawlFKiZwIwxcUuMWhBCC7PNFncnq0Ig/uztFMQH64vPZnFrJKxiQ5FICaQEUgLRFzafzj0HJLilIGw2G1iWjSnHcYlzVe12e8rvIhLwcRqY/AkMjwNDAUCUDATZXm1HXWUFAoFA7GE5jofDwYPn+RiQUsqkRBqMVmYXgL5XwPmHCpwhruV0OuHxeCBJEgRBSNNIRClFUcx6jxVlQOtOINAFXGoBljsMihEVJhrNBhOJqSSJuvfhiT+07wb8HcBql0HBvtgy6sNTVetCDCZ3MGypBB6TjG+Ny6BRK6ebCRQqoutmqng3AE9OAC7HPwh2PZjBl1/io5gdLGcDxzKkLpN6FK5lEmrXE1fi2JyW6W4Gjt82AESFablTo296soTz1cvo2MOgtiJ7v2MNwIVHQHDGpBNiVAZu+hls7gTO3NPve2qvRWb2rgfA6YHs1w/WAQ7WAiBUuslkOBLMfI3OK421JgJxO4FD9YrS88Vy7YVOFlFlQLBng3h2UhlWqbRNAg0XgdBcss/gW2BBkFDGp6czNetMYpGmrUkIdZ6gbVqZmgVGg2LGeaZqpYljJJN7UYjIEjMAQ0AG3gBjk8k6Pb81nNpnrSuKmlXzibRG1MB8mjFJjNBYoDGhuhMF08YHlUbPPKIiTWc0jfH1zYdvJgFRYRZbIfG8JL4P75hOgZBlOXE+FGDNA6InPu93VDh/EbfiwTBMTKnQck5g4B83OQgN+P5WkJWmi6w0pxAOh9Ms0veagyCaxLV2bVTK5++T9f1e7eSoZM102RwWwgmQiMSg52n+ufzfA9kEdO5b2hKAwtBRi5Dgxkg5PofyH0wNfx2kXZy9+2rHVX+5MQurPwnTdM5BAr2w/9Y0L+gozN2j9oyzv6VA1HyMJpqFwJjulWmhMHnFiDZ3yiUTP5JDbyFC33edvb/0/vRjqIwikNJnhRJICeQ/AgkVAccEBblSBCC9RbSpRtnv1BxvsCIE3eYUYhJNyY1nPgtYhwKkbDz7LcAAHQVlX2cEG0oAAAAASUVORK5CYII=' />
        {
          visible &&
          <div className={styles.title}>
            <span
              style={{
                lineHeight: '24px',
                fonFamily: 'MicrosoftYaHei',
                fontSize: '18px'
              }}
            >阿里云RPA</span>
            <i
              style={{
                lineHeight: '19px',
                fonFamily: 'MicrosoftYaHei',
                fontSize: '14px'
              }}
            >测试站</i>
          </div>
        }
      </div>
    </div>
  );
}

export default Logo;