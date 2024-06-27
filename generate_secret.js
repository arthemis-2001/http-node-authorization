const crypto = require("crypto");
const apiSecret = crypto.randomBytes(64).toString("hex");
console.log("API_SECRET:", apiSecret);
