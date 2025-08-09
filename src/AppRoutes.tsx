import { useMediaQuery } from 'react-responsive';
import DesktopRouter from './routes/DesktopRouter';
import { MobileRoutes } from './routes/MobileRoutes';

export const AppRoutes = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileRoutes /> : <DesktopRouter />;
};