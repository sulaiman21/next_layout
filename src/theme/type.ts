type BlackAndWhiteColorOptions = {
    white: string;
    black: string;
    line: string;
    background: string;
    bodyText: string;
    title: string;
    subTitle: string;
    lightBlack: string;
    lightGray: string;
    lightestGray: string;
}

declare module '@mui/material/styles' {
    interface PaletteColorOptions {
        light?: string;
        main: string;
        dark?: string;
    }

    interface PaletteColor {
        light: string;
        dark: string;
        main: string;
    }

    interface SimplePaletteColorOptions {
        light?: string;
        main: string;
        dark?: string;
    }

    interface Palette {
        bw: BlackAndWhiteColorOptions;
    }

    interface PaletteOptions {
        bw: BlackAndWhiteColorOptions;
    }
}

export {};
