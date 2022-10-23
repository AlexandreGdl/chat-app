import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line import/no-unused-modules
  export interface DefaultTheme {
    colors: {
      GRAY_1: string,
      GRAY_2: string,
      GRAY_3: string,
      BLUE_1: string,
      GREEN_1: string,
    };
    name: string;
  }
}
