import Button from '@/components/common/Button/Button';
import { Form, FormDataType } from '@/types/types';
import React, { Dispatch, SetStateAction, useState } from 'react';

export default function Certification(props: {
    FormData: FormDataType | undefined;
    data: Form | undefined;
    setFormData: Dispatch<SetStateAction<FormDataType | undefined>>;
}) {
    const { FormData, setFormData, data } = props;
    const [agreedToTOS, setAgreedToTOS] = useState(false);
    return (
        <div className="flex flex-col gap-6">
            <div className="p-4 bg-grey bg-opacity-10">
                <p>
                    I hereby certify the information that I have provided in
                    this subscription form is valid, correct, and complete, and
                    an integral part of this subscription form, and XYZ Capital
                    in its capacity as the &ldquo;Fund Manager&ldquo; has the
                    full right to rely on such data and information.
                    <br />
                    <br />
                    The applicant confirms that they have read and understood
                    the Terms and Conditions of the Fund, and accepts and agrees
                    to what is stated therein irrevocably and unconditionally.{' '}
                    <br />
                    <br />
                    The applicant agrees to participate in the Fund with the
                    number of units specified in This subscription form
                    submitted by XYZ Capital in accordance with the provisions
                    of the Investment Funds Regulations issued by the Capital
                    Market Authority in the Kingdom of Saudi Arabia, and the
                    payment of the subscription value in accordance with the
                    Terms and Conditions and this subscription form. <br />
                    <br />
                    The applicant acknowledges that they fulfill all the
                    requirements stipulated in the Terms and Conditions.
                    Accordingly, by accepting the Fund Manager to the signed
                    subscription form, they will become legally bound by all the
                    terms, conditions, and documents related to it and to the
                    offering of the Fund&apos;s units, and this subscription form
                    is subject to all the provisions stipulated in the Terms and
                    Conditions of the Fund.
                </p>
            </div>
            <div className="flex gap-2">
                <input
                    type="checkbox"
                    checked={FormData?.agreedToTOS}
                    id="agreedToTOS"
                    name="agreedToTOS"
                    onChange={() =>
                        setFormData((prev: any) => {
                            return { ...prev, agreedToTOS: !prev.agreedToTOS };
                        })
                    }
                    className=" cursor-pointer"
                />
                <label htmlFor="agreedToTOS" className=" cursor-pointer">
                    Please tick the box to certify.
                </label>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h3 className="text-primary text-xl font-bold">
                    Digitally Certify Document
                </h3>
                <p className="text-primary">
                    You can click on the below button it will redirect to a
                    platform where you can{' '}
                    <span className="font-bold">E-Sign</span> the document to
                    certify the details and the contract with{' '}
                    <span className="font-bold">XYZ.Capital</span>
                </p>
                <Button giant>E-Sign Document</Button>
            </div>
        </div>
    );
}
