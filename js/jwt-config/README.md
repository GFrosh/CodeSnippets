# JWT Configuration

A lightweight JWT (JSON Web Token) authentication module for Node.js applications using `jsonwebtoken`.

## Overview

This module provides a simple interface for generating and verifying JWT tokens with built-in expiration handling. JWT tokens are ideal for stateless authentication in modern web applications, APIs, and microservices.

## Installation

```bash
npm install jsonwebtoken
```

## Configuration

### Secret Key Setup

Replace the placeholder secret key with a strong, secure key:

```javascript
const secretKey = 'your_secret_key'; // Use environment variables in production
```

**Best Practice:** Store your secret key in environment variables to avoid exposing it in your codebase:

```javascript
const secretKey = process.env.JWT_SECRET || 'fallback_secret_key';
```

## API Reference

### `generateToken(payload)`

Generates a signed JWT token with a 1-hour expiration time.

**Parameters:**
- `payload` (Object): User data to encode in the token (e.g., `{ id: 123, username: 'user' }`)

**Returns:**
- (String) Encoded JWT token

**⚠️ Important:** Never include sensitive information like passwords in the payload. Include only: user ID, username, email, roles, etc.

**Example:**
```javascript
const { generateToken } = require('./jwt');

// Upon successful login
const token = generateToken({
    id: user.id,
    username: user.username,
    email: user.email
});
```

### `verifyToken(token)`

Verifies the validity and authenticity of a JWT token.

**Parameters:**
- `token` (String): JWT token to verify

**Returns:**
- (Object) Decoded payload if token is valid
- (null) If token is invalid, expired, or verification fails

**Example:**
```javascript
const { verifyToken } = require('./jwt');

const decoded = verifyToken(token);
if (decoded) {
    console.log('Token is valid:', decoded);
} else {
    console.log('Token is invalid or expired');
}
```

## Usage Examples

### Express Middleware Integration

```javascript
const express = require('express');
const { verifyToken, generateToken } = require('./jwt');

const app = express();

// Login endpoint - generate token
app.post('/login', (req, res) => {
    // Authenticate user (simplified)
    const user = { id: 1, username: 'john' };
    const token = generateToken(user);
    res.json({ token });
});

// Protected route middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
        return res.sendStatus(401);
    }
    
    const user = verifyToken(token);
    if (!user) {
        return res.sendStatus(403);
    }
    
    req.user = user;
    next();
}

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ user: req.user });
});
```

### Logout Strategy

JWT tokens are stateless, but you can implement logout by:

1. **Client-side:** Remove token from local storage
2. **Server-side:** Maintain a token blacklist in cache/database
3. **Token rotation:** Issue short-lived tokens with refresh tokens

```javascript
// Example: Token blacklist (in-memory, use Redis for production)
const tokenBlacklist = new Set();

app.post('/logout', authenticateToken, (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    tokenBlacklist.add(token);
    res.json({ message: 'Logged out successfully' });
});

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (tokenBlacklist.has(token)) {
        return res.sendStatus(403);
    }
    
    // ... rest of verification
}
```

## Best Practices

### Security

- ✅ **Use strong secret keys** (at least 32 characters)
- ✅ **Store secrets in environment variables** (never commit to Git)
- ✅ **Use HTTPS** for token transmission
- ✅ **Include user ID and roles, NOT passwords** in the payload
- ✅ **Set appropriate expiration times** (1 hour recommended)
- ✅ **Implement token refresh** for long-lived sessions

### Efficiency

- ✅ **Cache verification results** when possible (within same request cycle)
- ✅ **Use token expiration** to limit compromise window
- ✅ **Implement token refresh tokens** for seamless user experience
- ✅ **Verify tokens early** in middleware chain

### Common Pitfalls

- ❌ **Including passwords in payload** - Security risk
- ❌ **Hardcoding secrets** - Expose sensitive data
- ❌ **Long expiration times** - Reduces security
- ❌ **No token refresh mechanism** - Poor UX for long sessions
- ❌ **Trusting client-modified tokens** - Always verify server-side

## Environment Variables Example

```bash
# .env
JWT_SECRET=your_very_long_and_random_secret_key_here_min_32_chars
```

```javascript
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;
```

## Testing

```javascript
const { generateToken, verifyToken } = require('./jwt');

// Generate a test token
const token = generateToken({ id: 1, username: 'testuser' });
console.log('Generated Token:', token);

// Verify the token
const decoded = verifyToken(token);
console.log('Decoded Payload:', decoded);

// Test with invalid token
const result = verifyToken('invalid.token.here');
console.log('Invalid Token Result:', result); // null
```

## Token Expiration

Tokens expire after **1 hour**. To customize:

```javascript
// In jwt.js, modify the expiresIn option
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '24h' }); // 24 hours
}
```

Common expiration times:
- `'15m'` - Short-lived, high security
- `'1h'` - Balanced approach (default)
- `'7d'` - Long-lived, lower security
- `'30d'` - Very long-lived (use with refresh tokens)

## Related Concepts

- **Access Tokens** - Short-lived tokens for API access
- **Refresh Tokens** - Long-lived tokens to refresh access tokens
- **Bearer Tokens** - Standard authorization header format
- **Token Blacklist** - Invalidate tokens before expiration

## Resources

- [jsonwebtoken npm](https://www.npmjs.com/package/jsonwebtoken)
- [JWT.io - Visual JWT Debugger](https://jwt.io/)
- [RFC 7519 - JWT Standard](https://tools.ietf.org/html/rfc7519)
