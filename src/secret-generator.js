const crypto = require('crypto');

// Generate a 256-byte (2048-bit) secret and encode in base64
const secret = crypto.randomBytes(256).toString('base64');

console.log(secret);
