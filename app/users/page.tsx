import React from 'react'
import UsersCard from '@/app/components/server/UsersCard'
import axios from 'axios';

interface Users {
  id: number;
  name: string;
  email: string;
}

const getUsers = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
  const users: Users[] = res.data;

  return users;
};

const Users = async () => {
  const users = await getUsers();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {
            users.map((user) => (
              <UsersCard name={user.name} email={user.email} id={user.id} key={user.id} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Users