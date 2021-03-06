function cookiesCleaner(req, res, next) {
  if (req.cookies.user_sid && !req.session.user && !req.session.admin) {
    res.clearCookie('user_sid');
  }
  next();
}

const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/entries');
  } else {
    next();
  }
};

module.exports = {
  sessionChecker,
  cookiesCleaner,
};
