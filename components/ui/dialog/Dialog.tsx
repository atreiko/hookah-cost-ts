'use client';
import { useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '../button/Button';
import { Icon } from '../icon/Icon';

type DialogProps = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};
const Dialog = ({ title, onClose, onOk, children }: DialogProps) => {
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const overlayRef = useRef<null | HTMLDivElement>(null);
  
  const searchParams = useSearchParams();
  const showDialog = searchParams.get('showDialog');  

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
    const newUrl = window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      closeDialog();
    }
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <dialog className='fixed top-50 left-50 -translate-x-50 -translate-y-50 z-50 rounded-xl backdrop:bg-neutral-800' ref={dialogRef}>
        <div className='max-w-lg w-full rounded-xl bg-neutral-900 shadow-md shadow-neutral-950 border border-neutral-700 p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-neutral-300 text-xl'>{title}</h2>
            <Button className='rounded-xl border border-neutral-700' onClick={closeDialog}>
              <Icon type='Cancel' />
            </Button>
          </div>
          <div>
            {children}
            {/* <div>
              <Button onClick={clickOk}>Ok</Button>
            </div> */}
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Dialog;
