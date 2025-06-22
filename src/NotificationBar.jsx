import { useState } from "react";

export default function NotificationBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-gray-200 text-gray-800 text-sm py-3 px-4 flex justify-center items-center gap-3">
      {/* Notification Text */}
      <span className="text-center">
        Get instant cashback with eligible cards. Terms apply.
        <a href="#" className="underline ml-1">Learn more</a>
      </span>

      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="text-gray-600 hover:text-black text-xl font-bold leading-none"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}

