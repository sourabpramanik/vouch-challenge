import {extendTheme} from "native-base";

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
};

const color = {
    primary: {
        50: '#EEF2F6',
        100: '#CFD9E7',
        200: '#B1C1D8',
        300: '#92A9C9',
        400: '#7491B9',
        500: '#5578AA',
        600: '#446088',
        700: '#334866',
        800: '#223040',
        900: '#111822'
    },
    purple: {
        400: '#4b3b80',
      },
};

export default extendTheme({ config, color })