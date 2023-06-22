import { Form, FormDataType } from '@/types/types';
import React, { Dispatch, SetStateAction, useState } from 'react';

export default function OtherInformation(props: {
    FormData: FormDataType | undefined;
    data: Form | undefined;
    setFormData: Dispatch<SetStateAction<FormDataType | undefined>>;
}) {
    const { FormData, setFormData, data } = props;
    return (
        <div className="flex gap-8 flex-wrap">
            {/* Certificates */}
            <div className="flex flex-col gap-4 grow">
                <div className="flex flex-col gap-4">
                    <h3>Certificates</h3>
                    <div className="grow flex gap-6">
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="certificates1"
                                name="certificates"
                                value="client"
                                checked={FormData?.certificates === 'client'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return {
                                            ...prev,
                                            certificates: 'client',
                                        };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="certificates1"
                            >
                                Client
                            </label>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="certificates2"
                                name="certificates"
                                value="custodian"
                                checked={FormData?.certificates === 'custodian'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return {
                                            ...prev,
                                            certificates: 'custodian',
                                        };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="certificates2"
                            >
                                Custodian
                            </label>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="certificates3"
                                name="certificates"
                                value="other"
                                checked={FormData?.certificates === 'other'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return {
                                            ...prev,
                                            certificates: 'other',
                                        };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="certificates3"
                            >
                                Other Entity
                            </label>
                        </div>
                    </div>
                </div>
                {FormData?.certificates === 'other' && (
                    <div className="grow">
                        <input
                            type="text"
                            placeholder="Other Entity"
                            className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        />
                    </div>
                )}
            </div>
            {/* Profits or any other income */}
            <div className="flex flex-col gap-4 grow">
                <div className="flex flex-col gap-4">
                    <h3>Profits or any other income</h3>
                    <div className="grow flex gap-6">
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="profits1"
                                name="profits"
                                value="client"
                                checked={FormData?.profits === 'client'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return { ...prev, profits: 'client' };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="profits1"
                            >
                                Client
                            </label>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="profits2"
                                name="profits"
                                value="custodian"
                                checked={FormData?.profits === 'custodian'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return {
                                            ...prev,
                                            profits: 'custodian',
                                        };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="profits2"
                            >
                                Custodian
                            </label>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="profits3"
                                name="profits"
                                value="other"
                                checked={FormData?.profits === 'other'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return { ...prev, profits: 'other' };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="profits3"
                            >
                                Other Entity
                            </label>
                        </div>
                    </div>
                </div>
                {FormData?.profits === 'other' && (
                    <div className="grow">
                        <input
                            type="text"
                            placeholder="Other Entity"
                            className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        />
                    </div>
                )}
            </div>
            {/* Sales Outcomes */}
            <div className="flex flex-col gap-4 grow">
                <div className="flex flex-col gap-4">
                    <h3>Sales Outcomes</h3>
                    <div className="grow flex gap-6">
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="outcomes1"
                                name="outcomes"
                                value="client"
                                checked={FormData?.outcomes === 'client'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return { ...prev, outcomes: 'client' };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="outcomes1"
                            >
                                Client
                            </label>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="outcomes2"
                                name="outcomes"
                                value="custodian"
                                checked={FormData?.outcomes === 'custodian'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return {
                                            ...prev,
                                            outcomes: 'custodian',
                                        };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="outcomes2"
                            >
                                Custodian
                            </label>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <input
                                className=" cursor-pointer"
                                type="radio"
                                id="outcomes3"
                                name="outcomes"
                                value="other"
                                checked={FormData?.outcomes === 'other'}
                                onChange={() =>
                                    setFormData((prev: any) => {
                                        return { ...prev, outcomes: 'other' };
                                    })
                                }
                            />
                            <label
                                className=" cursor-pointer"
                                htmlFor="outcomes3"
                            >
                                Other Entity
                            </label>
                        </div>
                    </div>
                </div>
                {FormData?.outcomes === 'other' && (
                    <div className="grow">
                        <input
                            type="text"
                            placeholder="Other Entity"
                            className="w-full px-4 py-4 focus:outline-dashed outline-1 bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all text-primary dark:text-white border-light border-2"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
