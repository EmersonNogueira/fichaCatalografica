const state = {
  auth: {
    client: {
      name: '',
      email: '',
      status: '',
      profile: '',
      avatar: ''
    },
    credentials: {
      token: '',
      expires_in: ''
    },
    menu: [],
    logged: false
  },
  toast: {
    y: 'bottom',
    x: 'right',
    mode: 'multi-line',
    timeout: 50000,
    visible: false,
    color: 'black',
    content: ''
  },
  publicCrendentials: {
    token: '',
    lastActivity: null,
    device: '',
    clientIP: '',
    publicLogged: false
  }
}

export default state
