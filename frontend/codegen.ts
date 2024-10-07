import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  // schema: '../backend/src/main/resources/graphql/schema.graphqls',
  schema: '../backend/src/main/resources/graphql/schema.graphqls',
  documents: ['src/**/*.ts'],
  generates: {
    './src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular']
    }
  }
}

export default config
