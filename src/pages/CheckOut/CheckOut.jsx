import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const CheckOut = () => {
      const { user } = useContext(AuthContext)
      const service = useLoaderData()
      const handleConfirmOrder = e => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value
            const date = form.date.value
            const email = user?.email
            // const phone = form.phone.value
            // const message = form.message.value
            const order = {
                  customerName: name,
                  email,
                  date,
                  Photo: service.img,
                  Service: service.title,
                  service_id: service._id,
                  price: service.price

            }
            console.log(order);
            fetch('http://localhost:5000/bookings',{
                  method:'POST',
                  headers:{
                        'content-type':'application/json'
                  },
                  body:JSON.stringify(order)
            })
            .then(res=>res.json())
            .then(data=>{
                  console.log(data)
                 
            })
      }
      return (

            <div className="card-body ">
                  <h1 className='text-5xl font-bold text-rose-500	 text-center mb-4'>{service.title}</h1>
                  <form onSubmit={handleConfirmOrder}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              <div className="form-control">

                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                              </div>
                              <div className="form-control">

                                    <input type="date" name='date' defaultValue={user?.displayName} className="input input-bordered" />

                              </div>
                              <div className="form-control">

                                    <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                              </div>
                              <div className="form-control ">

                                    <input type="text" name='price' defaultValue={'Cost:$' + service.price} placeholder="Due Amount" className="input input-bordered" />

                              </div>
                        </div>
                        <div className="form-control my-6">

                              {/* <input type="text-area" name='message' placeholder="Your Message" className="input input-bordered" /> */}
                              <textarea type="text-area" name='message' placeholder="Your Message" className="input input-bordered" cols="30" rows="10"></textarea>

                        </div>

                        <input className='btn btn-primary btn-block' type="submit" value="Confirm Order" />

                  </form>
            </div>

      );
};

export default CheckOut;