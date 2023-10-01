import Link from 'next/link';
import React, { FC } from 'react'

interface UserCardProps {
  id: number;
  name: string;
  email: string
}

const UsersCard:FC<UserCardProps> = ({name, email, id}) => {
  return (
    
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src="https://dummyimage.com/80x80"
        />
        <div className="flex-grow">
          <Link href={`/users/${name.replace(/ /g, "-").replace(/\./g, "").toLowerCase()}/${id}`}>
            <h2 className="text-gray-900 title-font font-medium">
              {name}
            </h2>
          </Link>
        <p className="text-gray-500">{email}</p>
        </div>
      </div>
    </div>  
      
  );
}

export default UsersCard