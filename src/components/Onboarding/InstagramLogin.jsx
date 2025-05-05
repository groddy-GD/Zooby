import { useEffect, useState } from "react";
import { getInstagramAuthUrl, exchangeToken, fetchInstagramAccount } from "../../utils/auth";

const InstagramLogin = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [instagramAccount, setInstagramAccount] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      handleInstagramAuth(code);
    }
  }, []);

  const handleInstagramAuth = async (code) => {
    const token = await exchangeToken(code);
    if (token) {
      setAccessToken(token);
      console.log("Access Token:", token);

      const instaAccountId = await fetchInstagramAccount(token);
      if (instaAccountId) {
        setInstagramAccount(instaAccountId);
        console.log("Linked Instagram Account ID:", instaAccountId);
      } else {
        console.log("No Instagram account linked.");
      }
    }
  };

  return (
    <div className="w-full text-center">
      {accessToken ? (
        <p className="text-green-500">Instagram Linked Successfully! Account ID: {instagramAccount}</p>
      ) : (
        <button
          onClick={() => (window.location.href = getInstagramAuthUrl())}
          className="w-full bg-blue-500 text-white py-3 rounded mb-48"
        >
          Click here to link Instagram
        </button>
      )}
    </div>
  );
};

export default InstagramLogin;
