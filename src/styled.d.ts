//여기 안에서 테마정의를 확장함.
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    footerColor: string;
    textColor: string;
    accentColor: string;
  }
}
