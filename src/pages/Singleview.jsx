const Singleview = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Breadcrumb */}
      <div className="mb-6 text-gray-500 text-sm">
        Home &gt; Electronics &gt; Laptop &gt; HP Laptop
      </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Left Side */}
        <div className="w-full md:w-1/2">

          <div className="bg-white border rounded-2xl shadow-lg p-6">

            <img
              src="https://via.placeholder.com/500"
              alt="Product"
              className="w-full h-[450px] object-contain"
            />

          </div>

        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-5">

         
          <h1>
            HP Laptop
          </h1>

         
         

          {/* Price */}
          <div className="flex items-center gap-4">

            <h2 >
              ₹30,000
            </h2>

          

            

          </div>

          <p>
           
              Category : Laptop
          </p>

          
          <p>
           
              Brand :   HP
          </p>

        
          
          {/* Description */}
          <div>

            <h3 className="text-xl font-bold mb-2">
              Description
            </h3>

            <p className="text-gray-600 leading-7">
              This HP laptop is designed for students,
              office work and everyday use. It delivers
              excellent performance with a stylish design.
            </p>

          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">

            <span className="font-semibold">
              Quantity
            </span>

            <div className="flex border rounded">

              <button className="px-4 py-2">
                -
              </button>

              <span className="px-5 py-2">
                1
              </span>

              <button className="px-4 py-2">
                +
              </button>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button >
              Add To Cart
            </button>

            <button>
              Buy Now
            </button>

          </div>

          {/* Delivery Information */}
          <div className="grid grid-cols-3 gap-4 border rounded-xl p-5">

            <div className="text-center">

              <p className="font-semibold">
                Free Delivery
              </p>

            </div>

            <div className="text-center">
              <p className="font-semibold">
                1 Year Warranty
              </p>

            </div>

            <div className="text-center">

            

              <p >
                7 Days Return
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Description Section */}
      <div>

        <h2 >
          Product Description
        </h2>

        <p >

          The HP Laptop delivers powerful performance,
          a modern design, and a long-lasting battery.
          It is suitable for programming, office work,
          online learning, and entertainment.

        </p>

      </div>

    </div>
  );
};

export default Singleview;