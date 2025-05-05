import Sidebar from "@/components/Sidebar";




const BillingHistory = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar></Sidebar>
      <main className="p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Billing History</h1>
        <p className="mt-2 text-sm text-gray-600">
          You don’t have any billing history yet.
        </p>
      </main>
    </div>
  );
};

export default BillingHistory;
