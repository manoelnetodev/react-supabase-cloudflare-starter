import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase: variáveis de ambiente não encontradas. ' +
    'Verifique o arquivo .env ou as configurações do seu hosting.'
  )
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

/*
 * ============================================================
 * ESQUEMA DO BANCO DE DADOS (SUPABASE)
 * ============================================================
 *
 * Insira aqui os tipos gerados pelo Supabase CLI ou defina
 * manualmente as interfaces das suas tabelas.
 *
 * Exemplo:
 *
 * export interface Profile {
 *   id: string
 *   email: string
 *   name: string
 *   created_at: string
 * }
 *
 * Para gerar tipos automaticamente:
 *   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/services/database.types.ts
 *
 * ============================================================
 */
