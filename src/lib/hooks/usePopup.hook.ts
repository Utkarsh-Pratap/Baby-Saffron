import { useEffect, useState } from 'react';

type UsePopupHook = (id?: string) => {
  showPopup: boolean;
  closePopup: () => void;
  openPopup: () => void;
  togglePopup: () => void;
};

export const usePopup: UsePopupHook = (id) => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const togglePopup = () => setShowPopup((lst) => !lst);

  useEffect(() => {}, [id]);

  return {
    showPopup,
    closePopup,
    openPopup,
    togglePopup,
  };
};
