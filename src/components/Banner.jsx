import Image from "next/image";

const Banner = () => {
  return (
    <section className="mid-container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Big Banner */}
        <div className="relative h-55 sm:h-80 lg:h-105 rounded-xl overflow-hidden lg:col-span-2">
          <Image
            src="/assets/banner.png"
            alt="Headphone Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Small assets Wrapper */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Small Banner 1 */}
          <div className="relative h-37.5 sm:h-50 rounded-xl overflow-hidden">
            <Image
              src="/assets/banner1.png"
              alt="Mac Mini"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Banner 2 */}
          <div className="relative h-37.5 sm:h-50 rounded-xl overflow-hidden">
            <Image
              src="/assets/banner2.png"
              alt="iPad Air"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
