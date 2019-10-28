# Environment Setup
## Questions to ask
- Who's using their own laptop?
  - Mac, Windows or Linux?
- Who is working on the workstations?
  - Do you have a system to work on at home?

## If you're working on your own system
Install the following software. If one is already installed, check the version and compare it to the latest stable release. Ask you instructor before you update/upgrade.
- VirtualBox
- Vagrant
- Git
SAIT workstations will have this software installed already.

## Setup Vagrant
clone this git repo:
https://github.com/acidtone/node-express-mongodb

1. Using Git Bash or similar command line interface to navigate to this project on your file system.
2. `$ vagrant up`
3. `$ vagrant ssh`

## Rebuild Vagrant
1. `$ vagrant global-status`
2. Copy and paste the box id of the vagrant box you're rebuilding
3. `$ vagrant destroy [box-id]`
4. `$ vagrant up`

## Installing Express
Vagrant doesn't like the symlinks that some node modules (like express) so you will need to install it with the --no-bin-link flag:
`$ npm install express --no-bin-link`
This will not be needed for most modules (generally ones that come with a cli client) but you will need to use this flag if you run into a 'sym-link' error.