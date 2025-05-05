import { useState, useEffect, useRef } from "react";
import { Bell, X } from "lucide-react";

const Notifications = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const popupRef = useRef(null);

  // Dummy notifications (Replace this with API fetch later)
  useEffect(() => {
    const fetchNotifications = async () => {
      // Simulated API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Dummy data (Replace this with API response)
      const dummyData = [
        { id: 1, message: "New comment on your post" },
        { id: 2, message: "You have a new follower" },
        { id: 3, message: "Reminder: Meeting at 3 PM" },
        { id: 4, message: "Your profile was viewed 5 times" },
        { id: 5, message: "New message from John" },
        { id: 6, message: "Your friend liked your photo" },
      ];
      setNotifications(dummyData);
    };

    fetchNotifications();
  }, []);

  // Toggle Popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Close popup on clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    const handleScroll = () => {
      setShowPopup(false);
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showPopup]);

  return (
    <div className="relative">
      {/* Bell Icon with Notification Count */}
      <button onClick={togglePopup} className="relative">
        <Bell className="h-6 w-6 text-gray-700" />
        {notifications.length > 0 && !showPopup && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notifications Popup */}
      {showPopup && (
        <div ref={popupRef} className="absolute top-10 right-0 bg-white shadow-lg border w-64 rounded-md p-3">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-sm font-semibold">Notifications</h3>
            <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-black">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Notifications List (Max 5 at a time) */}
          <div className="max-h-48 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.slice(0, 5).map((notif) => (
                <div key={notif.id} className="p-2 text-sm border-b last:border-none">
                  {notif.message}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center">No notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
