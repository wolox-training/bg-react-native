module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.email === 'brian.gerez@wolox.com.ar') {
      if (req.body.password === '11111111') {
        res.status(200).json({token: 'asd', auth: true})
      } else {
        res.status(400).json({message: 'wrong password', passwordInvalid: true, auth: false})
      }
    } else {
      res.status(400).json({message: 'wrong email', emailInvalid: true, auth: false})
    }
  } else {
     next()
  }
};