"""Versión Streamlit del Programa de Investigación · Mariano Acosta.

La interfaz se conserva como una aplicación HTML/CSS/JS dentro de un componente
Streamlit para mantener exactamente la navegación y el comportamiento responsive.
No utiliza autenticación de OpenAI.
"""

from __future__ import annotations

import base64
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


ROOT = Path(__file__).parent
SITE = ROOT / "site"
ASSETS = ROOT / "assets"


def as_data_uri(filename: str) -> str:
    """Convierte un recurso local en una URI para que el iframe sea portable."""
    path = ASSETS / filename
    media_type = "image/jpeg" if path.suffix.lower() in {".jpg", ".jpeg"} else "image/png"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{media_type};base64,{encoded}"


def build_site() -> str:
    """Incrusta el sitio original y reemplaza sus recursos por versiones locales."""
    html = (SITE / "index.html").read_text(encoding="utf-8")
    styles = (SITE / "styles.css").read_text(encoding="utf-8")
    overrides = (SITE / "overrides.css").read_text(encoding="utf-8")
    script = (SITE / "script.js").read_text(encoding="utf-8")

    html = html.replace(
        '<link rel="stylesheet" href="styles.css">\n  <link rel="stylesheet" href="overrides.css">',
        f"<style>{styles}</style>\n  <style>{overrides}</style>",
    )
    html = re.sub(
        r'<script\s+src="script\.js"></script>',
        f"<script>{script}</script>",
        html,
    )

    for filename in (
        "logo-acosta-enp-1874-transparent.png",
        "logo-acosta-enp-1874.png",
        "logo-mariano-acosta.jpg",
    ):
        html = html.replace(f"assets/{filename}", as_data_uri(filename))

    return html


st.set_page_config(
    page_title="Programa de Investigación · Mariano Acosta",
    page_icon="📚",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      [data-testid="stHeader"], [data-testid="stToolbar"], #MainMenu, footer {
        display: none;
      }
      [data-testid="stAppViewContainer"] > .main {
        padding: 0;
      }
      [data-testid="stMainBlockContainer"] {
        max-width: none;
        padding: 0;
      }
      iframe[title="streamlit_components.v1.html"] {
        border: 0;
      }
    </style>
    """,
    unsafe_allow_html=True,
)

components.html(build_site(), height=1100, scrolling=True)
