import  { FC } from 'react';

interface IRouletteStartButtonProps {
  onClick: (param: boolean) => void;
}

const RouletteStartButton: FC<IRouletteStartButtonProps> = ({
  onClick
}) => {

  return (
    <div
      className="cursor-pointer"
      onClick={() => onClick(true)}
    >
      <svg width="181" height="60" viewBox="0 0 181 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_68_10342)">
          <rect x="1.5" y="1.5" width="172" height="50" rx="25" fill="url(#paint0_linear_68_10342)" stroke="url(#paint1_linear_68_10342)" stroke-width="3" />
          <path d="M49.693 16.805L51.8539 18.8859L49.693 16.805ZM61.173 15.545L64.1498 15.9171L64.4992 13.1219L61.7315 12.5974L61.173 15.545ZM60.473 21.145L59.7941 24.0672L63.0369 24.8206L63.4498 21.5171L60.473 21.145ZM54.838 22.685L53.2274 25.216L53.2526 25.232L53.2781 25.2476L54.838 22.685ZM56.763 23.735L55.4213 26.4183L55.4553 26.4353L55.4897 26.4514L56.763 23.735ZM59.003 25.03L57.3034 27.5021L57.33 27.5204L57.357 27.5381L59.003 25.03ZM60.893 27.165L58.2643 28.6108L58.2781 28.6357L58.2923 28.6604L60.893 27.165ZM59.913 35.53L57.7712 33.4294H57.7712L59.913 35.53ZM48.468 36.335L45.4761 36.1141L45.303 38.459L47.5386 39.1874L48.468 36.335ZM48.853 31.12L49.6878 28.2385L46.1336 27.2088L45.8611 30.8991L48.853 31.12ZM54.733 29.685L52.9685 32.1112L52.9939 32.1297L53.0198 32.1477L54.733 29.685ZM52.843 28.565L54.1846 25.8817H54.1846L52.843 28.565ZM50.568 27.27L48.922 29.7781L48.9396 29.7897L48.9574 29.801L50.568 27.27ZM48.643 25.135L46.0143 26.5808L46.0281 26.6057L46.0423 26.6304L48.643 25.135ZM50.873 21.81C50.873 20.3543 51.2777 19.4844 51.8539 18.8859L47.532 14.7241C45.6816 16.6456 44.873 19.1124 44.873 21.81H50.873ZM51.8539 18.8859C52.3903 18.3289 53.2023 17.915 54.663 17.915V11.915C51.9237 11.915 49.4223 12.7611 47.532 14.7241L51.8539 18.8859ZM54.663 17.915C56.5877 17.915 58.5705 18.1053 60.6145 18.4926L61.7315 12.5974C59.3421 12.1447 56.985 11.915 54.663 11.915V17.915ZM58.1962 15.1729L57.4962 20.7729L63.4498 21.5171L64.1498 15.9171L58.1962 15.1729ZM61.1519 18.2228C58.8773 17.6944 56.9697 17.34 55.713 17.34V23.34C56.183 23.34 57.4486 23.5223 59.7941 24.0672L61.1519 18.2228ZM55.713 17.34C54.8385 17.34 53.6265 17.5041 52.5931 18.3396C51.4377 19.2737 51.068 20.5755 51.068 21.67H57.068C57.068 21.7521 57.0557 21.9614 56.9443 22.2316C56.8254 22.5201 56.6272 22.7938 56.3654 23.0054C55.8803 23.3976 55.4908 23.34 55.713 23.34V17.34ZM51.068 21.67C51.068 23.6243 52.488 24.7455 53.2274 25.216L56.4486 20.154C56.3732 20.106 56.4923 20.1645 56.6506 20.3731C56.8313 20.6113 57.068 21.0601 57.068 21.67H51.068ZM53.2781 25.2476C53.9045 25.6289 54.6228 26.019 55.4213 26.4183L58.1046 21.0517C57.4098 20.7043 56.8448 20.3945 56.3978 20.1224L53.2781 25.2476ZM55.4897 26.4514C56.0741 26.7253 56.6788 27.0727 57.3034 27.5021L60.7026 22.5579C59.8338 21.9606 58.9452 21.4447 58.0363 21.0186L55.4897 26.4514ZM57.357 27.5381C57.6224 27.7123 57.9417 28.0241 58.2643 28.6108L63.5216 25.7192C62.8176 24.4392 61.8769 23.3277 60.649 22.5219L57.357 27.5381ZM58.2923 28.6604C58.5354 29.0833 58.698 29.6285 58.698 30.385H64.698C64.698 28.7148 64.3239 27.1134 63.4937 25.6696L58.2923 28.6604ZM58.698 30.385C58.698 32.0642 58.2589 32.9321 57.7712 33.4294L62.0548 37.6306C63.9471 35.7012 64.698 33.1391 64.698 30.385H58.698ZM57.7712 33.4294C57.2967 33.9131 56.471 34.35 54.838 34.35V40.35C57.5917 40.35 60.1493 39.5735 62.0548 37.6306L57.7712 33.4294ZM54.838 34.35C52.9857 34.35 51.176 34.0621 49.3974 33.4826L47.5386 39.1874C49.9134 39.9612 52.3503 40.35 54.838 40.35V34.35ZM51.4598 36.5559L51.8448 31.3409L45.8611 30.8991L45.4761 36.1141L51.4598 36.5559ZM48.0182 34.0015C50.4813 34.7151 52.6051 35.205 54.068 35.205V29.205C53.5709 29.205 52.218 28.9716 49.6878 28.2385L48.0182 34.0015ZM54.068 35.205C54.9335 35.205 56.143 35.0226 57.1536 34.1323C58.2367 33.1781 58.538 31.9098 58.538 30.91H52.538C52.538 30.7736 52.5942 30.1527 53.1874 29.6302C53.708 29.1715 54.1825 29.205 54.068 29.205V35.205ZM58.538 30.91C58.538 29.0776 57.3842 27.8748 56.4462 27.2223L53.0198 32.1477C53.074 32.1854 52.9636 32.1227 52.8296 31.9188C52.6764 31.6856 52.538 31.333 52.538 30.91H58.538ZM56.4975 27.2588C55.8165 26.7635 55.0359 26.3074 54.1846 25.8817L51.5013 31.2483C52.1434 31.5693 52.6229 31.8599 52.9685 32.1112L56.4975 27.2588ZM54.1846 25.8817C53.5382 25.5585 52.8696 25.1787 52.1786 24.739L48.9574 29.801C49.8064 30.3413 50.6544 30.8248 51.5013 31.2483L54.1846 25.8817ZM52.214 24.7619C51.9333 24.5777 51.5936 24.248 51.2437 23.6396L46.0423 26.6304C46.7657 27.8886 47.7093 28.9823 48.922 29.7781L52.214 24.7619ZM51.2716 23.6892C51.0472 23.2811 50.873 22.6909 50.873 21.81H44.873C44.873 23.4958 45.2121 25.1222 46.0143 26.5808L51.2716 23.6892ZM76.4245 20.55V23.55H79.2324L79.418 20.7482L76.4245 20.55ZM72.3645 20.55V17.55H69.3645V20.55H72.3645ZM72.3645 37V40H75.3645V37H72.3645ZM66.3795 37H63.3795V40H66.3795V37ZM66.3795 20.55H69.3795V17.55H66.3795V20.55ZM62.0745 20.55L59.0811 20.3518L58.8693 23.55H62.0745V20.55ZM62.4245 15.265V12.265H59.6166L59.4311 15.0668L62.4245 15.265ZM76.7745 15.265L79.768 15.4632L79.9798 12.265H76.7745V15.265ZM76.4245 17.55H72.3645V23.55H76.4245V17.55ZM69.3645 20.55V37H75.3645V20.55H69.3645ZM72.3645 34H66.3795V40H72.3645V34ZM69.3795 37V20.55H63.3795V37H69.3795ZM66.3795 17.55H62.0745V23.55H66.3795V17.55ZM65.068 20.7482L65.418 15.4632L59.4311 15.0668L59.0811 20.3518L65.068 20.7482ZM62.4245 18.265H76.7745V12.265H62.4245V18.265ZM73.7811 15.0668L73.4311 20.3518L79.418 20.7482L79.768 15.4632L73.7811 15.0668ZM93.755 37V40H97.3558L96.7057 36.4583L93.755 37ZM87.91 37L84.9648 37.571L85.4357 40H87.91V37ZM87.245 33.57L90.1901 32.999L89.7192 30.57H87.245V33.57ZM83.115 33.57V30.57H80.6408L80.1698 32.999L83.115 33.57ZM82.45 37V40H84.9242L85.3951 37.571L82.45 37ZM76.885 37L73.9343 36.4583L73.2841 40H76.885V37ZM80.875 15.265V12.265H78.3756L77.9243 14.7233L80.875 15.265ZM89.765 15.265L92.7157 14.7233L92.2644 12.265H89.765V15.265ZM86.58 29.475V32.475H90.09L89.5434 29.0078L86.58 29.475ZM85.355 21.705L88.3184 21.2378L87.9191 18.705H85.355V21.705ZM85.11 21.705V18.705H82.5459L82.1466 21.2378L85.11 21.705ZM83.885 29.475L80.9216 29.0078L80.375 32.475H83.885V29.475ZM93.755 34H87.91V40H93.755V34ZM90.8551 36.429L90.1901 32.999L84.2998 34.141L84.9648 37.571L90.8551 36.429ZM87.245 30.57H83.115V36.57H87.245V30.57ZM80.1698 32.999L79.5048 36.429L85.3951 37.571L86.0601 34.141L80.1698 32.999ZM82.45 34H76.885V40H82.45V34ZM79.8357 37.5417L83.8257 15.8067L77.9243 14.7233L73.9343 36.4583L79.8357 37.5417ZM80.875 18.265H89.765V12.265H80.875V18.265ZM86.8143 15.8067L90.8043 37.5417L96.7057 36.4583L92.7157 14.7233L86.8143 15.8067ZM89.5434 29.0078L88.3184 21.2378L82.3916 22.1722L83.6166 29.9422L89.5434 29.0078ZM85.355 18.705H85.11V24.705H85.355V18.705ZM82.1466 21.2378L80.9216 29.0078L86.8484 29.9422L88.0734 22.1722L82.1466 21.2378ZM83.885 32.475H86.58V26.475H83.885V32.475ZM109.857 25.415L107.131 24.1625V24.1625L109.857 25.415ZM108.002 27.76L106.081 25.4553L104.537 26.7422L105.14 28.6598L108.002 27.76ZM110.907 37V40H114.995L113.769 36.1002L110.907 37ZM104.432 37L101.54 37.8003L102.149 40H104.432V37ZM102.262 29.16L105.153 28.3597L104.544 26.16H102.262V29.16ZM101.457 29.16V26.16H98.4566V29.16H101.457ZM101.457 37V40H104.457V37H101.457ZM95.5766 37H92.5766V40H95.5766V37ZM95.5766 15.265V12.265H92.5766V15.265H95.5766ZM108.807 16.91L106.663 19.0084L106.674 19.0199L106.685 19.0313L108.807 16.91ZM103.662 24.96L106.081 26.7341L106.081 26.7341L103.662 24.96ZM103.662 21.145L101.189 22.8446L101.215 22.8822L101.242 22.9191L103.662 21.145ZM101.457 20.585V17.585H98.4566V20.585H101.457ZM101.457 25.485H98.4566V28.485H101.457V25.485ZM107.452 22.16C107.452 23.1869 107.292 23.8104 107.131 24.1625L112.583 26.6675C113.214 25.2929 113.452 23.7464 113.452 22.16H107.452ZM107.131 24.1625C106.947 24.5624 106.629 24.9985 106.081 25.4553L109.922 30.0647C111.054 29.1215 111.973 27.9943 112.583 26.6675L107.131 24.1625ZM105.14 28.6598L108.045 37.8998L113.769 36.1002L110.864 26.8602L105.14 28.6598ZM110.907 34H104.432V40H110.907V34ZM107.323 36.1997L105.153 28.3597L99.3703 29.9603L101.54 37.8003L107.323 36.1997ZM102.262 26.16H101.457V32.16H102.262V26.16ZM98.4566 29.16V37H104.457V29.16H98.4566ZM101.457 34H95.5766V40H101.457V34ZM98.5766 37V15.265H92.5766V37H98.5766ZM95.5766 18.265H103.697V12.265H95.5766V18.265ZM103.697 18.265C105.637 18.265 106.389 18.729 106.663 19.0084L110.951 14.8116C109.077 12.8977 106.423 12.265 103.697 12.265V18.265ZM106.685 19.0313C106.976 19.3224 107.452 20.1258 107.452 22.16H113.452C113.452 19.3875 112.83 16.6909 110.928 14.7887L106.685 19.0313ZM102.367 28.485C103.522 28.485 105.055 28.1325 106.081 26.7341L101.242 23.1859C101.467 22.8792 101.758 22.6792 102.018 22.5735C102.251 22.4792 102.395 22.485 102.367 22.485V28.485ZM106.081 26.7341C106.951 25.5476 107.047 24.0478 107.047 23.07H101.047C101.047 23.2285 101.041 23.3542 101.033 23.4509C101.025 23.5485 101.015 23.6044 101.011 23.6262C101.006 23.6494 101.01 23.6178 101.038 23.548C101.065 23.4789 101.125 23.3458 101.242 23.1859L106.081 26.7341ZM107.047 23.07C107.047 22.0891 106.957 20.565 106.081 19.3709L101.242 22.9191C101.121 22.7534 101.06 22.6161 101.033 22.5479C101.007 22.4788 101.003 22.4493 101.009 22.4771C101.014 22.5032 101.024 22.5644 101.032 22.6683C101.041 22.7712 101.047 22.9039 101.047 23.07H107.047ZM106.134 19.4454C105.159 18.0277 103.656 17.585 102.402 17.585V23.585C102.383 23.585 102.198 23.5829 101.936 23.4664C101.647 23.3383 101.38 23.1212 101.189 22.8446L106.134 19.4454ZM102.402 17.585H101.457V23.585H102.402V17.585ZM98.4566 20.585V25.485H104.457V20.585H98.4566ZM101.457 28.485H102.367V22.485H101.457V28.485ZM125.507 20.55V23.55H128.314L128.5 20.7482L125.507 20.55ZM121.447 20.55V17.55H118.447V20.55H121.447ZM121.447 37V40H124.447V37H121.447ZM115.462 37H112.462V40H115.462V37ZM115.462 20.55H118.462V17.55H115.462V20.55ZM111.157 20.55L108.163 20.3518L107.951 23.55H111.157V20.55ZM111.507 15.265V12.265H108.699L108.513 15.0668L111.507 15.265ZM125.857 15.265L128.85 15.4632L129.062 12.265H125.857V15.265ZM125.507 17.55H121.447V23.55H125.507V17.55ZM118.447 20.55V37H124.447V20.55H118.447ZM121.447 34H115.462V40H121.447V34ZM118.462 37V20.55H112.462V37H118.462ZM115.462 17.55H111.157V23.55H115.462V17.55ZM114.15 20.7482L114.5 15.4632L108.513 15.0668L108.163 20.3518L114.15 20.7482ZM111.507 18.265H125.857V12.265H111.507V18.265ZM122.863 15.0668L122.513 20.3518L128.5 20.7482L128.85 15.4632L122.863 15.0668Z" fill="white" />
          <path d="M47.873 21.81C47.873 19.7333 48.4797 18.065 49.693 16.805C50.9063 15.545 52.563 14.915 54.663 14.915C56.7863 14.915 58.9563 15.125 61.173 15.545L60.473 21.145C58.163 20.6083 56.5763 20.34 55.713 20.34C54.6163 20.34 54.068 20.7833 54.068 21.67C54.068 22.02 54.3247 22.3583 54.838 22.685C55.3747 23.0117 56.0163 23.3617 56.763 23.735C57.5097 24.085 58.2563 24.5167 59.003 25.03C59.7497 25.52 60.3797 26.2317 60.893 27.165C61.4297 28.0983 61.698 29.1717 61.698 30.385C61.698 32.6017 61.103 34.3167 59.913 35.53C58.723 36.7433 57.0313 37.35 54.838 37.35C52.668 37.35 50.5447 37.0117 48.468 36.335L48.853 31.12C51.3497 31.8433 53.088 32.205 54.068 32.205C55.048 32.205 55.538 31.7733 55.538 30.91C55.538 30.4667 55.2697 30.0583 54.733 29.685C54.2197 29.3117 53.5897 28.9383 52.843 28.565C52.0963 28.1917 51.338 27.76 50.568 27.27C49.8213 26.78 49.1797 26.0683 48.643 25.135C48.1297 24.2017 47.873 23.0933 47.873 21.81ZM76.4245 20.55H72.3645V37H66.3795V20.55H62.0745L62.4245 15.265H76.7745L76.4245 20.55ZM93.755 37H87.91L87.245 33.57H83.115L82.45 37H76.885L80.875 15.265H89.765L93.755 37ZM86.58 29.475L85.355 21.705H85.11L83.885 29.475H86.58ZM110.452 22.16C110.452 23.4667 110.253 24.5517 109.857 25.415C109.46 26.2783 108.842 27.06 108.002 27.76L110.907 37H104.432L102.262 29.16H101.457V37H95.5766V15.265H103.697C106.03 15.265 107.733 15.8133 108.807 16.91C109.903 18.0067 110.452 19.7567 110.452 22.16ZM102.367 25.485C102.973 25.485 103.405 25.31 103.662 24.96C103.918 24.61 104.047 23.98 104.047 23.07C104.047 22.1367 103.918 21.495 103.662 21.145C103.405 20.7717 102.985 20.585 102.402 20.585H101.457V25.485H102.367ZM125.507 20.55H121.447V37H115.462V20.55H111.157L111.507 15.265H125.857L125.507 20.55Z" fill="url(#paint2_linear_68_10342)" />
        </g>
        <defs>
          <filter id="filter0_d_68_10342" x="0" y="0" width="181" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="3" dy="4" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_10342" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_68_10342" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_68_10342" x1="0.0346814" y1="26.5002" x2="175.004" y2="26.5002" gradientUnits="userSpaceOnUse">
            <stop stop-color="#DFB55A" />
            <stop offset="0.16" stop-color="#E4BF6E" />
            <stop offset="0.28" stop-color="#F1E29E" />
            <stop offset="0.46" stop-color="#E4C074" />
            <stop offset="0.59" stop-color="#F7F0AC" />
            <stop offset="0.77" stop-color="#DBC27D" />
            <stop offset="1" stop-color="#E7D393" />
          </linearGradient>
          <linearGradient id="paint1_linear_68_10342" x1="87.5209" y1="52.9836" x2="87.5209" y2="-0.0335694" gradientUnits="userSpaceOnUse">
            <stop stop-color="#147229" />
            <stop offset="1" stop-color="#82B98E" />
          </linearGradient>
          <linearGradient id="paint2_linear_68_10342" x1="86.5094" y1="46.9879" x2="86.5094" y2="7.9753" gradientUnits="userSpaceOnUse">
            <stop stop-color="#147229" />
            <stop offset="1" stop-color="#82B98E" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
};

export default RouletteStartButton;