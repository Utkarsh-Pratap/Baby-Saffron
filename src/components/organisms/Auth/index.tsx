'use client';
import AuthModal from '@/components/molecules/models/AuthModal';
import { useAppSelector } from '@/lib/hooks/redux.hook';
import { log } from '@/lib/utils/log';
import { AnimatePresence } from 'framer-motion';

const Auth = () => {
  const { showLoginScreen } = useAppSelector((state) => state.auth);

  log(showLoginScreen);
  return (
    <AnimatePresence mode="wait">
      {showLoginScreen && <AuthModal />}
    </AnimatePresence>
  );
};

export default Auth;
