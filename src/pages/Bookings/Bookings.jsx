import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
      const { user } = useContext(AuthContext)
      const [bookings, setBookings] = useState([])
      const url = `http://localhost:5000/bookings?email=${user.email}`
      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => {
                        setBookings(data);
                  })
      }, [])


      const handleDelete = id => {
            const proceed = confirm("Are you confirm to delete this servie?")
            if (proceed) {
                  fetch(`http://localhost:5000/bookings/${id}`, {
                        method: "DELETE"
                  })
                        .then(res => res.json()).then(data => {
                              console.log(data)
                              const remaing = bookings.filter(booking => booking._id !== id)
                              setBookings(remaing)
                        })
            }
      }


      const handleBookingConfirm = id => {
            fetch(`http://localhost:5000/bookings/${id}`, {
                  method: "PATCH",
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify({ status: 'confirm' })
            }).then(res => res.json()).then(data => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                        //update State
                        const remaing = bookings.filter(booking => booking._id !== id)
                        const updated = bookings.find(booking => booking._id === id)
                        updated.status='confirm'
                        const newBookings=[updated,...remaing]
                        setBookings(newBookings)
                  }
            })
      }

      return (
            <div className="overflow-x-auto w-full">
                  <h2 className='text-5xl text-center font-bold'>Total Service:{bookings.length}</h2>
                  <table className="table w-full">

                        <tbody>
                              {
                                    bookings.map(booking => <BookingRow
                                          key={booking._id}
                                          booking={booking}
                                          handleBookingConfirm={handleBookingConfirm}
                                          handleDelete={handleDelete}
                                    >


                                    </BookingRow>)
                              }

                        </tbody>


                  </table>
            </div>
      );
};

export default Bookings;