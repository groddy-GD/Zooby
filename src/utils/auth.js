const APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;
const APP_SECRET = process.env.REACT_APP_FACEBOOK_APP_SECRET;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const API_VERSION = "v20.0";

/**
 * Generates the Instagram authentication URL
 */
export const getInstagramAuthUrl = () => {
  return `https://www.facebook.com/${API_VERSION}/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=pages_show_list,instagram_basic,instagram_manage_comments,instagram_content_publish&response_type=code`;
};

/**
 * Exchanges the authorization code for an access token
 */
export const exchangeToken = async (code) => {
  try {
    const response = await fetch(`https://graph.facebook.com/${API_VERSION}/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: APP_ID,
        client_secret: APP_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code,
      }),
    });

    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error("Error exchanging token:", error);
    return null;
  }
};

/**
 * Fetches Instagram Business Account linked to the user
 */
export const fetchInstagramAccount = async (accessToken) => {
  try {
    const response = await fetch(
      `https://graph.facebook.com/me/accounts?fields=id,name,instagram_business_account&access_token=${accessToken}`
    );
    const data = await response.json();
    
    if (data.data.length > 0 && data.data[0].instagram_business_account) {
      return data.data[0].instagram_business_account.id;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching Instagram account:", error);
    return null;
  }
};
