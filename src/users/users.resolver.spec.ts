import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { TestBed } from '@automock/jest';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Role } from '../@generated/prisma-nestjs-graphql/prisma/role.enum';
import { UserUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-update.input';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let mockDate;
  const dto = {
    username: 'testUser',
    email: 'testUser@gmail.com',
    name: 'test user',
    password: 'test',
    role: Role.USER,
    created_at: mockDate,
    updated_at: mockDate,
    is_u_18: true,
    google_id: '1',
    google_profile: {},
  };

  const whereUniqueDto = { id: 1 } || { username: 'testUser' } || {
      email: 'testUser@gmail.com',
    } || { google_id: '1' };

  const returnUser = {
    id: expect.any(Number),
    ...dto,
  };

  const users: User[] = [
    {
      id: expect.any(Number),
      username: 'hatem',
      email: 'hatem@gmail.com',
      name: 'hatem bay',
      password: '123',
      role: Role.USER,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      is_u_18: true,
      google_id: expect.any(String),
      google_profile: {},
    },
    {
      id: expect.any(Number),
      username: 'user2',
      email: 'user2@gmail.com',
      name: 'user2',
      password: '123',
      role: Role.ADMIN,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      is_u_18: false,
      google_id: expect.any(String),
      google_profile: {},
    },
    {
      id: expect.any(Number),
      username: 'admin',
      email: 'admin@gmail.com',
      name: 'admin',
      password: '123',
      role: Role.USER,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
      is_u_18: true,
      google_id: expect.any(String),
      google_profile: {},
    },
  ];

  const mockUsersService = {
    // findAll: jest.fn().mockImplementation(() => users),
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  let usersService: jest.Mocked<UsersService>;

  beforeAll(() => {
    mockDate = jest
      .spyOn(Date.prototype, 'toLocaleTimeString')
      .mockReturnValue(new Date(Date.now()).toString());

    const { unit, unitRef } = TestBed.create(UsersResolver)
      .mock(UsersService)
      .using(mockUsersService)
      .compile();

    resolver = unit;

    usersService = unitRef.get(UsersService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a user', async () => {
    usersService.create.mockResolvedValueOnce(returnUser);
    await resolver.create(dto);
  });

  it('should get a user by a unique value', async () => {
    usersService.findAll.mockResolvedValueOnce(users);
    await resolver.findAll();

    expect(usersService.findAll).toHaveBeenCalled();
  });

  it('should get all the users', async () => {
    usersService.findOne.mockResolvedValueOnce(returnUser);
    await resolver.findOne(whereUniqueDto);

    expect(usersService.findOne).toHaveBeenCalled();
  });

  it('should update a user', async () => {
    usersService.update.mockResolvedValueOnce(returnUser);
    await resolver.update(
      {
        ...dto,
        is_u_18: expect.any(Boolean),
        role: 'USER',
      } as UserUncheckedUpdateInput,
      whereUniqueDto,
      { req: { user: users[0] } },
    );

    expect(usersService.update).toHaveBeenCalled();
  });

  it('should delete a user', async () => {
    usersService.remove.mockResolvedValueOnce(returnUser);
    await resolver.remove(
      { id: 1 } || { username: 'testUser' } || {
          email: 'testUser@gmail.com',
        } || { google_id: '1' },
    );

    expect(usersService.remove).toHaveBeenCalled();
  });
});
