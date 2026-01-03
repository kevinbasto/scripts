# Commiter

**Commiter** es un script en Bash que automatiza los commits en Git utilizando **flags** para especificar el tipo de commit y un mensaje. Después de hacer el commit, realiza un `git push` automáticamente.

---

## 📂 Flags soportadas

| Flag    | Descripción                           |
|---------|---------------------------------------|
| `-f`    | Commit tipo **feat** (nueva funcionalidad) |
| `--fix` | Commit tipo **fix** (corrección de bug)   |
| `-t`    | Commit tipo **typo** (errores tipográficos) |

---

## ⚡ Uso básico

```bash
commiter -f "add login functionality"
commiter --fix "correct README typo"
commiter -t "fix minor typos in code comments"
