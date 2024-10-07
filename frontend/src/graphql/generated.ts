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

export type Mood = {
  __typename?: 'Mood';
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  mood: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MoodInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  mood: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMood: Mood;
};


export type MutationCreateMoodArgs = {
  mood: MoodInput;
};

export type Query = {
  __typename?: 'Query';
  moods: Array<Mood>;
};

export type CreateMoodMutationVariables = Exact<{
  mood: MoodInput;
}>;


export type CreateMoodMutation = { __typename?: 'Mutation', createMood: { __typename?: 'Mood', name: string, mood: string, date: string } };

export type MoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodsQuery = { __typename?: 'Query', moods: Array<{ __typename?: 'Mood', id: number, name: string, date: string, mood: string }> };

export const CreateMoodDocument = gql`
    mutation createMood($mood: MoodInput!) {
  createMood(mood: $mood) {
    name
    mood
    date
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateMoodGQL extends Apollo.Mutation<CreateMoodMutation, CreateMoodMutationVariables> {
    document = CreateMoodDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MoodsDocument = gql`
    query Moods {
  moods {
    id
    name
    date
    mood
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MoodsGQL extends Apollo.Query<MoodsQuery, MoodsQueryVariables> {
    document = MoodsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }