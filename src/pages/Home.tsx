import CustomLink from "../components/CustomLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Freelancing UI</h1>
        <CustomLink title="Go to Dashboard" href="/dashboard" />
      </div>
    </div>
  );
}
