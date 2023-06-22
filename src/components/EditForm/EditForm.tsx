'use client';
import Button from '@/components/common/Button/Button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Form, FormDataType } from '@/types/types';
import CustodianDetails from './pages/CustodianDetails';
import OtherInformation from './pages/OtherInformation';
import TabNav from './TabNav';
import Certification from './pages/Certification';
import axios from 'axios';

export default function EditForm(props: { data: Form }) {
    const { data } = props;
    const router = useRouter();

    const [activeTab, setActiveTab] = useState<
        'Custodian Details' | 'Other Information' | 'Certification'
    >('Custodian Details');

    const [FormData, setFormData] = useState<FormDataType | undefined>({
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
    });
    useEffect(() => {
        setFormData(data?.data);
    }, [data]);
    const saveEdit = async () => {
        await axios.put(`/api/forms/${data?.id}`, {
            id: data?.id,
            title: data?.title,
            date: data?.date,
            status: data?.status,
            data: FormData,
        });
    };
    return (
        <div className="flex items-center justify-center flex-wrap lg:items-start lg:justify-start lg:grid lg:grid-cols-5 gap-8 lg: w-full">
            <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="col-span-4 bg-white bg-opacity-30 backdrop-blur-3xl w-full p-4 rounded flex flex-col gap-4">
                <h2 className="text-xl font-bold text-primary">{activeTab}</h2>
                {activeTab == 'Custodian Details' && (
                    <CustodianDetails
                        FormData={FormData}
                        setFormData={setFormData}
                        data={data}
                    />
                )}
                {activeTab == 'Other Information' && (
                    <OtherInformation
                        FormData={FormData}
                        setFormData={setFormData}
                        data={data}
                    />
                )}
                {activeTab == 'Certification' && (
                    <Certification
                        FormData={FormData}
                        setFormData={setFormData}
                        data={data}
                    />
                )}
                <div className="flex gap-8 self-center lg:self-end mt-4">
                    <Button white borderPrimary giant linkTo="/">
                        CANCEL
                    </Button>
                    <Button
                        giant
                        onClick={async () => {
                            if (activeTab === 'Custodian Details') {
                                saveEdit();
                                setActiveTab('Other Information');
                            } else if (activeTab === 'Other Information') {
                                saveEdit();
                                setActiveTab('Certification');
                            } else if (activeTab === 'Certification') {
                                saveEdit();
                                router.push('/');
                            }
                        }}
                    >
                        SAVE
                    </Button>
                </div>
            </div>
        </div>
    );
}
