const checkAuth = (req, res, next) => {
  const { user } = req.session;

  if (!user) {
    return res.status(401).json({
      status: 'fail',
      message: 'unauthorized',
    })
  } else {
    req.user = user;
    next();
  }
}

module.exports = checkAuth;