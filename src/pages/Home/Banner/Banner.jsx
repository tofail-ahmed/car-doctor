import img1 from '../../../assets/assets/images/banner/1.jpg'
import img2 from '../../../assets/assets/images/banner/2.jpg'
import img3 from '../../../assets/assets/images/banner/3.jpg'
import img4 from '../../../assets/assets/images/banner/4.jpg'


const Banner = () => {
      return (
            <div style={{ width: '100%', height: '100vh' }} className="carousel w-full my-14">
                  <div id="slide1" className="carousel-item relative w-full ">
                        <img src={img1} className="w-full rounded-md" />
                        <div className="absolute flex   left-0 right-0 bottom-0 top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                              <div className='space-y-7 my-auto ml-12'>
                                    <h2 className='text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
                                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-secondary mr-4">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>

                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex   left-0 right-0 bottom-0 top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                              <div className='space-y-7 my-auto ml-12'>
                                    <h2 className='text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
                                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-secondary mr-4">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>

                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex   left-0 right-0 bottom-0 top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                              <div className='space-y-7 my-auto ml-12'>
                                    <h2 className='text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
                                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-secondary mr-4">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>

                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                              <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex   left-0 right-0 bottom-0 top-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">

                              <div className='space-y-7 my-auto ml-12'>
                                    <h2 className='text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
                                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div>
                                          <button className="btn btn-secondary mr-4">Discover More</button>
                                          <button className="btn btn-outline btn-secondary">Latest Project</button>

                                    </div>
                              </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                              <a href="#slide3" className="btn btn-circle mr-4 ">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                  </div>


            </div>
      );
};

export default Banner;