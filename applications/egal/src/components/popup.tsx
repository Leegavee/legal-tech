import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const PopUp = (props: any) => {
  console.log(props);
  return <Popup {...props}>{props.children}</Popup>;
};
