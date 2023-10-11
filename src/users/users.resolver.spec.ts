import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Role } from '../@generated/prisma-nestjs-graphql/prisma/role.enum';
import { UserUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-update.input';
import { Test, TestingModule } from '@nestjs/testing';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let usersService: UsersService;
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
    create: jest.fn().mockResolvedValueOnce(returnUser),
    findAll: jest.fn().mockResolvedValueOnce(users),
    findOne: jest.fn().mockResolvedValueOnce(returnUser),
    update: jest.fn().mockResolvedValueOnce(returnUser),
    remove: jest.fn().mockResolvedValueOnce(returnUser),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    mockDate = jest
      .spyOn(Date.prototype, 'toLocaleTimeString')
      .mockReturnValue(new Date(Date.now()).toString());

    resolver = module.get<UsersResolver>(UsersResolver);

    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await resolver.create(dto);

    expect(user).toEqual(returnUser);
    expect(usersService.create).toHaveBeenCalled();
  });

  it('should get all the users', async () => {
    expect(await resolver.findAll()).toEqual(users);
    expect(usersService.findAll).toHaveBeenCalled();
  });

  it('should get a user by a unique value', async () => {
    expect(await resolver.findOne(whereUniqueDto)).toEqual(returnUser);
    expect(usersService.findOne).toHaveBeenCalled();
  });

  it('should update a user', async () => {
    expect(
      await resolver.update(
        {
          ...dto,
          is_u_18: expect.any(Boolean),
          role: 'USER',
        } as UserUncheckedUpdateInput,
        whereUniqueDto,
        { req: { user: users[0] } },
      ),
    ).toEqual(returnUser);
    expect(usersService.update).toHaveBeenCalled();
  });

  it('should delete a user', async () => {
    expect(
      await resolver.remove(
        { id: 1 } || { username: 'testUser' } || {
            email: 'testUser@gmail.com',
          } || { google_id: '1' },
      ),
    ).toEqual(returnUser);
    expect(usersService.remove).toHaveBeenCalled();
  });
});
