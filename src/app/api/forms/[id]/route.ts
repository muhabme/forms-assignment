import { getData, saveData } from '@/utils/fileOperations';
import { NextRequest, NextResponse } from 'next/server';
import { Form } from '@/types/types';

export const GET = async (request: NextRequest) => {
    const id = request.url.split('/forms/')[1];

    // Get One Form Data
    try {
        var allForms = getData();
        const form = allForms.find((form: Form) => form.id === id);

        return new NextResponse(JSON.stringify(form), {
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

export const PUT = async (request: NextRequest) => {
    try {
        const newData = await request.json();

        var allForms = getData();

        const newForms = allForms.filter((form: Form) => {
            return form.id !== newData.id;
        });

        newForms.push(newData);

        saveData(newForms);

        return new NextResponse(JSON.stringify({ message: 'success' }), {
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

export const DELETE = async (request: NextRequest) => {
    const id = request.url.split('/forms/')[1];
    try {
        var allForms = getData();

        const newForms = allForms.filter((form: Form) => {
            return form.id !== id;
        });

        saveData(newForms);

        return new NextResponse(JSON.stringify({ message: 'success' }), {
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
