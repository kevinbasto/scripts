# creater

`creater` es un script de Bash que automatiza la creación de un repositorio en GitHub utilizando la **GitHub CLI (`gh`)**, configura el repositorio Git local y realiza el primer `push` automáticamente.

## Características

- Crea repositorios públicos o privados en GitHub.
- Permite crear repositorios dentro de una organización o usuario específico.
- Detecta automáticamente si ya existe un repositorio Git local.
- Inicializa un repositorio Git si aún no existe.
- Configura el remoto `origin`.
- Detecta automáticamente la rama actual.
- Crea un commit inicial únicamente cuando es necesario.
- Realiza el primer `push` automáticamente.

---

# Requisitos

Antes de utilizar el script es necesario contar con:

- Bash
- Git
- GitHub CLI (`gh`)

Además, debes estar autenticado en GitHub mediante:

```bash
gh auth login
```

Puedes verificar tu autenticación con:

```bash
gh auth status
```

---

# Uso

```bash
creater -n <repository_name> [options]
```

## Sintaxis

```bash
creater -n <repo_name> \
        [-s public|private] \
        [-d owner]
```

---

# Opciones

| Opción | Descripción | Obligatorio | Valor por defecto |
|---------|-------------|-------------|-------------------|
| `-n` | Nombre del repositorio | Sí | — |
| `-s` | Visibilidad (`public` o `private`) | No | `private` |
| `-d` | Usuario u organización donde se creará el repositorio | No | Usuario autenticado |
| `-h` | Muestra la ayuda | No | — |

---

# Ejemplos

## Crear un repositorio privado

```bash
creater -n MyProject
```

Resultado:

```
https://github.com/tu_usuario/MyProject
```

---

## Crear un repositorio público

```bash
creater -n MyProject -s public
```

---

## Crear un repositorio dentro de una organización

```bash
creater -n API -d MyOrganization
```

Resultado:

```
https://github.com/MyOrganization/API
```

---

## Crear un repositorio público dentro de una organización

```bash
creater -n API -s public -d MyOrganization
```

---

# Flujo de trabajo

El script realiza automáticamente las siguientes acciones:

1. Verifica que la GitHub CLI esté instalada.
2. Verifica que el usuario esté autenticado.
3. Crea el repositorio en GitHub.
4. Detecta si el directorio actual pertenece a un repositorio Git.
5. Si no existe un repositorio:
   - Ejecuta:

```bash
git init -b main
```

6. Obtiene la rama actual.
7. Configura el remoto `origin`.
8. Agrega todos los archivos:

```bash
git add .
```

9. Crea un commit inicial si es necesario:

```bash
git commit -m "[INIT]: repository created"
```

10. Envía el contenido a GitHub:

```bash
git push -u origin <branch>
```

---

# Comportamiento

## Si ya existe un repositorio Git

El script:

- reutiliza el repositorio existente;
- conserva toda la historia de commits;
- únicamente actualiza el remoto `origin` si es necesario.

---

## Si no existe un repositorio Git

El script:

- inicializa un nuevo repositorio;
- crea la rama principal;
- configura el remoto;
- realiza el primer commit;
- hace el primer push.

---

## Si no existen cambios

No se crea un commit nuevo.

Se mostrará:

```
ℹ️ No hay cambios nuevos que commitear.
```

Sin embargo, el script seguirá intentando realizar el `push`.

---

# Códigos de error

El script finalizará si ocurre cualquiera de las siguientes condiciones:

- No se proporciona el nombre del repositorio (`-n`).
- La visibilidad no es `public` o `private`.
- GitHub CLI no está instalada.
- El usuario no ha iniciado sesión con `gh`.
- No se puede crear el repositorio.
- No se puede resolver el nombre completo del repositorio.
- El `push` falla.

---

# Ejemplo completo

```bash
mkdir InventoryAPI

cd InventoryAPI

touch README.md

creater \
    -n InventoryAPI \
    -s public \
    -d MyOrganization
```

Salida aproximada:

```
🚀 Creando repositorio en GitHub: MyOrganization/InventoryAPI (public)...

📦 Inicializando repositorio local...

💾 Creando commit...

📤 Subiendo a main...

✅ ¡Todo listo! Repositorio configurado y sincronizado (MyOrganization/InventoryAPI).
```

---

# Notas

- Si no se especifica `-d`, el repositorio se crea bajo el usuario autenticado en GitHub.
- El script detecta automáticamente la rama actual en lugar de asumir que es `main`.
- Si ya existe un remoto `origin`, este será actualizado con la nueva URL del repositorio.
- El primer commit utiliza el mensaje:

```text
[INIT]: repository created
```

- El `push` siempre se intenta al finalizar el proceso para asegurar que el repositorio local y el remoto queden sincronizados.

---

# Licencia

Este proyecto puede distribuirse y modificarse libremente bajo la licencia que el autor decida utilizar.