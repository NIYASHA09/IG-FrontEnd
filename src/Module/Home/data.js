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
        icon: <IconHome/>
    },
    {
        id: 2,
        name: 'Explore',
        icon:<IconArtboard/>
    },
    {
        id: 3,
        name: 'My Favorites',
        icon:<IconBookmark/>
    },
    {
        id: 4,
        name: 'Direct',
        icon:<IconSend/>
    },
    {
        id:5,
        name:'Status',
        icon:<IconGridDots/>
    },
    {
        id:6,
        name:'Settings',
        icon:<IconSettings/>
    }
];
