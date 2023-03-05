import { IoArrowForwardOutline, IoCloseCircle, IoSyncSharp } from './icons';
import { PopUp } from './popup';
import { useState } from 'react';
import axiosClient from '../utils/axios';
import { Loading2 } from './loading2';

export const RewordPopup = () => {
  const [emailClient, setEmailClient] = useState('');
  const [emailReworded, setEmailReworded] = useState('');

  const [loading, setLoading] = useState(false);
  const handleReowordMessage = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const res: any = await axiosClient.post('/chat/ask', {
      prompt: `
                please help me to reword this email to send to solicitors

                my email is: 

                ${emailClient}
            `,
    });
    if (res && res.text) {
      setEmailReworded(res.text.trim());
    }
    setLoading(false);
  };
  return (
    <PopUp
      trigger={
        <div className="text-black w-auto flex p-2 items-center font-medium cursor-pointer">
          <IoSyncSharp size={25} color="blue" className="mr-3" /> Reword email
        </div>
      }
      modal
      closeOnDocumentClick={false}
      className="my-popup"
    >
      {(close: any) => (
        <div className="p-3 text-black relative">
          <button className="absolute right-1 top-1" onClick={close}>
            <IoCloseCircle size={25} color="blue" />
          </button>
          <div className="text-2xl text-black text-medium text-center">
            Reword Email
          </div>
          <div className="flex text-black justify-between items-center">
            <div className="col-5">
              <div className="text-center mb-2 font-medium underline">
                Your email
              </div>
              <textarea
                className="bg-white border rounded-xl focus:outline-none focus:border-indigo-300 p-2"
                cols={70}
                rows={30}
                autoFocus={true}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  if (e.target.value.trim()) {
                    setEmailClient(e.target.value);
                  }
                }}
              ></textarea>
            </div>
            <div>
              <button onClick={handleReowordMessage}>
                <IoArrowForwardOutline
                  size={30}
                  color="blue"
                  className="cursor-pointer"
                />
              </button>
            </div>
            <div className="relative">
              <div className="text-center mb-2 font-medium underline">
                Email reworded
              </div>
              <textarea
                className="bg-white border rounded-xl focus:outline-none focus:border-indigo-300 p-2"
                cols={70}
                rows={30}
                value={emailReworded}
              ></textarea>
              {loading && <Loading2 className="absolute inset-1/2" />}
            </div>
          </div>
        </div>
      )}
    </PopUp>
  );
};
