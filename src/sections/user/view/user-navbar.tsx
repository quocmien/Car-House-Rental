'use client';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface IProps {
  username: string;
}

const UserNavBar = ({ username }: IProps) => {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <a
          href=""
          className="px-[6px] py-[4px] rounded-[30px] uppercase border-[2px] border-transparent flex items-start"
        >
          <span>{username}</span>
          <ChevronDown className="h-4 w-4" />
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="border-none p-0" side="bottom" align="start">
        <ul>
          <li className="border-b px-2 py-[6px] cursor-pointer">
            <Link href="/user/profile" className="uppercase font-bold w-full">
              Profile
            </Link>
          </li>
          <li
            className="border-b px-2 py-[6px] cursor-pointer"
            onClick={() => signOut()}
          >
            <a className="uppercase font-bold ">Logout</a>
          </li>
        </ul>
        <HoverCardArrow className="fill-white shadow-md" />
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserNavBar;
