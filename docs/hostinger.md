# Hostinger

**Hostinger** is a script that connects to the Hostinger server via SSH using a password file.

It uses `sshpass` to authenticate with the password stored in `./hostinger_pass.txt` and connects to the host defined in `~/hostinger`.

---

## Usage

```bash
hostinger
```

> **Note:** `hostinger_pass.txt` must be present in the current working directory, and `~/hostinger` must contain the SSH connection string (e.g. `user@host`).
