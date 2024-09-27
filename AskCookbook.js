(function () {
  // Cookbook Onboard (AI Assistant). API key is public so it's fine to just hardcode it here.
  const COOKBOOK_PUBLIC_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmY2ZDQ5OTU2ZDQyNWJiYmU5YzMxYjIiLCJpYXQiOjE3Mjc0NTIzMTMsImV4cCI6MjA0MzAyODMxM30.UXFH8a3DnCPOWklKJ0yQKrNfGmgPZuf4qZd-v-OeeKg";

  var element = document.getElementById("__cookbook");
  if (!element) {
    element = document.createElement("div");
    element.id = "__cookbook";
    element.dataset.apiKey = COOKBOOK_PUBLIC_API_KEY;
    document.body.appendChild(element);
  }

  var script = document.getElementById("__cookbook-script");
  if (!script) {
    script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@cookbookdev/docsbot/dist/standalone/index.cjs.js";
    script.id = "__cookbook-script";
    script.defer = true;
    document.body.appendChild(script);
  }
})();
