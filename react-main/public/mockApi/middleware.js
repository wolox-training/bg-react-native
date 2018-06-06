module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.email === 'brian.gerez@wolox.com.ar' && req.body.password === '11111111') {
      res.status(200).json({token: 'asd'})
    } else {
      res.status(400).json({message: 'wrong password'})
    }
  } else {
    next()
  }
}