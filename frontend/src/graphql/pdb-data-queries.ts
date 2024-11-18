import { gql } from '@apollo/client/core';

export const ALL_PDB_DATA = gql`
  query AllPdbData {
    allPdbData {
      id
      name
      data
      compound
    }
  }
`;

export const CREATE_PDB_DATA = gql`
  mutation CreatePdbData($name: String!, $data: String!, $compound: String!) {
    createPdbData(input: { name: $name, data: $data, compound: $compound }) {
      id
      name
      data
      compound
    }
  }
`;

export const FIND_PDB_DATA_BY_ID = gql`
  query FindPdbDataById($id: Int!) {
    findPdbDataById(id: $id) {
      id
      name
      data
      compound
    }
  }
`;

export const DELETE_PDB_DATA = gql`
  mutation DeletePdbData($id: Int!) {
    deletePdbData(id: $id) {
      id
      name
      data
      compound
    }
  }
`;
