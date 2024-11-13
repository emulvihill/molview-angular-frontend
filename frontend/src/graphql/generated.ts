import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  atomInfo: Scalars['String']['output'];
};


export type QueryAtomInfoArgs = {
  atomId: Scalars['Int']['input'];
  pdbFile: Scalars['String']['input'];
};

export type GetAtomInfoQueryVariables = Exact<{
  pdbFile: Scalars['String']['input'];
  atomId: Scalars['Int']['input'];
}>;


export type GetAtomInfoQuery = { __typename?: 'Query', atomInfo: string };

export const GetAtomInfoDocument = gql`
    query GetAtomInfo($pdbFile: String!, $atomId: Int!) {
  atomInfo(pdbFile: $pdbFile, atomId: $atomId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAtomInfoGQL extends Apollo.Query<GetAtomInfoQuery, GetAtomInfoQueryVariables> {
    document = GetAtomInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }