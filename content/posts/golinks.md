---
author: "Haran Rajkumar"
title: "Local only golinks"
date: "2025-09-17"
tags:
 - dev-productivity
---


For the uninitiated, a golink (sometimes written as Go link) is a short, memorable URL that redirects to a longer, less convenient one. 
Examples
```
go goog -> https://google.com
go linear/3 -> https://linear.app/acme/issue/ACME-3
go pr/repo/1 -> https://github.com/acme/repo/pull/1
```

These are popular in enterprise settings because they offer the following benefits:
- Easier to remember (go/sprint vs. a long URL).
- Shareable (you can just say "go/design-doc" in a meeting).
- Consistent across teams (everyone uses the same keyword, not individual bookmarks).
- Templating (use variables like go/pr/{repo}/{id} for dynamic redirects) 

## Introducing Golinks
Many enterprise software solutions provide this feature (like [glean](https://docs.glean.com/user-guide/knowledge/go-links/how-go-links-work), [golinks corporate](https://www.golinks.io/)). However, I wanted a simple lightweight service that is a) easy to setup b) free c) runs completely locally . So, I implemented [one](https://github.com/haranrk/golinks).

### Setup
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/haranrk/golinks/master/install.sh)"
```
That's all!

The above script does the following
1. Installs the Python package using uv
2. Adds `127.0.0.1 go` to your `/etc/hosts` file (with sudo permission)
3. Sets up port forwarding from port 80 to 8888 using pfctl (macOS) or iptables (Linux), so you can use `go/shortcut` instead of `go:8888/shortcut`
4. Sets up a LaunchAgent (macOS) or systemd service (Linux) to run the server at startup
5. Starts the golinks server immediately on port 8888

Once installed, golinks runs a lightweight HTTP server that reads shortcuts from a JSON config file at `~/.golinks/config.json` and redirects `http://go/shortcut` to the configured destination URL. The config file is hot-reloaded, so you can add new shortcuts without restarting the server.

### Configuration Example
```json
{
  "github": "https://github.com",
  "mail": "https://gmail.com",
  "calendar": "https://calendar.google.com",
  "docs": "https://docs.google.com",
  "drive": "https://drive.google.com",
  "repo": {
    "template_url": "https://github.com/{1}/{2}",
    "defaults": {
      "1": "haranrk",
      "2": "golinks"
    }
  }
}
```


