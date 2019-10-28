# Update packages
sudo apt-get update

# Install Node.js and NPM
sudo apt-get install -y nodejs

# Install MongoDB
sudo apt-get install -y mongodb

# Install NPM
sudo apt-get install -y npm

# install node dependecies
# sudo npm install -g express
# sudo npm install -g mongodb
# sudo npm install -g bcryptjs
# sudo npm install -g dotenv
# --no-optional suppresses harmless fsevents warnings
# on non-Mac systems
# sudo npm install -g nodemon --no-optional

# Move user to /vagrant on ssh
echo "cd /vagrant" >> /home/vagrant/.bashrc
