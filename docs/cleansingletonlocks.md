# cleansingletonlocks - Clean Brave Browser Singleton Lock Files

Removes the `SingletonLock` and `SingletonCookie` files from the Brave Browser config directory.

These files are created by Brave to prevent multiple instances from running simultaneously. If Brave crashes or is force-killed, these files may not be cleaned up, causing Brave to refuse to open on the next launch (thinking another instance is already running).

## Usage

```bash
cleansingletonlocks
```

## What it does

Deletes the following files:
- `~/.config/BraveSoftware/Brave-Browser/SingletonLock`
- `~/.config/BraveSoftware/Brave-Browser/SingletonCookie`

## When to use

Run this when Brave Browser fails to start after a crash or force-close.
