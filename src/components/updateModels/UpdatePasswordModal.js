export default function UpdatePasswordModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 z-60 shadow-2xl">
        <h2 className="text-black text-xl mb-4">Update Password</h2>
        <input type="password" placeholder="Old Password" className="w-full p-2 mb-3 rounded bg-gray-300 text-black" />
        <input type="password" placeholder="New Password" className="w-full p-2 mb-3 rounded bg-gray-300 text-black" />
        <input type="password" placeholder="Confirm New Password" className="w-full p-2 mb-4 rounded bg-gray-300 text-black" />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-600 text-white rounded">Cancel</button>
          <button className="px-4 py-2 bg-teal-500 text-white rounded">Update</button>
        </div>
      </div>
    </div>
  );
}
