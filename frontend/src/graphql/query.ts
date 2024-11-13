import { gql } from 'apollo-angular';

export const ATOM_INFO = gql`
  query GetAtomInfo($pdbFile: String!, $atomId: Int!) {
    atomInfo(pdbFile: $pdbFile, atomId: $atomId)
  }
`;
