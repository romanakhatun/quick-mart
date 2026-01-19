import Image from "next/image";

const Banner = async () => {
  const res = await fetch(
    "https://ecommerce-saas-server-wine.vercel.app/api/v1/banner/website?status=active&sort=position",
    {
      headers: {
        "store-id": process.env.NEXT_PUBLIC_STORE_ID,
      },
    },
  );
  const data = await res.json();

  const banners = data?.data?.data;

  const mainBanner = banners.find((b) => b.type === "main");
  const sideBanners = banners
    .filter((b) => b.type === "side")
    .sort((a, b) => Number(a.position) - Number(b.position))
    .slice(0, 2);

  return (
    <section className="mid-container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Banner */}
        {mainBanner && (
          <div className="relative h-55 sm:h-80 lg:h-105 rounded-xl overflow-hidden lg:col-span-2">
            <Image
              src={mainBanner.image}
              alt="Main Banner"
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Side Banners */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {sideBanners.map((banner, i) => (
            <div
              key={i}
              className="relative h-37.5 sm:h-50 rounded-xl overflow-hidden"
            >
              <Image
                src={banner.image}
                alt={`Side Banner ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
