#!/bin/bash
# ===============================================================
# Script: commiter
# Descripción: Automatiza commits en Git usando flags para el tipo
# de commit y un mensaje. Luego hace push automáticamente.
# 
# Flags soportadas:
#   -f      → feat (nueva funcionalidad)
#   --fix   → fix (corrección de bug)
#   -t      → typo (corrección de errores tipográficos)
#
# Uso:
#   commiter -f "mensaje del commit"
#   commiter --fix "mensaje del commit"
#   commiter -t "mensaje del commit"
#
# Autor: Kevin Basto
# Fecha: 2026-01-03
# ===============================================================

# ===============================================================
# Validación: verificar que se haya pasado al menos un argumento
# ===============================================================
if [ $# -eq 0 ]; then
    echo "Usage: commiter [-f | --fix | -t] <message>"
    exit 1
fi

# ===============================================================
# Procesamiento de la flag
# ===============================================================
case "$1" in
    -f)
        TYPE="feat"   # commit tipo "feature"
        ;;
    --fix)
        TYPE="fix"    # commit tipo "fix"
        ;;
    -t)
        TYPE="typo"   # commit tipo "typo"
        ;;
    *)
        echo "Error: Invalid flag. Use -f, --fix, or -t"
        exit 1
        ;;
esac

shift # eliminar la flag del listado de argumentos, dejando solo el mensaje

# ===============================================================
# Validación del mensaje del commit
# ===============================================================
if [ $# -eq 0 ]; then
    echo "Error: Commit message is required"
    exit 1
fi

# Combina todos los argumentos restantes en un solo string
MESSAGE="$*"

# ===============================================================
# Ejecutar commit y push
# ===============================================================
git add .  # stage todos los cambios
git commit -m "[$TYPE]: $MESSAGE"  # commit con el formato: [tipo]: mensaje
git push  # push automático al repositorio remoto

# ===============================================================
# Mensaje de confirmación
# ===============================================================
echo "✅ Commit created: $TYPE: $MESSAGE"
