import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-sm p-10">
      <Head>
        <title>Threads - The peer-to-peer fashion marketplace</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content="Discover unique South African Fashion, from African attire to streetwear whatever your style we got you." />
        <meta property="og:title" content="Threads: Join the waiting list." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://threadsapp.netlify.app/" />
        <meta property="og:image" content="https://threadsapp.netlify.app/images/ogimage.png" />
      </Head>
     <main className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div className="sm:p-2 md:p-10">
          <div className="text-center sm:text-left">
            <h1 className="font-medium text-5xl sm:text-4xl text-gray-900">Threads</h1>
          </div>
          <div className="sm:hidden sm:place-items-center sm:pb-0 pb-5">
            <Image      
              src="/threads-ui.png"
              alt="Threads app design"
              width={695}
              height={700}
            />
          </div>
          <div>
            <h3 className="text-2xl text-center sm:text-left sm:text-7xl font-semibold sm:font-bold mt-10 text-gray-900">Discover unique South African Fashion</h3>
          </div>
          <p className="text-center sm:text-left mt-8 text-sm sm:text-lg font-light ">From african attire to streetwear. Indie designers to vintage, whatever your style we got you.</p>
          <p className="text-center sm:text-left mt-5 text-sm sm:text-lg font-light">Become part of a community that wants to transform fashion one item at a time.</p>
          <div className="flex flex-col justify-items-center sm:items-start">
            <Link href="https://x3763ggzaux.typeform.com/to/cJ61FIsJ" passHref>
              <button className="mt-8 px-9 py-3 bg-gray-900 text-white font-medium rounded-md">Join Waitlist</button>
            </Link>
          </div>
        </div>
        <div className="hidden sm:grid sm:place-items-center sm:pb-0 pb-5 ">
          <Image
            src="/threads-ui.png"
            alt="Threads app design"
            width={695}
            height={700}
          />
        </div>
     </main>
    </div>
  )
}
