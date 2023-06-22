'use client';
import EditForm from '@/components/EditForm/EditForm';
import { Form } from '@/types/types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const [data, setData] = useState<Form>({
        id: '',
        title: '',
        date: '',
        status: '',
        data: {
            name: '',
            addressOfCorrespondence: '',
            accountName: '',
            accountNumber: '',
            certificates: '',
            profits: '',
            outcomes: '',
            certificatesOther: '',
            profitsOther: '',
            outcomesOther: '',
            agreedToTOS: false,
        },
    });
    useEffect(() => {
        const getData = async (id: string) => {
            const formdata = await axios.get(`/api/forms/${id}`).then((res) => {
                return res.data;
            });
            setData(formdata);
        };
        getData(id);
    }, [id]);
    return <EditForm data={data} />;
}
