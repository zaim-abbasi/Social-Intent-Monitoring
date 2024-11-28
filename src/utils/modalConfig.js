import Modal from 'react-modal';

export const initializeModal = () => {
  if (typeof window !== 'undefined' && document.getElementById('root')) {
    Modal.setAppElement('#root');
  }
};