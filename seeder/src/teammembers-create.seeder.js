import { faker } from '@faker-js/faker';

import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';

const mutationCreateTeamMember = `
mutation CreateTeamMember($firstName: String = "", $lastName: String = "", $jobTitle: String = "", $avatarUrl: String = "", $memberType: TeamMemberType!) {
  createTeamMember(
    data: {firstName: $firstName, lastName: $lastName, jobTitle: $jobTitle, avatarUrl: $avatarUrl, memberType: $memberType}
  ) {
    id
    firstName
    lastName
    jobTitle
    memberType,
    avatarUrl
    createdAt
  }
}
`;

const memberTypes = [
  'Student',
  'Lecturer',
  'Alumni',
];

(async () => {
  /*
   * Create a TeamMember
  */
  const createTeamMember = async ({ firstName, lastName, jobTitle, avatarUrl, memberType }) => {
    try {
      const { createTeamMember } = await client.request(mutationCreateTeamMember, {
        firstName,
        lastName,
        jobTitle,
        avatarUrl,
        memberType,
      });

      if (!createTeamMember) {
        throw new Error(`Can't create the teammember with name ${createTeamMember.firstName} ${createTeamMember.lastName}`);
      }

      console.log(`Teammember created with name ${createTeamMember.firstName} ${createTeamMember.lastName}!`);
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create teammembers
  */
  const createTeamMembers = async (n = 20) => {
    for (let i = 0; i < n; i++) {
      await createTeamMember({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        jobTitle: faker.person.jobTitle(),
        avatarUrl: faker.image.avatarGitHub(),
        memberType: memberTypes[generateValueBetweenMinAndMax(0, memberTypes.length - 1)]
      });
    };
  };

  /*
   * Create posts
  */
  await createTeamMembers(200);

})();