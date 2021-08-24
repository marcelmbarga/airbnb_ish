import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon,
    UserIcon} from "@heroicons/react/solid"
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {

    const [searchInput,setSearchInput] = useState('')
    const [startDate,setstartDate] = useState(new Date());
    const [endDate,setendDate] = useState(new Date());
    const [noOfGuests,setNoOfGuests] = useState(1)
    const selectionRange = {
        startDate: startDate ,
        endDate: endDate,
        key: 'selection'
    }

    const router = useRouter()

    const handleSelect = (ranges) => {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        })
    }

//    const searchInputRef  = useRef('')
//    const searchValue = searchInputRef.current.value
//    console.log(searchValue)

    return (
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 "
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className=" cursor-pointer hidden md:inline ">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />

          <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>

        {searchInput && (
          <div className=" flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4
            ">
              <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
              <UsersIcon className="h-5" />
              <input
              onChange = {e => setNoOfGuests(e.target.value)}
              value={noOfGuests}
              type="number"
              min={1}
              className=' w-12 pl-2 text-lg outline-none text-red-400'

              />
            </div>
            <div className='flex'>
                <button className='flex-grow text-gray-500' onClick={resetInput}>Cancel</button>
                <button className='flex-grow text-red-400' onClick ={handleSearch} >Search</button>
            </div>
          </div>
        )}
      </header>
    );
}

export default Header
