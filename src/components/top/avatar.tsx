import React from "react";
import '@/components/top/App.css';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const avatarI: React.FC = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://gravatar.com/images/homepage/avatar-01.png" />
        <AvatarFallback>a1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://gravatar.com/images/homepage/avatar-02.png" />
        <AvatarFallback>a2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://gravatar.com/images/homepage/avatar-04.png" />
        <AvatarFallback>a3</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://gravatar.com/images/homepage/avatar-09.png" />
        <AvatarFallback>a4</AvatarFallback>
      </Avatar>
    </>
  );
};

export default avatarI;