-- CreateTable
CREATE TABLE "megasena" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'MEGA_SENA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "megasena_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "quina" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'QUINA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "quina_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "lotofacil" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'LOTOFACIL',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "lotofacil_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "maismilionaria" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'MAIS_MILIONARIA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_saldo_reserva_garantidora" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_total_faixa_um" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "trevos_sorteados" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "maismilionaria_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "duplasena" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'DUPLA_SENA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "duplasena_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "diadesorte" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'DIA_DE_SORTE',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "mes_sorte" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "diadesorte_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "timemania" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'TIMEMANIA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "time_coracao" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "timemania_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "loteca" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'LOTECA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "resultado_equipe_esportiva" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "loteca_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "supersete" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'SUPER_SETE',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_total_faixa_um" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "supersete_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "lotomania" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'LOTOMANIA',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "lotomania_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "federal" (
    "numero" INTEGER NOT NULL,
    "nome" TEXT DEFAULT 'LOTERIA_FEDERAL',
    "data_apuracao" TEXT NOT NULL DEFAULT '',
    "data_proximo_concurso" TEXT NOT NULL DEFAULT '',
    "local_sorteio" TEXT NOT NULL DEFAULT '',
    "municipio_sorteio" TEXT NOT NULL DEFAULT '',
    "acumulado" BOOLEAN NOT NULL DEFAULT false,
    "valor_arrecadado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_concurso_zero_cinco" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_especial" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_acumulado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "valor_estimado_proximo_concurso" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "dezenas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "dezenas_segundo_sorteio" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "premiacao" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "lista_municipio_ganhadores" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "federal_pkey" PRIMARY KEY ("numero")
);

-- CreateIndex
CREATE UNIQUE INDEX "megasena_data_apuracao_key" ON "megasena"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "megasena_numero_data_apuracao_key" ON "megasena"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "quina_data_apuracao_key" ON "quina"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "quina_numero_data_apuracao_key" ON "quina"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "lotofacil_data_apuracao_key" ON "lotofacil"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "lotofacil_numero_data_apuracao_key" ON "lotofacil"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "maismilionaria_data_apuracao_key" ON "maismilionaria"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "maismilionaria_numero_data_apuracao_key" ON "maismilionaria"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "duplasena_data_apuracao_key" ON "duplasena"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "duplasena_numero_data_apuracao_key" ON "duplasena"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "diadesorte_data_apuracao_key" ON "diadesorte"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "diadesorte_numero_data_apuracao_key" ON "diadesorte"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "timemania_data_apuracao_key" ON "timemania"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "timemania_numero_data_apuracao_key" ON "timemania"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "loteca_data_apuracao_key" ON "loteca"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "loteca_numero_data_apuracao_key" ON "loteca"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "supersete_data_apuracao_key" ON "supersete"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "supersete_numero_data_apuracao_key" ON "supersete"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "lotomania_data_apuracao_key" ON "lotomania"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "lotomania_numero_data_apuracao_key" ON "lotomania"("numero", "data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "federal_data_apuracao_key" ON "federal"("data_apuracao");

-- CreateIndex
CREATE UNIQUE INDEX "federal_numero_data_apuracao_key" ON "federal"("numero", "data_apuracao");
