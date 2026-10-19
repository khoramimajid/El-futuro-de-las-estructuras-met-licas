# Coevaluación de exposiciones: Taller Estructural II (UTE)

Página web para que los estudiantes califiquen las exposiciones de sus compañeros
(taller *El futuro de las estructuras metálicas*, 12 parejas).

- **`index.html`**: página para los estudiantes. Eligen su nombre, escriben el código de la clase
  y califican cada grupo con una rúbrica de 5 criterios (0–1–2 puntos cada uno, total sobre 10).
  No pueden evaluar a su propio grupo. Si vuelven a evaluar a un grupo, se guarda la última evaluación.
- **`resultados.html`**: página para el docente, protegida con PIN. Muestra la nota promedio de cada grupo,
  el promedio por criterio, los comentarios y cuántos grupos evaluó cada estudiante. Permite descargar un CSV para Excel.
- **`apps-script/Code.gs`**: código del servidor. Guarda las evaluaciones en una hoja de Google Sheets.
- **`datos.js`**: lista de grupos, temas y criterios de la rúbrica.
- **`config.js`**: aquí se pega la URL del Apps Script.

> GitHub Pages solo publica páginas: no puede guardar datos. Por eso las notas se guardan
> en una hoja de Google Sheets de su cuenta, mediante Google Apps Script (gratis).

---

## Paso 1. Crear la hoja de Google Sheets y el Apps Script (10 min)

1. Entre a <https://sheets.google.com> con su cuenta de Google y cree una hoja en blanco.
   Póngale de nombre **Coevaluación Taller II – Futuro del acero**.
2. En la hoja, abra el menú **Extensiones → Apps Script**.
3. Borre el código de ejemplo y pegue **todo** el contenido de `apps-script/Code.gs`.
4. Al inicio del código cambie los dos valores:
   ```js
   const CODIGO_CLASE = 'ACERO26';          // el código que usted dirá en clase
   const PIN_DOCENTE  = 'cambie-este-pin';  // su PIN para ver los resultados
   ```
5. Guarde el proyecto con el ícono 💾.
6. En la barra superior, elija la función **`configurar`** y pulse **Ejecutar**.
   - Google pedirá permisos: **Revisar permisos → su cuenta → Configuración avanzada →
     Ir a (proyecto) → Permitir**. Este aviso es normal, porque el script es suyo.
   - Se crearán dos pestañas en la hoja: **Evaluaciones** y **Resumen**.

## Paso 2. Publicar el Apps Script como aplicación web

1. En el editor de Apps Script pulse **Implementar → Nueva implementación**.
2. En el engranaje ⚙ elija el tipo **Aplicación web**.
3. Configure:
   - **Descripción:** Coevaluación taller
   - **Ejecutar como:** *Yo (su correo)*
   - **Quién tiene acceso:** **Cualquier usuario** (o *Cualquiera*). Es imprescindible: si queda en
     "Solo yo", los estudiantes no podrán enviar notas.
4. Pulse **Implementar** y **copie la URL de la aplicación web**. Termina en `/exec`.
5. Abra `config.js` y pegue la URL:
   ```js
   window.SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXXXX/exec';
   ```
6. Prueba rápida: abra la URL `/exec` en el navegador. Debe aparecer
   `{"ok":true,"mensaje":"Servicio de coevaluación activo."}`.

> **Si más adelante cambia `Code.gs`**, por ejemplo el código o una pareja, use **Implementar →
> Administrar implementaciones → ✏ Editar → Versión: Nueva versión → Implementar**.
> Así la URL se mantiene. Si crea una implementación *nueva*, la URL cambia y tendrá que pegarla otra vez en `config.js`.

## Paso 3. Subir a GitHub y activar GitHub Pages

### Opción A: desde el navegador, sin instalar nada (recomendada)
1. Entre a <https://github.com/new> con su usuario **khoramimajid**.
2. **Repository name:** `coevaluacion-taller`. Elija **Public**. Pulse **Create repository**.
3. En el repositorio vacío, pulse **uploading an existing file**.
4. Arrastre **todos los archivos y la carpeta `apps-script`**: `index.html`, `resultados.html`,
   `estilos.css`, `datos.js`, `config.js` (ya con la URL), `README.md` y `apps-script/`.
   La imagen `qr_coevaluacion.png` es opcional.
5. Pulse **Commit changes**.
6. Vaya a **Settings → Pages**. En *Build and deployment* elija
   **Source: Deploy from a branch**, **Branch: `main`**, carpeta **`/ (root)`**, y pulse **Save**.
7. Espere 1 o 2 minutos y recargue la página de Settings → Pages. Aparecerá:
   **https://khoramimajid.github.io/coevaluacion-taller/**

### Opción B: con Git en la terminal
```bash
cd coevaluacion-taller
git init
git add .
git commit -m "Coevaluación de exposiciones – Taller Estructural II"
git branch -M main
git remote add origin https://github.com/khoramimajid/coevaluacion-taller.git
git push -u origin main
```
Después active GitHub Pages como en el punto 6 de la opción A.

### Opción C: dentro del sitio del curso que ya tiene
Copie todos los archivos en una carpeta `coevaluacion/` del repositorio de su sitio del curso.
La dirección será `https://khoramimajid.github.io/<repo-del-curso>/coevaluacion/`.
En ese caso **genere un QR nuevo** para esa dirección, porque el QR incluido apunta a la opción A.

## Paso 4. Usarlo en clase

| Para | Dirección |
|---|---|
| Estudiantes (QR o WhatsApp) | `https://khoramimajid.github.io/coevaluacion-taller/` |
| Docente (con PIN) | `https://khoramimajid.github.io/coevaluacion-taller/resultados.html` |

1. Proyecte el QR (`qr_coevaluacion.png`) o envíe el enlace por WhatsApp.
2. Diga el **código de la clase** solo en el aula. Así nadie de fuera puede enviar notas.
3. Después de cada exposición, dé 1 minuto para que todos evalúen a ese grupo.
4. Al final, abra `resultados.html`, ingrese su PIN y descargue el CSV.
   La hoja de Google Sheets (pestañas *Evaluaciones* y *Resumen*) tiene todos los datos en tiempo real.

## Prueba antes de la clase (2 minutos)
1. Abra la página de estudiantes, elija cualquier nombre, ingrese el código y evalúe un grupo.
2. Verifique que aparece la fila en la pestaña **Evaluaciones** de la hoja.
3. Abra `resultados.html` con su PIN y compruebe que la nota aparece.
4. **Borre esa fila de prueba** en la hoja antes de la clase.

## Problemas frecuentes
| Síntoma | Causa y solución |
|---|---|
| "La página aún no está conectada…" | Falta pegar la URL en `config.js`, o no se subió el archivo actualizado. |
| "Sin conexión con el servidor" | El Apps Script no está publicado con acceso **Cualquier usuario**. Revise el paso 2.3. |
| "Código de la clase incorrecto" | El código no coincide con `CODIGO_CLASE` en `Code.gs`. Las mayúsculas no importan. |
| Cambié `Code.gs` y no se aplica | Publique una **nueva versión** de la misma implementación (nota del paso 2). |
| La página no se actualiza en GitHub | GitHub Pages tarda 1 o 2 minutos. Recargue con Ctrl + F5. |

## Cambiar parejas o temas
Edite la lista en **`datos.js`** y también en **`GRUPOS` dentro de `Code.gs`**. Ambas deben ser iguales.
Después suba `datos.js` a GitHub y publique una nueva versión del Apps Script.

## Nota sobre privacidad
El repositorio es público, así que los nombres de los estudiantes y los temas son visibles en `datos.js`.
**Las notas y los comentarios no son públicos**: solo están en su hoja de Google y en `resultados.html`, que pide PIN.
El PIN está en `Code.gs`, que vive en su cuenta de Google y no en GitHub. Aun así, no suba a GitHub una copia de
`Code.gs` con el PIN real: déjelo como `cambie-este-pin` en la copia del repositorio.
