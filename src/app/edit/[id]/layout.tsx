'use client';
import FormsHead from '@/components/FormsHead/FormsHead';
import { Form } from '@/types/types';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { id: string };
}) {
    const { id } = params;
    const [data, setData] = useState<Form>();
    useEffect(() => {
        const getData = async (id: string) => {
            const formdata = await axios.get(`/api/forms/${id}`).then((res) => {
                return res.data;
            });
            setData(formdata);
        };
        getData(id);
    }, [id]);
    return (
        <div className="flex flex-col items-center justify-center px-4 py-4 lg:px-8 gap-4">
            <FormsHead
                title={data?.title}
                description={'Lorem Ipsum dolor'}
                hideSearch
            />
            {children}
        </div>
    );
}
