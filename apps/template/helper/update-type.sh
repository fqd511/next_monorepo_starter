source .env.development
source .env.development.local

npx openapi-typescript $NEXT_PUBLIC_BASE_URL_TEMPLATE/openapi.json -o ./helper/textbook.api.d.ts
