## Installation using Ansible

### Add api keys
- frontend/.env
- backend/config.js

### Flash raspbian on sd card
Tested with raspbian with Debian 13 (2025-12-04-raspios-trixie-arm64-lite)

### Install your ssh key
```
ssh-copy-id pi@<ip-of-pi>
```
### Run ansible
```
ansible-playbook playbooks/mainPlaybook.yml -i inventories/testPi3b+.yml 
```

### Setting static IP for wifi hotspot
```
sudo nmcli connection add \
  type wifi \
  con-name autosteer-hotspot \
  ssid <ssid> \
  wifi-sec.key-mgmt wpa-psk \
  wifi-sec.psk <password> \
  ipv4.addresses 192.168.1.2/24 \
  ipv4.gateway 192.168.1.1 \
  ipv4.dns 8.8.8.8 \
  ipv4.method manual \
  connection.autoconnect-priority 10
```