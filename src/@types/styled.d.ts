import 'styled-components';
import { baseColors, brandColors } from '../styles/themes/default';

type BrandColorsType = typeof brandColors;
type BaseColorsType = typeof baseColors;

declare module 'styled-components' {
  export interface DefaultTheme extends BrandColorsType, BaseColorsType {}
}