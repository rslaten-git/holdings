import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const page = readFileSync('src/app/properties/[slug]/page.tsx', 'utf8');
const propertyData = readFileSync('src/lib/properties.ts', 'utf8');
const homePage = readFileSync('src/app/page.tsx', 'utf8');

assert(!page.includes("'use client'"), 'property detail page should be a server component');
assert(!page.includes('useParams'), 'property detail page should not use client-side useParams');
assert(page.includes("import { notFound } from 'next/navigation'"), 'missing notFound import');
assert(page.includes('notFound();'), 'invalid slugs should call notFound()');
assert(page.includes('export function generateStaticParams'), 'missing generateStaticParams export');
assert(page.includes('export async function generateMetadata'), 'missing generateMetadata export');
assert(page.includes('getProperty(slug)'), 'property should be loaded from route params');
assert(propertyData.includes('getPropertySlugs'), 'missing getPropertySlugs helper');
assert(homePage.includes('getPropertyCardAddress'), 'home page should use a dedicated card address formatter');
assert(homePage.includes(".replace(' Way', '')"), 'Wyndham Meadows card addresses should omit Way to avoid wrapping');

console.log('Property page routing checks passed.');
