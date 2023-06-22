import { Form, FormDataType } from '@/types/types';
import React, { Dispatch, SetStateAction } from 'react';

export default function CustodianDetails(props: {
    FormData: FormDataType | undefined;
    data: Form | undefined;
    setFormData: Dispatch<SetStateAction<FormDataType | undefined>>;
}) {
    const { FormData, setFormData, data } = props;
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-8 flex-wrap">
                <div className="grow">
                    <input
                        type="text"
                        placeholder="Name *"
                        className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        value={FormData?.name}
                        onChange={(ev) => {
                            setFormData((prev: any) => {
                                return { ...prev, name: ev.target.value };
                            });
                        }}
                    />
                </div>
                <div className="grow">
                    <input
                        type="text"
                        placeholder="Address of Correspondence *"
                        className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        value={FormData?.addressOfCorrespondence}
                        onChange={(ev) => {
                            setFormData((prev: any) => {
                                return {
                                    ...prev,
                                    addressOfCorrespondence: ev.target.value,
                                };
                            });
                        }}
                    />
                </div>
            </div>
            <div className="flex gap-8 flex-wrap">
                <div className="grow">
                    <input
                        type="text"
                        placeholder="Account Name *"
                        className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        value={FormData?.accountName}
                        onChange={(ev) => {
                            setFormData((prev: any) => {
                                return {
                                    ...prev,
                                    accountName: ev.target.value,
                                };
                            });
                        }}
                    />
                </div>
                <div className="grow">
                    <input
                        type="text"
                        placeholder="Account Number *"
                        className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        value={FormData?.accountNumber}
                        onChange={(ev) => {
                            setFormData((prev: any) => {
                                return {
                                    ...prev,
                                    accountNumber: ev.target.value,
                                };
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
