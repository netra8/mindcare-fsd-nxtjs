import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* Hero Section with Background Image */}
      <div
        className="rounded-xl bg-base-200 p-10"
        
        style={{
          backgroundImage: `url('/lotus.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '35vh',
        }}
        
      >
        
        {/* <h1 className="text-5xl font-bold mb-4 text-center text-pink-600 ">
          Welcome to MindCare
        </h1> */}
      </div>

      {/* About Section */}
      <div className="box-container w-full rounded-xl bg-slate-50 p-10 mt-8 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">About MindCare</h2>
        <p className="text-xl text-grey mb-6">
          At MindCare, we believe in the power of products to enhance mental
          health and promote well-being. Our carefully curated collection
          includes items designed to bring comfort, relaxation, and joy to your
          life.
        </p>

      </div>
      <div className="box-container w-full rounded-xl  bg-slate-50 p-10 mt-8 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">
          Invest in Your Mental Health Today
        </h2>
        <p className="text-xl text-grey mb-6">
          Explore our collection of products and take a step towards a healthier
          and happier you.
        </p>
        <Link href="/all-products" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
