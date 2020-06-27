Email manager

##  Preparation

Please connect your device to the internet

We will use `mymail@gmail.com` as source email address, so will edit some files

Edit file `/etc/ssmtp/ssmtp.conf`
```
root=mymail@gmail.com
mailhub=smtp.gmail.com:587
hostname=smtp.gmail.com:587
UseSTARTTLS=YES
AuthUser=mymail@gmail.com
AuthPass=Password1234
FromLineOverride=YES
```

Edit file `/etc/ssmtp/revaliases`
```
root:mymail@gmail.com:smtp.gmail.com:587
```

Install NodeJS, if it is not yet
```
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs git make g++ gcc build-essential
```

##  Install

To install this packet use `wirenboard-module` command. Install it if necessary
```
npm i -g wirenboard-module
```

Add email module and rule
```
wirenboard-module email
```

----

Best regards
- **FullHouse team**
- https://fullhouse-online.ru
- support@fullhouse-online.ru
