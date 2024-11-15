import { gql } from 'apollo-angular';

export const ATOM_INFO = gql`
  query AtomInfo($pdbFile: String!, $atomId: Int!) {
    atomInfo(pdbFile: $pdbFile, atomId: $atomId)
  }
`;
