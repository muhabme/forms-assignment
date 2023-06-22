import { RiFileEditFill } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

export type Props = {
    title?: string;
    description?: string;
    hideSearch?: boolean;
};

export default function FormsHead({ title, description, hideSearch }: Props) {
    return (
        <div className="flex items-center justify-center flex-wrap gap-8 lg: lg:justify-between lg:flex-nowrap bg-white bg-opacity-30 backdrop-blur-3xl w-full p-4 rounded-lg">
            <div className="flex items-center justify-center gap-4">
                <div className="bg-primary p-4 rounded-full text-white">
                    <RiFileEditFill size={28} />
                </div>
                <div>
                    <h2 className="font-bold text-primary text-lg">
                        {title ? title : 'Forms'}
                    </h2>
                    <p className="text-grey dark:text-white text-sm transition-all">
                        {description
                            ? description
                            : 'All the compulsory forms are available here.'}
                    </p>
                </div>
            </div>
            <div
                className={`${
                    hideSearch && 'hidden'
                } flex gap-4 flex-wrap items-center justify-center`}
            >
                <div className="border-light border-2 flex items-center justify-center  pr-2 text-primary dark:text-white transition-all focus-within:outline-dashed outline-1">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 focus:outline-none bg-transparent placeholder:text-primary dark:placeholder:text-white transition-all"
                    />
                    <AiOutlineSearch size={24} />
                </div>
                <button className="border-light border-2 flex items-center justify-center pr-2 text-primary dark:text-white transition-all focus:outline-dashed outline-1 cursor-pointer">
                    <span className="px-4 py-2">Sort By</span>
                    <MdKeyboardArrowDown size={28} />
                </button>
            </div>
        </div>
    );
}
