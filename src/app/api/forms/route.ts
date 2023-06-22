import { Form } from '@/types/types';
import { getData, saveData } from '@/utils/fileOperations';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
    // Get All Form Data
    try {
        var allForms: Form[] = getData();
        allForms.sort(function (a, b): any {
            const date1: number = new Date(b.date).getTime();
            const date2: number = new Date(a.date).getTime();
            return date1 - date2;
        });

        return new NextResponse(JSON.stringify(allForms), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Internal Server Error', error }),
            {
                status: 500,
            },
        );
    }
};

export const POST = async (request: NextRequest) => {
    try {
        var allForms = getData();
        const ObjectId = (
            m = Math,
            d = Date,
            h = 16,
            s = (s: any) => m.floor(s).toString(h),
        ) =>
            s(d.now() / 1000) +
            ' '.repeat(h).replace(/./g, () => s(m.random() * h));

        const newId = ObjectId();
        let newData = {
            id: newId,
            title: 'New Form',
            date: new Date(Date.now()).toLocaleString(),
            status: 'Pending',
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
        };

        allForms.push(newData);

        saveData(allForms);

        return new NextResponse(JSON.stringify({ message: 'success' }), {
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Internal Server Error', error }),
            {
                status: 500,
            },
        );
    }
};
