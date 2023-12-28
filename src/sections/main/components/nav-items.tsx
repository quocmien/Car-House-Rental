'use client';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useBoolean } from '@/hooks/use-boolean';
import { cn } from '@/lib/utils';
import { Login } from '@/sections/auth/login/login';
import { Register } from '@/sections/auth/login/register';
import UserNavBar from '@/sections/user/view/user-navbar';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { ChevronDown, Menu, Plus } from 'lucide-react';
import { Session } from 'next-auth';
import Link from 'next/link';


interface IProps {
  session: Session | null;
}

const NavItems = ({ session }: IProps) => {
  const menuMobile = useBoolean();
  const isActive = true; //check avtive link

  return (
    <nav className="flex items-center">
      <ul className="primary-nav hidden md:flex border-r-[1px] pr-[15px] mr-[15px] text-[11px] font-bold items-center">
        {/* <li className="active has-child">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <a
                href=""
                className="px-[6px] py-[4px] rounded-[30px] uppercase border-[2px] border-transparent flex items-start"
              >
                <span>Home</span>
                <ChevronDown className="h-4 w-4" />
              </a>
            </HoverCardTrigger>
            <HoverCardContent
              className="border-none p-0"
              side="bottom"
              align="start"
            >
              <ul>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
              </ul>
              <HoverCardArrow className="fill-white shadow-md" />
            </HoverCardContent>
          </HoverCard>
        </li>
        <li className="has-child">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <a
                href=""
                className="px-[6px] py-[4px] rounded-[30px] uppercase border-[2px] border-transparent flex items-start"
              >
                <span>Listing</span>
                <ChevronDown className="h-4 w-4" />
              </a>
            </HoverCardTrigger>
            <HoverCardContent
              className="border-none p-0"
              side="bottom"
              align="start"
            >
              <ul>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
                <li className="border-b px-2 py-[6px]">
                  <a className="uppercase font-bold" href="">
                    Map Full Screen Sidebar Results
                  </a>
                </li>
              </ul>
              <HoverCardArrow className="fill-white shadow-md" />
            </HoverCardContent>
          </HoverCard>
        </li> */}
      </ul>
      <div className="border-r-[1px] pr-[15px] mr-[10px] flex text-[11px] font-bold">
        {session ? (
          <div>
            <UserNavBar username={session?.user?.username} />
          </div>
        ) : (
          <>
            <div>
              <Login>
                <a className="cursor-pointer uppercase px-[6px] py-[4px]">
                  Sign In
                </a>
              </Login>
            </div>
            <div>
              <Register>
                <a className="cursor-pointer uppercase px-[6px] py-[4px] text-primary">
                  Register
                </a>
              </Register>
            </div>
          </>
        )}
      </div>
      <div className="w-7 h-7 md:w-auto md:h-auto">
        {
          session ? (
          <Link href="/product/add">
            <Button className="rounded-full font-bold p-0 md:p-2 w-full h-full">
              <Plus strokeWidth={3} className="w-4 h-4 text-white " />
              <span className="hidden md:block text-xs">Add Product</span>
            </Button>
          </Link>
          ) : ''
        }
      </div>
      <div className="md:hidden">
        <HoverCard open={menuMobile.value} openDelay={0}>
          <HoverCardTrigger asChild>
            <Menu
              onClick={menuMobile.onToggle}
              className={cn(
                'text-primary hover:text-white border-[2px] hover:border-primary hover:bg-primary w-7 h-7 rounded-[3px] ml-[10px] ease-in-out transition-all duration-300',
                menuMobile.value && 'text-white border-primary bg-primary'
              )}
            />
          </HoverCardTrigger>
          <HoverCardContent
            className="border-none p-0 w-[220px] bg-primary text-primary-foreground font-bold"
            side="bottom"
            align="end"
          >
            <ul className="text-[11px]">
              <Collapsible>
                <CollapsibleTrigger className="w-full">
                  <li
                    className={cn(
                      'border-b border-[#ffffff1a] p-[10px] hover:bg-[#00000033]',
                      isActive && 'bg-[#00000033]'
                    )}
                  >
                    <div className="group uppercase font-bold flex justify-between">
                      <span>Home</span>
                      <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-all duration-300" />
                    </div>
                  </li>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <li className="border-b border-[#ffffff1a] p-[10px] bg-[#00000033]">
                    <div className="group uppercase font-bold flex justify-between">
                      <span>Map full screeen</span>
                    </div>
                  </li>
                </CollapsibleContent>
              </Collapsible>

              <li className="border-b border-[#ffffff1a] p-[10px] hover:bg-[#00000033]">
                <a className="uppercase font-bold" href="">
                  Blog
                </a>
              </li>
              <li className="border-b border-[#ffffff1a] p-[10px] hover:bg-[#00000033]">
                <a className="uppercase font-bold" href="">
                  Contact
                </a>
              </li>
            </ul>
            <HoverCardArrow className="fill-primary shadow-md" />
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
};

export default NavItems;
