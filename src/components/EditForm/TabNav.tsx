'use client';
import Button from '../common/Button/Button';
import { BsPersonFill } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';
import { TbCertificate } from 'react-icons/tb';
import { Dispatch, SetStateAction, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

type Props = {
    activeTab: 'Custodian Details' | 'Other Information' | 'Certification';
    setActiveTab: Dispatch<
        SetStateAction<
            'Custodian Details' | 'Other Information' | 'Certification'
        >
    >;
};

export default function TabNav({ activeTab, setActiveTab }: Props) {
    const [mobileTabNavOpen, setMobileTabNavOpen] = useState(false);
    return (
        <div className="lg:col-span-1 flex flex-col items-end justify-end w-full px-2 lg:items-stretch lg:px-0 lg:w-auto relative">
            <div
                className={`lg:flex flex-col ${
                    mobileTabNavOpen
                        ? 'flex absolute top-full right-0 z-50 bg-white shadow-xl rounded'
                        : 'hidden'
                }`}
            >
                <Button
                    transparent={activeTab !== 'Custodian Details'}
                    onClick={() => {
                        setActiveTab('Custodian Details');
                    }}
                >
                    <BsPersonFill /> Custodian Details
                </Button>
                <Button
                    transparent={activeTab !== 'Other Information'}
                    onClick={() => {
                        setActiveTab('Other Information');
                    }}
                >
                    <BiInfoCircle /> Other Information
                </Button>
                <Button
                    transparent={activeTab !== 'Certification'}
                    onClick={() => {
                        setActiveTab('Certification');
                    }}
                >
                    <TbCertificate /> Certification
                </Button>
            </div>
            <div className="flex-center lg:hidden text-xl text-theme z-20">
                {mobileTabNavOpen ? (
                    <CgClose
                        onClick={() => {
                            setMobileTabNavOpen(false);
                        }}
                    />
                ) : (
                    <GiHamburgerMenu
                        onClick={() => {
                            setMobileTabNavOpen(true);
                        }}
                    />
                )}
            </div>
        </div>
    );
}
