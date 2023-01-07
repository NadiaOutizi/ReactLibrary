import React from 'react';
import * as VscIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '../pages/Home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/Users',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
    
  },
  {
    title: 'Books',
    path: '/Book',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/Search',
    icon: <AiIcons.AiOutlineFileSearch/>,
    cName: 'nav-text'
  },
 
  {
    title: 'Filter',
    path: '/Filter',
    icon: <VscIcons.VscListFilter />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
