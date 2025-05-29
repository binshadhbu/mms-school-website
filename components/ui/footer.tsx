import Link from "next/link";


const footer = () => {
  return (
    <div className="bg-gray-900 pt-10 px-10" id="first-section">
      <div className=" grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8 ">

        {/* COLUMN-1 */}

        <div className='col-span-4 '>
          <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> Level up your skills, and get dream <br /> job with passion. </h3>
          <div className='flex gap-4'>
            <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
            <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
            <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
          </div>
        </div>

        {/* CLOUMN-2/3 */}


        <div className="group relative col-span-2 grid md:grid-cols-2 ">
          <div>
            <ul>

              <li className='mb-5'>
                <Link href="/" className="text-white text-sm font-normal mb-6 space-links">Home</Link>
              </li>
              <li className='mb-5'>
                <Link href="/activities" className="text-white text-sm font-normal mb-6 space-links">Activities</Link>
              </li>
              <li className='mb-5'>
                <Link href="/gallery" className="text-white text-sm font-normal mb-6 space-links">Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>

              <li className='mb-5'>
                <Link href="/programmes/kindergarten" className="text-white text-sm font-normal mb-6 space-links ">Kindergarten</Link>
              </li>
              <li className='mb-5'>
                <Link href="/programmes/primary" className="text-white text-sm font-normal mb-6 space-links">Primary</Link>
              </li>
              <li className='mb-5'>
                <Link href="/programmes/highschool" className="text-white text-sm font-normal mb-6 space-links">High School</Link>
              </li>

            </ul>
          </div>
        </div>

        <address className="not-italic">
          <ul>
            <li className="text-white text-sm font-normal mb-2 whitespace-nowrap">MMS Educational Campus</li>
            <li className="text-white text-sm font-normal mb-2 whitespace-nowrap">Kozhinhil, Perinthattiri PO</li>
            <li className="text-white text-sm font-normal mb-2 whitespace-nowrap">Malappuram, Kerala 676507</li>
            <li className="text-white text-sm font-normal whitespace-nowrap">+91 1234567890</li>
          </ul>
        </address>

        {/* CLOUMN-4 */}
        
        <div className="col-span-4 flex justify-end items-start ml-20 hidden lg:flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.760236454767!2d76.1300620759723!3d11.04252588912287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba634dffcb8936f%3A0x600a4ae51d45af31!2sMMS%20High%20SCHOOL!5e0!3m2!1sen!2sin!4v1747329549119!5m2!1sen!2sin"
            width="350"
            height="250"
            loading="lazy"
            className="px-10"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* </div> */}
      <div className='pb-15 px-4 mt-5' >
        <h3 className='text-center text-white font-lato text-sm '>@2025 - All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> MMS Educational Campus</Link></h3>
      </div>

    </div>
  )
}

export default footer;