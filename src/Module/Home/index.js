import { ReactComponent as Avatar } from '../../assets/avatar.svg'
import Button from '../../components/button'
import Input from '../../components/input'
import PostImg from '../../assets/PostImg.jpg'
import { IconArtboard, IconHeart, IconMessageCircle, IconBookmark, IconShare, IconHome, IconSend, IconLogout, IconSearch, IconPlus, IconGridDots, IconSettings } from '@tabler/icons-react';
import { stats, navigations } from './data'
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const Home = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('user:token');

        if (token) {
            const decodedToken = jwtDecode(token);
            const userUsername = decodedToken.username;
            const userName = decodedToken.name;
            setUsername(userUsername);
            setName(userName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user:token');
        window.location.reload();
    };

    const trendingFeed = 'trendingfeed.png';
    const mostLiked = 'mostliked.png';
    const suggestionForYou = 'suggestionforyou.png';

    return (
        <div className='h-screen bg-gray-200 flex overflow-hidden'>
            <div className='w-[20%] bg-white flex flex-col'>
                <div className='h-[30%] flex justify-center items-center border-b'>
                    <div className='flex flex-col justify-center items-center'>
                        <Avatar width={'65px'} height={'65px'} className='border-[4px] p-1 rounded-full' />
                        <div className='my-1 text-center'>
                            <h3 className='text-lgx font-semibold'>{name}</h3>
                            <p className='text-xs font-light pb-5'>@{username}</p>
                        </div>
                        <div className='h-[50px] flex justify-around w-[250px] text-center mb-5 '>
                            {
                                stats.map(({ id, name, stats }) => {
                                    return (
                                        <div key={id}>
                                            <h4 className='font-bold'>{stats}</h4>
                                            <p className=' font-light text-sm'>{name}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className='h-[55%] flex flex-col justify-evenly pl-12 border-b text-gray-400 text-md font-medium'>
                    {
                        navigations.map(({ id, name, icon, link, className }) => {
                            return (
                                <a key={id} href={link} className={`flex cursor-pointer hover:text-[#F00F51] ${className}`}><span className='mr-4'>{icon}</span>{name}</a>
                            )
                        })
                    }

                </div>
                <div className='h-[15%] pl-12 pt-8 text-gray-400 text-md font-medium'>
                    <div className='flex cursor-pointer hover:text-[#F00F51]' onClick={handleLogout}><span className='mr-4'><IconLogout /></span>Log Out</div>
                </div>
            </div>
            <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>
                <div className='bg-white h-[65px] border-l border-r flex justify-evenly items-center pt-4 sticky top-0 shadow-lg '>
                    <div className='flex justify-center items-center'>
                        <Input placeholder='Enter your search' className='rounded-full w-[400px] ' />
                        <Button icon={<IconSearch />} className='mb-4 ml-4 bg-[#F00F51] hover:bg-[#de0d4c] rounded-full' />
                    </div>
                    <a href='/new-post'><Button icon={<IconPlus />} label='Create new post' className='flex rounded-full bg-[#F00F51] hover:[#de0d4c] mb-4' /></a>
                </div>
                {
                    [1, 2, 3, 4, 5].map(() => {
                        return (
                            <div className='bg-white w-[75%] mx-auto mt-24 p-8'>
                                <div className='border-b flex items-center pb-4 mb-4'>
                                    <Avatar width={'50px'} height={'50px'} />
                                    <div className='ml-4'>
                                        <h3 className='text-lg leading-none font-semibold'>Lara Jane</h3>
                                        <p className='text-sm font-light'>@lara_jane</p>
                                    </div>
                                </div>
                                <div className='border-b pb-4 mb-4'>
                                    <img src={PostImg} alt='' className='rounded-xl' />
                                    <p className='my-4 text-sm font-normal'>A gentle smile is often
                                        perceived as a sign of compassion , for example. These smiles involve the upward pull of the lips,
                                        and according to researchers, often trigger dimpling in the cheeks</p>
                                </div>
                                <div className='flex justify-evenly text-black text-sm font-medium'>
                                    <div className='flex cursor-pointer items-center'><span className='mr-2 stroke-width-[3px] '><IconHeart /></span>10.5K Likes</div>
                                    <div className='flex cursor-pointer items-center'><span className='mr-2'><IconMessageCircle /></span> 10.5K Comments</div>
                                    <div className='flex cursor-pointer items-center'><span className='mr-2'><IconShare /></span>10.5K Shares</div>
                                    <div className='flex cursor-pointer items-center'><span className='mr-2'><IconBookmark /></span>10 Saved</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[20%] bg-white flex flex-col items-center'>
                <div className='w-[250px] mt-8'>
                    <h3 className='text-lg font-semibold mb-4'>Trending Feeds</h3>
                    <div className='bg-[#F00F51] h-[150px]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${trendingFeed})`, backgroundSize: 'cover' }}></div>
                </div>
                <div className='w-[250px] mt-8'>
                    <h3 className='text-lg font-semibold mb-4'>Most Liked</h3>
                    <div className='bg-blue-300 h-[150px]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${mostLiked})`, backgroundSize: 'cover' }}></div>
                </div>
                <div className='w-[250px] mt-8'>
                    <h3 className='text-lg font-semibold mb-4'>Suggestions For You!</h3>
                    <div className='bg-red-400 h-[150px]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${suggestionForYou})`, backgroundSize: 'cover' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Home
