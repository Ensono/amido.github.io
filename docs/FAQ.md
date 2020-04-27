---
id: faq
title: FAQ
sidebar_label: FAQ
---

## FAQ

* Why am I getting a port in use error?
  * port 3000 needs to be open for react web interface, you can check it with these commands
    * MACOS: `sudo lsof -i -n -P | grep TCP | grep 3000`
    * LINUX: `sudo netstat -tlpun`
    * WINDOWS: `netstat -n -a –o`
      * I'm not 100% sure about windows I had to look this up on the web
