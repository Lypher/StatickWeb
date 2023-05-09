import ContactUs from "./ContactUs";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <h3 className="text-2xl font-bold">FoundProtocol</h3>
      <ContactUs />
    </div>
  );
}
