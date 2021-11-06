exports.dockerServer = async (req, res, next) => {
  try {
    res.status(200).json('runnin on docker motherDocker !!')
  } catch (err) {
    console.trace(err);
    res.status(500).json({ message: err.message })
  }
  next();
};