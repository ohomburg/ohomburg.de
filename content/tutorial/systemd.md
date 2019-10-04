+++
url = "/systemd.html"
title = "Systemd Unit Service Cheatsheet"
styles = ["cheatsheet.scss"]
lang = "en"
+++

Create a file `/etc/systemd/system/xyz.service`:

```
[Unit]
Description=Some description of the service

[Service]
ExecStart=/usr/bin/true
#Restart=always

[Install]
WantedBy=multi-user.target
```
