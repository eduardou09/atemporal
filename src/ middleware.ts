import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from './config/supabaseClient';

export async function middleware(req: NextRequest) {
  const { data: { session } } = await supabase.auth.getSession();

  // Verifica se o usuário está autenticado
  if (!session) {
    // Redireciona para a página de login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Especifica quais rotas devem usar o middleware
export const config = {
  matcher: '/in/addToys', // Deve começar com uma barra "/"
};