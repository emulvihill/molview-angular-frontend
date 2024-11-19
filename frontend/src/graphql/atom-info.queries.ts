import { gql } from 'apollo-angular';

export const ATOM_INFO = gql`
  query AtomInfo($pdbFile: String!, $atomId: ID!) {
    atomInfo(pdbFile: $pdbFile, atomId: $atomId)
  }
`;
