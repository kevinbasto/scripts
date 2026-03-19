# Secret Generator

**Secret Generator** is a script that generates a cryptographically secure random secret and prints it to stdout.

It uses Node.js's `crypto.randomBytes` to produce 256 bytes (2048 bits) of random data, encoded as a base64 string.

---

## Usage

```bash
secret-generator
```

The generated secret is printed directly to stdout, so it can be piped or redirected as needed.

### Examples

```bash
secret-generator
secret-generator > my_secret.txt
echo "SECRET=$(secret-generator)" >> .env
```
