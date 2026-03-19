# NAS

**NAS** is a Bash script that connects to the local NAS device via SSH using a password file.

It uses `sshpass` to authenticate with the password stored in `./ssh_nas` and connects to `root@192.168.1.16`.

---

## Usage

```bash
nas
```

> **Note:** The `ssh_nas` password file must be present in the current working directory when running the script.
