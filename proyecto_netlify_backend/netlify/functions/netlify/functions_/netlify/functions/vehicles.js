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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_awesome_6_free: ['Font Awesome 6 Free', 'sans-serif'],
        font_awesome_5_free: ['Font Awesome 5 Free', 'sans-serif'],
        fontawesome: ['FontAwesome', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CEDAH - Consulta de Permisos</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  <script>window.__ANIMA_PLAYGROUND_ID__="mkydeg8gOvsLG6"</script>
<script src="https://unpkg.com/@animaapp/playground-sdk@0"></script></body>
</html>

[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

# SPA fallback so /admin etc works
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

# SPA fallback so /admin etc works
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "dev:netlify": "netlify dev"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "pg": "^8.13.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.0",
    "vite": "^4.3.9",
    "netlify-cli": "^17.36.0"
  }
}/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_awesome_6_free: ['Font Awesome 6 Free', 'sans-serif'],
        font_awesome_5_free: ['Font Awesome 5 Free', 'sans-serif'],
        fontawesome: ['FontAwesome', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_awesome_6_free: ['Font Awesome 6 Free', 'sans-serif'],
        font_awesome_5_free: ['Font Awesome 5 Free', 'sans-serif'],
        fontawesome: ['FontAwesome', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },import { Client } from "pg";

/**
 * Netlify Function: /.netlify/functions/vehicles
 *
 * Env vars required:
 * - DATABASE_URL (Neon Postgres connection string)
 * Optional:
 * - ADMIN_KEY (simple shared secret for write operations)
 *
 * Query params:
 * - action=list | validate | create | update | delete
 * - type=placa|serie (for validate)
 * - value=... (for validate)
 * - id=... (for update/delete)
 *
 * Methods:
 * - GET: action=list / validate
 * - POST: action=create (body JSON)
 * - PATCH: action=update (body JSON)
 * - DELETE: action=delete
 */
const json = (statusCode, body, extraHeaders = {}) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
    ...extraHeaders,
  },
  body: JSON.stringify(body),
});

const badRequest = (msg) => json(400, { ok: false, error: msg });
const unauthorized = () => json(401, { ok: false, error: "Unauthorized" });

const getClient = async () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Missing env DATABASE_URL");

  // Neon often uses SSL
  const client = new Client({
    connectionString,
    ssl: connectionString.includes("neon") ? { rejectUnauthorized: false } : undefined,
  });
  await client.connect();
  return client;
};

const ensureSchema = async (client) => {
  // Create table if missing (safe to run repeatedly)
  await client.query(`
    CREATE TABLE IF NOT EXISTS vehicle_registration (
      id SERIAL PRIMARY KEY,
      placa TEXT NOT NULL,
      serie TEXT,
      tipo_transporte TEXT NOT NULL,
      vigencia TEXT NOT NULL,
      estatus_actual TEXT NOT NULL DEFAULT 'AUTORIZADO',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_vehicle_placa ON vehicle_registration (placa);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_vehicle_serie ON vehicle_registration (serie);`);
};

export const handler = async (event) => {
  try {
    if (event.httpMethod === "OPTIONS") {
      return json(200, { ok: true });
    }

    const qs = event.queryStringParameters || {};
    const action = (qs.action || "").toLowerCase();

    const client = await getClient();
    try {
      await ensureSchema(client);

      // READ: list
      if (event.httpMethod === "GET" && action === "list") {
        const { rows } = await client.query(
          `SELECT id, placa, serie, tipo_transporte AS "tipoTransporte", vigencia, estatus_actual AS "estatusActual", created_at AS "createdAt"
           FROM vehicle_registration
           ORDER BY created_at DESC
           LIMIT 500;`
        );
        return json(200, { ok: true, vehicles: rows });
      }

      // READ: validate
      if (event.httpMethod === "GET" && action === "validate") {
        const type = (qs.type || "placa").toLowerCase();
        const value = (qs.value || "").toUpperCase().trim();
        if (!value) return badRequest("Missing value");

        if (type !== "placa" && type !== "serie") return badRequest("type must be placa|serie");

        const col = type === "placa" ? "placa" : "serie";
        const { rows } = await client.query(
          `SELECT id, placa, serie, tipo_transporte AS "tipoTransporte", vigencia, estatus_actual AS "estatusActual"
           FROM vehicle_registration
           WHERE ${col} = $1
           ORDER BY created_at DESC
           LIMIT 1;`,
          [value]
        );

        if (rows.length === 0) {
          return json(200, { ok: true, success: false, reason: "NOT_FOUND" });
        }

        const v = rows[0];
        const isAuthorized = (v.estatusActual || "").toUpperCase() === "AUTORIZADO";
        return json(200, {
          ok: true,
          success: isAuthorized,
          vehicle: v,
        });
      }

      // WRITE ops: require admin key
      const adminKey = process.env.ADMIN_KEY || "";
      const providedKey = event.headers["x-admin-key"] || event.headers["X-Admin-Key"] || "";
      const requireAdmin = () => (adminKey && providedKey !== adminKey ? unauthorized() : null);

      // CREATE
      if (event.httpMethod === "POST" && action === "create") {
        const authRes = requireAdmin();
        if (authRes) return authRes;

        const data = JSON.parse(event.body || "{}");
        const placa = (data.placa || "").toUpperCase().trim();
        const serie = data.serie ? String(data.serie).toUpperCase().trim() : null;
        const tipoTransporte = String(data.tipoTransporte || "").trim();
        const vigencia = String(data.vigencia || "").trim();
        const estatusActual = String(data.estatusActual || "AUTORIZADO").trim();

        if (!placa || !tipoTransporte || !vigencia) return badRequest("placa, tipoTransporte, vigencia are required");

        const { rows } = await client.query(
          `INSERT INTO vehicle_registration (placa, serie, tipo_transporte, vigencia, estatus_actual)
           VALUES ($1,$2,$3,$4,$5)
           RETURNING id, placa, serie, tipo_transporte AS "tipoTransporte", vigencia, estatus_actual AS "estatusActual", created_at AS "createdAt";`,
          [placa, serie, tipoTransporte, vigencia, estatusActual]
        );

        return json(200, { ok: true, vehicle: rows[0] });
      }

      // UPDATE
      if (event.httpMethod === "PATCH" && action === "update") {
        const authRes = requireAdmin();
        if (authRes) return authRes;

        const id = Number(qs.id);
        if (!id) return badRequest("Missing id");

        const data = JSON.parse(event.body || "{}");
        const fields = [];
        const vals = [];
        let i = 1;

        const add = (col, val, transform = (x) => x) => {
          if (val === undefined) return;
          fields.push(`${col} = $${i++}`);
          vals.push(transform(val));
        };

        add("placa", data.placa, (v) => String(v).toUpperCase().trim());
        add("serie", data.serie, (v) => (v ? String(v).toUpperCase().trim() : null));
        add("tipo_transporte", data.tipoTransporte, (v) => String(v).trim());
        add("vigencia", data.vigencia, (v) => String(v).trim());
        add("estatus_actual", data.estatusActual, (v) => String(v).trim());

        if (fields.length === 0) return badRequest("No fields to update");

        vals.push(id);
        const { rows } = await client.query(
          `UPDATE vehicle_registration
           SET ${fields.join(", ")}
           WHERE id = $${i}
           RETURNING id, placa, serie, tipo_transporte AS "tipoTransporte", vigencia, estatus_actual AS "estatusActual", created_at AS "createdAt";`,
          vals
        );

        return json(200, { ok: true, vehicle: rows[0] || null });
      }

      // DELETE
      if (event.httpMethod === "DELETE" && action === "delete") {
        const authRes = requireAdmin();
        if (authRes) return authRes;

        const id = Number(qs.id);
        if (!id) return badRequest("Missing id");

        await client.query(`DELETE FROM vehicle_registration WHERE id = $1;`, [id]);
        return json(200, { ok: true });
      }

      return json(404, { ok: false, error: "Not found" });
    } finally {
      await client.end();
    }
  } catch (err) {
    console.error(err);
    return json(500, { ok: false, error: String(err?.message || err) });
  }
};

});
