import React from 'react'
import Input from '../../components/input'
import Button from '../../components/button'
import { useState } from 'react';
import axios from 'axios';
import { IconArrowLeft } from '@tabler/icons-react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('', {
                title,
                description,
                image,
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <a href='/' className='flex'><div className='p-2 mb-2 bg-gray-200 hover:bg-gray-300 rounded-full'><IconArrowLeft /></div></a>
                <div className='border w-[740px] h-auto p-6'>
                    <h1 className='text-2xl font-bold '>Create Post</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col'>
                        <Input placeholder='Title' className='py-4' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <textarea rows={10} placeholder='Description' className='w-full border shadow p-4 resize-none' value={description} onChange={(e) => setDescription(e.target.value)} />
                        <Input placeholder='Image Link' className='py-4 my-2' value={image} onChange={(e) => setImage(e.target.value)} />
                        <Button label='Post' type='submit' className='my-4' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost