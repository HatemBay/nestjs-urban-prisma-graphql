// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersResolver } from './users.resolver';
// import { UsersService } from './users.service';

// describe('UsersResolver', () => {
//   let usersResolver: UsersResolver;
//   const usersService: UsersService = {
//     findAll: jest.fn().mockImplementation(() => users),
//   };

//   const users = [
//     {
//       id: 1,
//       username: 'hatem',
//       email: 'hatem@gmail.com',
//       name: 'hatem bay',
//       password: '123',
//       role: 'USER',
//     },
//     {
//       id: 2,
//       username: 'Chawki',
//       password: '321',
//       roles: [{ name: 'USER' }],
//     },
//     {
//       id: 3,
//       username: '3absi',
//       password: 'messitheGOAT',
//       roles: [{ name: 'USER' }],
//     },
//   ];

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [UsersResolver, UsersService],
//     }).compile();

//     usersResolver = module.get<UsersResolver>(UsersResolver);
//   });

//   it('should be defined', () => {
//     expect(usersResolver).toBeDefined();
//   });

//   describe('findAll', () => {
//     it('Should return an array of users', async () => {});
//   });
// });
