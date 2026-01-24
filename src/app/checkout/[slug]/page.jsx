"use client";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <>
      <title>Quick Mart | Checkout Page</title>
      <meta name="description" content=""></meta>
      <div className="mid-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="order-1 lg:order-2 lg:col-span-1 space-y-6">
            {/* Product List */}
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="text-lg font-semibold mb-4">Product List</h3>

              <div className="flex items-center gap-4 border border-base-100 rounded-lg p-3">
                <Image
                  src="/assets/products/airpods1.webp"
                  alt="product"
                  width={60}
                  height={60}
                  className="rounded object-contain"
                />

                <div className="flex-1">
                  <p className="font-medium text-sm">
                    Realme Buds Air 7 Pro TWS Earbuds
                  </p>
                  <p className="text-sm text-gray-400 line-through">৳8000</p>
                  <p className="text-primary font-semibold">৳7000</p>
                </div>

                <div className="flex items-center gap-2 border rounded px-2 py-1">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow p-5 space-y-3">
              <h3 className="text-lg font-semibold">Order Summary</h3>

              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>৳7000</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>৳0</span>
              </div>

              <div className="flex justify-between font-semibold text-green-600">
                <span>Total</span>
                <span>৳7000</span>
              </div>

              <p className="text-xs text-gray-400">
                VAT included, where applicable
              </p>

              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Enter your coupon code"
                  className="input-style"
                />
                <button className=" px-3 py-3  rounded-md text-sm bg-primary hover:bg-primary/90 text-white font-medium flex justify-center items-center gap-2 disabled:cursor-not-allowed transition">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Shipping Address  */}
          <div className="order-2 lg:order-1 lg:col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input-style"
                />
              </div>

              <div>
                <label className="label">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="input-style"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="label">Select your area</label>
              <select className="w-full border border-gray-300 text-sm font-medium  px-3 outline-none  focus:border-primary duration-300  py-3 rounded-lg">
                <option>Inside Dhaka City (ঢাকা সিটির ভিতরে)</option>
                <option>Outside Dhaka City</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="label">Your Address</label>
              <input
                type="text"
                placeholder="House, Road, Area, District, Postal Code"
                className="input-style"
              />
            </div>

            <div className="mt-4">
              <label className="label">Your Note (Optional)</label>
              <textarea
                placeholder="Note..."
                className="w-full rounded-lg border border-gray-300 text-sm font-medium py-2.5 px-3 outline-none focus:border-primary duration-300"
              ></textarea>
            </div>

            {/* Payment */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <p className="font-semibold mb-2">Payment Info :</p>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio radio-primary"
                  defaultChecked
                />
                <span className="font-medium">Cash On Delivery</span>
              </label>

              <label className="flex items-center gap-2 mt-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio radio-primary"
                />
                <span className="font-medium">Payment Method</span>
              </label>
            </div>

            <button className="text-white bg-primary border-0 py-3 px-6 focus:outline-none w-full rounded hover:bg-green-900 mt-4 cursor-pointer">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
