'use client';
import { useEffect, useState } from 'react';
import Button from '../common/Button/Button';
import { BsFillPencilFill, BsTrash, BsDownload } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import { Form } from '@/types/types';

export default function Forms() {
    const [activeTab, setActiveTab] = useState<'Approved' | 'Pending'>(
        'Approved',
    );

    // Format Date
    const getDate = (date: string) => {
        const prevDate = new Date(date);
        const newDate = prevDate.toLocaleDateString('default', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        });
        return newDate;
    };

    const [data, setData] = useState<Form[]>();
    const getData = async () => {
        const formdata = await axios.get(`/api/forms`).then((res) => {
            return res.data;
        });
        setData(formdata);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="flex flex-col items-center justify-between gap-4 bg-white bg-opacity-30 backdrop-blur-3xl w-full p-4 rounded-lg">
            <div className="flex w-full flex-wrap gap-4 sm:items-stretch sm:justify-between">
                <div className="flex-1"></div>
                <div className="flex items-center justify-center">
                    <Button
                        primary={activeTab === 'Approved'}
                        white={activeTab === 'Pending'}
                        onClick={() => setActiveTab('Approved')}
                    >
                        Approved
                    </Button>
                    <Button
                        primary={activeTab === 'Pending'}
                        white={activeTab === 'Approved'}
                        onClick={() => setActiveTab('Pending')}
                    >
                        Pending
                    </Button>
                </div>
                <div className="flex-1 flex justify-end">
                    <Button
                        white
                        onClick={async () => {
                            await axios.post('/api/forms');
                            await getData();
                        }}
                    >
                        <AiOutlinePlus size={24} />
                    </Button>
                </div>
            </div>
            <div className="w-full overflow-scroll sm:overflow-auto max-w-full">
                <table className="w-full">
                    <thead>
                        <tr className="bg-primary text-white px-4 flex items-center justify-between gap-12">
                            <th className="py-2 font-normal">ID</th>
                            <th className="py-2 font-normal text-start flex-1">
                                Form Title
                            </th>
                            <th className="py-2 font-normal text-start flex-1">
                                Date
                            </th>
                            {activeTab === 'Pending' && (
                                <th className="py-2 font-normal text-start flex-1">
                                    Status
                                </th>
                            )}
                            <th
                                className={`py-2 font-normal  w-14 md:w-28 ${
                                    activeTab === 'Approved' && 'lg:w-44'
                                }`}
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeTab === 'Approved' &&
                            data?.map(({ id, title, date }, index) => (
                                <tr
                                    className="flex items-center justify-between gap-12 border-b border-grey px-4"
                                    key={index}
                                >
                                    <td className="text-primary font-bold">
                                        {index > 9
                                            ? index + 1
                                            : `0${index + 1}`}
                                    </td>
                                    <td className="grow flex-1">{title}</td>
                                    <td className="grow flex-1">
                                        {getDate(date)}
                                    </td>
                                    <td className="flex items-center justify-center flex-wrap lg:flex-row gap-2 py-4 w-14 md:w-28 lg:w-44">
                                        <div>
                                            <Button
                                                square
                                                linkTo={`/edit/${id}`}
                                            >
                                                <BsFillPencilFill />
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                white
                                                square
                                                onClick={async () => {
                                                    await axios.delete(
                                                        `/api/forms/${id}`,
                                                    );
                                                    await getData();
                                                }}
                                            >
                                                <BsTrash />
                                            </Button>
                                        </div>
                                        <div>
                                            <Button accent square>
                                                <BsDownload />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        {activeTab === 'Pending' &&
                            data?.map(({ id, title, date, status }, index) => (
                                <tr
                                    className="flex items-center justify-between gap-12 border-b border-grey px-4"
                                    key={index}
                                >
                                    <td className="text-primary font-bold">
                                        {index > 9
                                            ? index + 1
                                            : `0${index + 1}`}
                                    </td>
                                    <td className="grow flex-1">{title}</td>
                                    <td className="grow flex-1">
                                        {getDate(date)}
                                    </td>
                                    <td className="grow flex-1 flex">
                                        <div
                                            className={`${
                                                status === 'Pending'
                                                    ? 'text-green-600'
                                                    : 'text-yellow-500'
                                            } px-4 py-3 bg-grey dark:bg-white dark:bg-opacity-40 bg-opacity-25 rounded font-bold`}
                                        >
                                            {status}
                                        </div>
                                    </td>
                                    <td className="flex items-center justify-center flex-wrap lg:flex-row gap-2 py-4 w-14 md:w-28">
                                        <div>
                                            <Button
                                                square
                                                linkTo={`/edit/${id}`}
                                            >
                                                <BsFillPencilFill />
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                white
                                                square
                                                onClick={async () => {
                                                    await axios.delete(
                                                        `/api/forms/${id}`,
                                                    );
                                                    await getData();
                                                }}
                                            >
                                                <BsTrash />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {/* <div className="flex items-center justify-center w-full">
                <Button
                    primary={activeTab === 'Approved'}
                    white={activeTab === 'Pending'}
                    onClick={() => setActiveTab('Approved')}
                >
                    Approved
                </Button>
                <Button
                    primary={activeTab === 'Pending'}
                    white={activeTab === 'Approved'}
                    onClick={() => setActiveTab('Pending')}
                >
                    Pending
                </Button>
            </div> */}
        </div>
    );
}
