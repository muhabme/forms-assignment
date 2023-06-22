export type Form = {
    id: string;
    title: string;
    date: string;
    status: string;
    data?: FormDataType;
};

export type FormDataType = {
    name?: string;
    addressOfCorrespondence?: string;
    accountName?: string;
    accountNumber?: string;
    certificates?: string;
    profits?: string;
    outcomes?: string;
    certificatesOther?: string;
    profitsOther?: string;
    outcomesOther?: string;
    agreedToTOS?: boolean;
};
