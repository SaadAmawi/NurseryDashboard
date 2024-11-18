const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader);
  
    if (!authHeader) {
      return res.status(403).send('No token provided wtfuuu');
    }
  
    const token = authHeader.split(' ')[1];
    console.log('Extracted Token:', token);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error('JWT Verification Error:', err);
        return res.status(500).send('Failed to authenticate token wtfu');
      }
      req.userId = decoded.id;
      req.userRole = decoded.role;
      next();
    });
  };
  
  

exports.checkRole = (role) => {
  return (req, res, next) => {
    if (req.userRole !== role) return res.status(403).send({ message: "Access denied" });
    next();
  };
};
