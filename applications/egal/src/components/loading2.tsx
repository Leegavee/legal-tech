import React from 'react';
import ReactLoading, { LoadingProps } from 'react-loading';

export const Loading2 = ({
  type = 'spin',
  color = 'blue',
  className,
}: LoadingProps) => (
  <ReactLoading
    type={type}
    color={color}
    height={30}
    width={30}
    className={className}
  />
);
