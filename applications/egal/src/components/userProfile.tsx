import React from 'react';
import Image from 'next/image';

export interface UserProfileType {
  picture: string;
  name: string;
  nickname: string;
}

export const UserProfile = (user: UserProfileType) => {
  return (
    <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <Image
          width={20}
          height={20}
          src={user.picture}
          sizes="50"
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <div className="text-sm font-semibold mt-2">{user.name}</div>
      <div className="text-xs text-gray-500">{user.nickname}</div>
      <div className="flex flex-row items-center mt-3">
        <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
          <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
        </div>
        <div className="leading-none ml-1 text-xs">Active</div>
      </div>
    </div>
  );
};
