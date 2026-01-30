# Sitio con Backend simple (Netlify Functions + Neon Postgres)

## 1) Crear DB (Neon) y obtener DATABASE_URL
En Netlify puedes usar Integration Neon o crear Neon aparte.

## 2) Variables de entorno en Netlify (Site settings → Environment variables)
- DATABASE_URL = (tu connection string de Neon)
- ADMIN_KEY = (una clave que tú elijas, por ejemplo: mi_clave_super_secreta)

## 3) Variables de entorno para el Frontend (Netlify también)
- VITE_ADMIN_KEY = (debe ser IGUAL a ADMIN_KEY)

## 4) Endpoints
- GET /.netlify/functions/vehicles?action=list
- GET /.netlify/functions/vehicles?action=validate&type=placa|serie&value=XXXX
- POST /.netlify/functions/vehicles?action=create (requiere header X-Admin-Key)
- PATCH /.netlify/functions/vehicles?action=update&id=123 (requiere header X-Admin-Key)
- DELETE /.netlify/functions/vehicles?action=delete&id=123 (requiere header X-Admin-Key)

## 5) Deploy
Sube este proyecto a Netlify (ideal: conectando un repo GitHub) y Netlify hará build + functions.
Si prefieres “Netlify Drop”, solo sirve para frontend; para Functions necesitas deploy con build.
