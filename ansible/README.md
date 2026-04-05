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