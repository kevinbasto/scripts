# SSH Keygen Gen

**SSH Keygen Gen** es un script en Bash para generar pares de claves SSH de forma rápida y configurable usando `ssh-keygen`.

Soporta los tipos de clave más comunes (`ed25519`, `rsa`, `ecdsa`), permite personalizar el nombre del archivo, el comentario, los bits y el directorio de salida.

---

## Flags soportadas

| Flag | Descripción | Valor por defecto |
|------|-------------|-------------------|
| `-t` | Tipo de clave: `rsa`, `ed25519`, `ecdsa` | `rsa` |
| `-n` | Nombre del archivo de la clave | `id_<type>` |
| `-c` | Comentario embebido en la clave (e.g. `user@host`) | ninguno |
| `-b` | Bits para claves RSA o ECDSA | `4096` (RSA) |
| `-o` | Directorio de salida | `~/.ssh` |

---

## Uso básico

```bash
ssh-keygen-gen -t ed25519 -c "kevin@server"
# Genera ~/.ssh/id_ed25519 con comentario kevin@server

ssh-keygen-gen -t rsa -b 4096 -n deploy_key -c "deploy@myapp"
# Genera ~/.ssh/deploy_key con 4096 bits

ssh-keygen-gen -t ecdsa -n github_key -c "kevin@github" -o ~/keys
# Genera ~/keys/github_key de tipo ecdsa
```

---

## Salida

Al finalizar, el script imprime:

- La ruta de la clave privada generada
- La ruta de la clave pública generada
- El contenido de la clave pública (lista para copiar a un servidor)

```
Generating ed25519 key at /home/kevin/.ssh/id_ed25519...
...
Key generated successfully:
  Private key: /home/kevin/.ssh/id_ed25519
  Public key:  /home/kevin/.ssh/id_ed25519.pub

Public key content:
ssh-ed25519 AAAAC3Nza... kevin@server
```

---

## Notas

- Si la clave ya existe en la ruta de destino, el script termina con error para evitar sobreescribirla.
- Si el directorio de salida no existe, se crea automáticamente con permisos `700`.
- Para RSA, el mínimo recomendado es 2048 bits; se recomienda 4096.
