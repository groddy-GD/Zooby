import { useState, useRef, useEffect } from "react";
import { Copy, Share2 } from "lucide-react"; // Import icons

const ShareProfile = ({ userId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); // Reference for popup

  const profileLink = "https://localhost:3000/portfolio"; // Dynamic link

  // Function to toggle popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Close popup when clicking outside or scrolling
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileLink);
    alert("Link copied to clipboard!");
    setShowPopup(false);
  };

  const nativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out my profile!",
          url: profileLink,
        })
        .then(() => setShowPopup(false))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Your browser does not support native sharing.");
    }
  };

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        onClick={togglePopup}
        className="flex items-center gap-2"
      >
        <span className="hidden md:inline px-2 py-1 bg-gray-500 text-white rounded-sm " >Share Profile</span>
        <Share2 className="w-5 h-5 md:hidden text-black" />
      </button>

      {/* Popup */}
      {showPopup && (
        <div ref={popupRef} className="absolute top-12 right-0 bg-white shadow-md p-3 rounded-md border w-56">
          <p className="text-sm text-gray-700 mb-2">Share this link:</p>

          {/* Copy Link */}
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
            <span className="text-xs text-gray-600 truncate">{profileLink}</span>
            <button onClick={copyToClipboard} className="text-gray-500 hover:text-black">
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* Native Share */}
          <button
            onClick={nativeShare}
            className="flex items-center gap-2 w-full text-gray-700 hover:bg-gray-100 p-2 rounded"
          >
            <Share2 className="w-5 h-5" />
            <span>Share via App</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareProfile;
