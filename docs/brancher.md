# Brancher

**Brancher** es un script en Bash para automatizar la creación de ramas en Git siguiendo el estilo **Git Flow**. Permite crear ramas de tipo `feat`, `hotfix`, `release` o `develop` con un solo comando y hace commit inicial automáticamente.

---

## 📂 Flags soportadas

| Flag | Tipo de rama | Requiere Nombre | Descripción |
|------|-------------|:---------------:|-------------|
| `-f` | FEAT        | Sí              | Rama para nueva funcionalidad |
| `-h` | HOTFIX      | Sí              | Rama para corrección rápida |
| `-r` | release     | Sí              | Rama para release/versionado |
| `-d` | develop     | **No** | Rama principal de desarrollo |

---

## ⚡ Uso básico

```bash
brancher -f login-system
# crea y cambia a la rama: FEAT/login-system

brancher -h fix-crash
# crea y cambia a la rama: HOTFIX/fix-crash

brancher -r v1.2.0
# crea y cambia a la rama: release/v1.2.0

brancher -d
# crea y cambia directamente a la rama: develop