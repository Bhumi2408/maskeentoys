// src/app/data/web3forms.js
// Contact form aur popup form dono yahi function use karte hai

export const WEB3FORMS_ACCESS_KEY = "1680d147-2056-4ce8-98de-053b43b71a59";

export const WEB3FORMS_ACCESS_KEY_2 = "aef38eb9-7754-461d-893e-dec8c08c038c";

export const submitToWeb3Forms = async (payload, accessKey = WEB3FORMS_ACCESS_KEY) => {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...payload, access_key: accessKey }),
  });
  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
};
