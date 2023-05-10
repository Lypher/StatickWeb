import ContactUs from "./ContactUs";

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">Found Protocol</h1>
        <ContactUs />
      </div>
    </div>
  );
}
