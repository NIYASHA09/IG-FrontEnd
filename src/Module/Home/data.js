import { IconHome, IconArtboard, IconBookmark, IconSend, IconGridDots, IconSettings } from '@tabler/icons-react'
export const stats = [
    {
        id: 1,
        name: 'posts',
        stats: 1000
    },
    {
        id: 2,
        name:'Following',
        stats: 1000
    },
    {
        id: 3,
        name:'Followers',
        stats: 1000
    }
];
export const navigations = [
    {
        id: 1,
        name: 'Feed',
        link: '/',
        className: 'text-[#F00F51]',
        icon: <IconHome/>
    },
    {
        id: 2,
        name: 'Explore',
        link: '/update-page',
        className: '',
        icon:<IconArtboard/>
    },
    {
        id: 3,
        name: 'My Favorites',
        link: '/update-page',
        className: '',
        icon:<IconBookmark/>
    },
    {
        id: 4,
        name: 'Direct',
        link: '/update-page',
        className: '',
        icon:<IconSend/>
    },
    {
        id:5,
        name:'Status',
        link: '/update-page',
        className: '',
        icon:<IconGridDots/>
    },
    {
        id:6,
        name:'Settings',
        link: '/update-page',
        className: '',
        icon:<IconSettings/>
    }
];
