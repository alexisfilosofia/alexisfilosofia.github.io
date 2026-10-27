# Programa de Investigación · Mariano Acosta — Streamlit

Esta carpeta reproduce la versión actual del sitio en Streamlit y no depende de un inicio de sesión en OpenAI. La interfaz original se preserva en un componente HTML aislado; por eso conserva la navegación por secciones, la versión móvil y el tratamiento visual del encabezado.

## Ejecución local

```bash
python -m venv .venv
source .venv/bin/activate  # En Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
streamlit run app.py
```

Luego abrí la dirección local indicada por Streamlit.

## Estructura

- `app.py`: punto de entrada de Streamlit.
- `site/`: HTML, CSS y JavaScript de la interfaz.
- `assets/`: logos usados localmente; el programa los incorpora en el componente para que no requieran hosting externo.
- `PROMPT_PARA_CODEX.md`: instrucción lista para pedir iteraciones a Codex sobre este proyecto.

## Despliegue público

Subí el contenido de esta carpeta a un repositorio y desplegalo en cualquier servicio compatible con Streamlit. El único comando de arranque necesario es:

```bash
streamlit run app.py --server.port $PORT --server.address 0.0.0.0
```

El acceso público dependerá solamente de la configuración del servicio de hosting elegido, no de una cuenta OpenAI.
