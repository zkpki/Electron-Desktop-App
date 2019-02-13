Dave,

The username and passcode should be used with the pbkdf2 key generation library to derive a key. Then use the derived key to open the zkpki storage:

const pbkdf2 = require('pbkdf2')

// Generate key. Use passcode as password the username as salt
// Miniumum requirements for other arguments 10000 iterations, 32byte key, sha256 hash algorithm
var derivedKey = pbkdf2.pbkdf2Sync(passcode, username, 10000, 32, 'sha256')

const storage = require('zkpki/lib/storage').file;

try {
   var data = await storage.open(derivedKey, { path: "./" });
   var myCertificateAuthority = JSON.parse(await data.get());
}
catch (err) {
   // username/passcode was invalid
}

The data read from storage would be a previously stored Certificate Authority that would be used to issue certificates.   Return If no data is returned from storage, the UI should tell the user that the username/passcode was invalid and ask them to "try again, or register."  

Registration is nothing more than creating a CertificateAuthority and then setting it into  storage. 

To change a passcode you would create a new key (as described above) using the new passcode, and then save your data using this new key, then delete the data associated with the old key.

var data = await storage.open(oldkey,options);
var buf = await data.get();
var newData = await storage.create(newKey,options);
await newData.set(buf);
await storage.delete((oldkey,options);