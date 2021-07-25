import Loader from 'react-loader-spinner';
import { COLORS } from 'assets/colors';

const styleLoader = {
  color: COLORS.greyLine,
  height: 80,
  width: 80,
  type: 'ThreeDots',
};

const LoaderUI = () => <Loader {...styleLoader} />;

export default LoaderUI;
