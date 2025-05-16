

import Link from "next/link";
import AnimatedElement from "@/hooks/AnimatedElement";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
  },
  {
    id: 2,
    section: "Support",
    link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
  }
]

const footer = () => {
  return (
    <div className="bg-gray-900 -mt-64 " id="first-section">
      <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-4'>
            <img src={'/assets/logo/Logo2.svg'} alt="logo" className='pb-4' />
            <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> Level up your skills, and get dream <br /> job with passion. </h3>
            <div className='flex gap-4'>
              <Link href="/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
              <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
              <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.760236454767!2d76.1300620759723!3d11.04252588912287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba634dffcb8936f%3A0x600a4ae51d45af31!2sMMS%20High%20SCHOOL!5e0!3m2!1sen!2sin!4v1747329549119!5m2!1sen!2sin" width="450" height="250"  loading="lazy" ></iframe>
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='pb-24 px-4'>
        <h3 className='text-center text-white font-sans font-bold'>@2025 - All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> MMS Educational Campus</Link></h3>
      </div>

    </div>
  )
}

export default footer;