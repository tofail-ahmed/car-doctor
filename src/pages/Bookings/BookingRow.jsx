import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
      const { _id, Photo, customerName, email, date, Service, price, status } = booking

      return (
            <div>
                  {/* row 1 */}
                  <tr>
                        <th>
                              <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                              </button>
                        </th>
                        <td className='w-[300px]'>
                              <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                          <div className="mask mask-squircle w-24 h-24">

                                                <div className="avatar">
                                                      <div className="w-24 mask mask-squircle">
                                                            <img src={Photo} />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div>
                                          <div className="font-bold">{customerName}</div>
                                          <div className="text-sm opacity-50">{email}</div>
                                    </div>
                              </div>
                        </td>
                        <td className='w-[200px]'>
                              {Service}

                        </td>
                        <td className='w-[100px]'>{'$' + price}</td>
                        <td className='w-[200px]'>{date}</td>
                        <th>
                              {
                                    status === "confirm" ? <span className='text-green-700 font-extrabold'>Confirmed</span>
                                          : <button onClick={() => handleBookingConfirm(_id)}>Please Confirm</button>
                              }
                        </th>
                  </tr>
            </div>
      );
};

export default BookingRow;