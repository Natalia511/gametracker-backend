const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { mongo } = require('mongoose');

router.post('/registro', async (req, res) => {
  const { nombre, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const nuevoUsuario = { id: usuarios.length + 1, nombre, email, password: passwordHash };
  usuarios.push(nuevoUsuario);

  res.json({ mensaje: 'Usuario registrado con éxito', usuario: nuevoUsuario });
 
});
  const guardarUsuarios = (usuarios) => {
  fs.writeFileSync(usuariosFile, JSON.stringify(usuarios, null, 2));
};

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const usuarios = leerUsuarios();

  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado.' });

  const esValido = await bcrypt.compare(password, usuario.password);
  if (!esValido) return res.status(401).json({ mensaje: 'Contraseña incorrecta.' });

  const token = jwt.sign({ id: usuario.id, nombre: usuario.nombre }, SECRET_KEY, { expiresIn: '2h' });

  res.json({ mensaje: 'Login exitoso', token });
});


module.exports = router;

