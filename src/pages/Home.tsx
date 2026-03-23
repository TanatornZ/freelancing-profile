import CustomLink from "../components/CustomLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center" role="heading">
          Welcome to Freelancing UI
        </h1>
        <div className="flex gap-6 justify-center" role='main'>
          <CustomLink title="Dashboard" href="/dashboard" />
          <CustomLink title="Sign In" href="/signin" />
          <CustomLink title="Log In" href="/login" />
          <CustomLink title="BabyBurger" href="/hamburger" />
          <CustomLink title="Laptop Store" href="/laptops" />
        </div>
      </div>
    </div>
  );
}
