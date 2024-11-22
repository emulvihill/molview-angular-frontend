import { gql } from 'apollo-angular';

export const ATOM_INFO = gql`
  query AtomInfo($pdbId: ID!, $atomId: ID!) {
    atomInfo(pdbId: $pdbId, atomId: $atomId)
  }
`;
