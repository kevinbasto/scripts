# Brancher

**Brancher** es un script en Bash para automatizar la creación de ramas en Git siguiendo el estilo **Git Flow**. Permite crear ramas de tipo `feat`, `hotfix` o `release` con un solo comando y hace commit inicial automáticamente.

---

## 📂 Flags soportadas

| Flag | Tipo de rama | Descripción |
|------|-------------|-------------|
| `-f` | FEAT        | Rama para nueva funcionalidad |
| `-h` | HOTFIX      | Rama para corrección rápida |
| `-r` | RELEASE     | Rama para release/versionado |

---

## ⚡ Uso básico

```bash
brancher -f login-system
# crea y cambia a la rama: FEAT/login-system

brancher -h fix-crash
# crea y cambia a la rama: HOTFIX/fix-crash

brancher -r v1.2.0
# crea y cambia a la rama: RELEASE/v1.2.0
