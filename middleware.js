import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';

export function middleware(req) {
    try {
        return i18nRouter(req, i18nConfig);
    } catch (error) {
        console.error('Error en i18nRouter:', error);
        return NextResponse.redirect(new URL(`/${i18nConfig.defaultLocale}`, req.url));
    }
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};
