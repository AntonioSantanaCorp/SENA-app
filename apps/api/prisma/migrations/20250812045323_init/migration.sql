-- CreateTable
CREATE TABLE "public"."tb_cargos_admin" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(1000),

    CONSTRAINT "tb_cargos_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_personas_club" (
    "id" SERIAL NOT NULL,
    "numero_documento" VARCHAR(100) NOT NULL,
    "tipo_documento" VARCHAR(10) NOT NULL,
    "id_municipio" INTEGER NOT NULL,
    "nombres" VARCHAR(500) NOT NULL,
    "apellidos" VARCHAR(500) NOT NULL,
    "fecha_nacimento" DATE,
    "tipo_rh" VARCHAR(100),
    "peso" DOUBLE PRECISION,
    "altura" DOUBLE PRECISION,
    "correo" VARCHAR(500) NOT NULL,
    "numero_telefono" VARCHAR(100) NOT NULL,
    "talla_camisa" VARCHAR(100),
    "talla_calzado" VARCHAR(100),
    "talla_pantaloneta" VARCHAR(100),
    "genero" VARCHAR(200),
    "direccion" TEXT,

    CONSTRAINT "tb_personas_club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_contactos_emergencia" (
    "id" SERIAL NOT NULL,
    "tipo_documento" VARCHAR(10) NOT NULL,
    "numero_documento" VARCHAR(100),
    "nombres" VARCHAR(5000),
    "apellidos" VARCHAR(5000),
    "correo" TEXT,
    "telefono" TEXT,

    CONSTRAINT "tb_contactos_emergencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_entrenadores" (
    "id" SERIAL NOT NULL,
    "id_persona_club" INTEGER NOT NULL,
    "id_contacto_emergencia" INTEGER,
    "fecha_ingreso" DATE,
    "activo" BOOLEAN,

    CONSTRAINT "tb_entrenadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_tutores" (
    "id" SERIAL NOT NULL,
    "tipo_documento" VARCHAR(10) NOT NULL,
    "numero_documento" VARCHAR(100),
    "nombres" VARCHAR(5000),
    "apellidos" VARCHAR(5000),
    "correo" TEXT,
    "telefono" TEXT,

    CONSTRAINT "tb_tutores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_deportistas" (
    "id" SERIAL NOT NULL,
    "id_tutor" INTEGER,
    "id_persona_club" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "activo" BOOLEAN,

    CONSTRAINT "tb_deportistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_desercion_deportistas" (
    "id" SERIAL NOT NULL,
    "id_deportista" INTEGER NOT NULL,
    "fecha_desercion" DATE,
    "razon" VARCHAR(800),
    "descripcion" TEXT,

    CONSTRAINT "tb_desercion_deportistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_gestion_admin" (
    "id" SERIAL NOT NULL,
    "id_tutor" INTEGER,
    "id_deportista" INTEGER,
    "id_cargo" INTEGER,
    "fecha_inicio" DATE,
    "fecha_fin" DATE,
    "activo" BOOLEAN,

    CONSTRAINT "tb_gestion_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_pagos_deportistas" (
    "id" SERIAL NOT NULL,
    "id_deportista" INTEGER NOT NULL,
    "fecha_pago" DATE,
    "valor" DECIMAL(10,2),
    "tipoPago" TEXT,

    CONSTRAINT "tb_pagos_deportistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_usuarios" (
    "id" SERIAL NOT NULL,
    "usuario" VARCHAR(5000),
    "contrasenia" VARCHAR(5000),
    "activo" BOOLEAN,
    "id_persona" INTEGER,

    CONSTRAINT "tb_usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_departamento" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(800),

    CONSTRAINT "tb_departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_municipio" (
    "id" SERIAL NOT NULL,
    "id_departamento" INTEGER NOT NULL,
    "nombre" VARCHAR(800),
    "estado" BOOLEAN,

    CONSTRAINT "tb_municipio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tb_tipo_documento" (
    "id" SERIAL NOT NULL,
    "tipo_documento" VARCHAR(5),
    "descripcion" VARCHAR(500),

    CONSTRAINT "tb_tipo_documento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fk_personas_municipio" ON "public"."tb_personas_club"("id_municipio");

-- CreateIndex
CREATE UNIQUE INDEX "tb_entrenadores_id_persona_club_key" ON "public"."tb_entrenadores"("id_persona_club");

-- CreateIndex
CREATE UNIQUE INDEX "tb_entrenadores_id_contacto_emergencia_key" ON "public"."tb_entrenadores"("id_contacto_emergencia");

-- CreateIndex
CREATE INDEX "fk_entrenadores_personas" ON "public"."tb_entrenadores"("id_persona_club");

-- CreateIndex
CREATE UNIQUE INDEX "tb_deportistas_id_tutor_key" ON "public"."tb_deportistas"("id_tutor");

-- CreateIndex
CREATE UNIQUE INDEX "tb_deportistas_id_persona_club_key" ON "public"."tb_deportistas"("id_persona_club");

-- CreateIndex
CREATE INDEX "fk_deportistas_personas" ON "public"."tb_deportistas"("id_persona_club");

-- CreateIndex
CREATE INDEX "fk_deportistas_tutor" ON "public"."tb_deportistas"("id_tutor");

-- CreateIndex
CREATE UNIQUE INDEX "tb_desercion_deportistas_id_deportista_key" ON "public"."tb_desercion_deportistas"("id_deportista");

-- CreateIndex
CREATE INDEX "fk_desercion_deportista" ON "public"."tb_desercion_deportistas"("id_deportista");

-- CreateIndex
CREATE INDEX "fk_gestion_cargo" ON "public"."tb_gestion_admin"("id_cargo");

-- CreateIndex
CREATE INDEX "fk_gestion_deportista" ON "public"."tb_gestion_admin"("id_deportista");

-- CreateIndex
CREATE INDEX "fk_gestion_tutor" ON "public"."tb_gestion_admin"("id_tutor");

-- CreateIndex
CREATE INDEX "fk_pagos_deportista" ON "public"."tb_pagos_deportistas"("id_deportista");

-- CreateIndex
CREATE UNIQUE INDEX "tb_usuarios_id_persona_key" ON "public"."tb_usuarios"("id_persona");

-- CreateIndex
CREATE INDEX "fk_usuarios_personas" ON "public"."tb_usuarios"("id_persona");

-- CreateIndex
CREATE INDEX "fk_municipio_departamento" ON "public"."tb_municipio"("id_departamento");

-- AddForeignKey
ALTER TABLE "public"."tb_personas_club" ADD CONSTRAINT "tb_personas_club_id_municipio_fkey" FOREIGN KEY ("id_municipio") REFERENCES "public"."tb_municipio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_entrenadores" ADD CONSTRAINT "tb_entrenadores_id_contacto_emergencia_fkey" FOREIGN KEY ("id_contacto_emergencia") REFERENCES "public"."tb_contactos_emergencia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_entrenadores" ADD CONSTRAINT "tb_entrenadores_id_persona_club_fkey" FOREIGN KEY ("id_persona_club") REFERENCES "public"."tb_personas_club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_deportistas" ADD CONSTRAINT "tb_deportistas_id_tutor_fkey" FOREIGN KEY ("id_tutor") REFERENCES "public"."tb_tutores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_deportistas" ADD CONSTRAINT "tb_deportistas_id_persona_club_fkey" FOREIGN KEY ("id_persona_club") REFERENCES "public"."tb_personas_club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_desercion_deportistas" ADD CONSTRAINT "tb_desercion_deportistas_id_deportista_fkey" FOREIGN KEY ("id_deportista") REFERENCES "public"."tb_deportistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pagos_deportistas" ADD CONSTRAINT "tb_pagos_deportistas_id_deportista_fkey" FOREIGN KEY ("id_deportista") REFERENCES "public"."tb_deportistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_usuarios" ADD CONSTRAINT "tb_usuarios_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "public"."tb_personas_club"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_municipio" ADD CONSTRAINT "tb_municipio_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "public"."tb_departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
