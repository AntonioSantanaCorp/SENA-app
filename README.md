# SENA-app

Este proyecto es una aplicación monorepo gestionada con **Nx**, que incluye un frontend desarrollado en **Angular** y un backend construido con **NestJS**. Utiliza **PostgreSQL** como base de datos, **Prisma** como ORM (con **Prisma Accelerate**) y **Bootstrap** para estilos en el frontend.

## Tecnologías utilizadas

- **Nx**: Monorepo para gestionar múltiples aplicaciones y librerías.
- **Angular**: Framework para el desarrollo del frontend.
- **NestJS**: Framework para el desarrollo del backend (API REST).
- **Prisma**: ORM para la gestión de la base de datos (con soporte para Accelerate/Data Proxy).
- **PostgreSQL**: Motor de base de datos.
- **Bootstrap**: Framework de estilos CSS.
- **Jest**: Testing.
- **ESLint & Prettier**: Linter y formateador de código.

## Estructura del proyecto

```
apps/
  ├── api/   # Backend (NestJS)
  └── web/   # Frontend (Angular)
  └── database-scripts/ (scripts bd)
```

## Requisitos previos

- Node.js (recomendado v18+)
- npm (v9+)
- [Nx CLI](https://nx.dev/) (opcional, pero recomendado para comandos globales)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AntonioSantanaCorp/SENA-app.git
   cd SENA-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la base de datos (PostgreSQL + Prisma):
   - Crea `apps/api/.env` con tus variables de entorno:
     ```env
     # Si usas Prisma Accelerate (Data Proxy)
     DATABASE_URL="prisma://<tu-url-accelerate>"
     # Conexión directa para migraciones/seed
     DIRECT_DATABASE_URL="postgresql://usuario:password@host:5432/sena?schema=public"
     ```
   - Genera el cliente de Prisma:
     ```bash
     cd apps/api
     npx prisma generate --no-engine
     ```
   - Ejecuta migraciones (creará el esquema en Postgres):
     ```bash
     npx prisma migrate dev --name init
     ```

## Levantar el proyecto

Puedes levantar tanto el frontend como el backend en paralelo con el siguiente comando:

```bash
npm start
```

Esto ejecutará ambos servicios:

- **Frontend**: Angular (por defecto en `http://localhost:4200`)
- **Backend**: NestJS API (por defecto en `http://localhost:3000`)

### Comandos útiles

- Levantar solo el frontend:
  ```bash
  nx serve web
  ```
- Levantar solo el backend:
  ```bash
  nx serve api
  ```
- Construir ambos proyectos:
  ```bash
  npm run build
  ```
- Ejecutar pruebas:
  ```bash
  npm test
  ```
- Lint:
  ```bash
  npm run lint
  ```

## Notas

- Asegúrate de tener PostgreSQL corriendo y las variables `DATABASE_URL`/`DIRECT_DATABASE_URL` configuradas antes de levantar el backend.
- El backend usa `PrismaClient` extendido con `withAccelerate()` en `apps/api/libs/database/src/connection/database.service.ts`.
- Los scripts en `database-scripts/` fueron adaptados a PostgreSQL; el orden recomendado: `01-Create tables.sql` (si no usas migraciones), `02-Create departamentos.sql`, `02-Create municipios.sql`, `03-Create categorias.sql`.
- Puedes personalizar los puertos y configuraciones en los archivos de cada aplicación dentro de `apps/web` y `apps/api`.
