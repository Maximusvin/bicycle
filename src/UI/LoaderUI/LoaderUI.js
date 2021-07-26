import Loader from 'react-loader-spinner';
import { COLORS } from 'assets/colors';

const styleLoader = {
  color: COLORS.greyLine,
  type: 'ThreeDots',
};

const LoaderUI = ({ width = 80, height = 80 }) => (
  <Loader {...styleLoader} width={width} height={height} />
);

export default LoaderUI;
