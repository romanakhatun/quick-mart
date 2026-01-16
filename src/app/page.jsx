import Banner from "@/components/Banner";
import Category from "@/components/Category";
import NewArrivals from "@/components/NewArrivals";
import Personalized from "@/components/Personalized";

export default function Home() {
  return (
    <main className="min-h-screen bg-[f4f5ff]">
      <Banner />
      <Category />
      <NewArrivals />
      <Personalized />
    </main>
  );
}
