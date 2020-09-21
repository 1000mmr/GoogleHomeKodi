
exports.kodiConfig = [
  {
      id: 'sala', // Give your main instance here any name you want
      // YOUR_KODI_PROTOCOL (http or https)
      kodiProtocol: 'http',
      // YOUR_KODI_IP_ADDRESS
      kodiIp: '192.168.178.77',
      // YOUR_KODI_PORT
      kodiPort: '8080',
      // YOUR_KODI_USER_NAME
      kodiUser: 'HDS',
      // YOUR_KODI_PASSWORD
      kodiPassword: '1239'
  },
      // You can use this to specify additonal kodi installation, that you'd like to control.
      // For example alternate kodi destination 1:
  {
      id: 'cucina',
      // YOUR_2ND_KODI_PROTOCOL (http or https)
      kodiProtocol: 'http',
      // YOUR_2ND_KODI_IP_ADDRESS
      kodiIp: '192.168.1.15',
      // YOUR_2ND_KODI_PORT
      kodiPort: '8080',
      // YOUR_2ND_KODI_USER_NAME
      kodiUser: 'kodi',
      // YOUR_2ND_KODI_PASSWORD
      kodiPassword: '1239'
  }
];


exports.globalConfig = {
    // YOUR_CONNECTION_PASSWORD
    authToken: '1239',
    // YOUR_LOCAL_LISTENING_PORT
    listenerPort: '8099',
    // YOUR_YOUTUBE_API_KEY
    youtubeKey: 'AIzaSyDkx0tFRFAV7zxytynV9RGNDAk0BacLmBo'
};
