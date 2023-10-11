import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { AbilityFactory } from '../ability/ability.factory/ability.factory';
import { Role } from '../@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Test, TestingModule } from '@nestjs/testing';

describe('UsersService', () => {
  let service: UsersService;
  let mockDate;
  let prisma: PrismaService;
  let abilityFactory: AbilityFactory;

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
  const whereUniqueDto = { id: 1 } || { username: 'testUser' } || {
      email: 'testUser@gmail.com',
    } || { google_id: '1' };

  const returnUser = {
    id: expect.any(Number),
    ...dto,
  };
  const db = {
    user: {
      findMany: jest.fn().mockResolvedValue(users),
      findUniqueOrThrow: jest.fn().mockResolvedValue(returnUser),
      create: jest.fn().mockReturnValue(returnUser),
      update: jest.fn().mockResolvedValue(returnUser),
      delete: jest.fn().mockResolvedValue(returnUser),
    },
  };
  // TODO: check on
  const mockAbilityFactory = {
    // defineAbility: jest.spyOn(abilityFactory, 'defineAbility'),
    defineAbility: jest.fn().mockReturnValue(null),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: db,
        },
        {
          provide: AbilityFactory,
          useValue: mockAbilityFactory,
        },
      ],
    }).compile();

    mockDate = jest
      .spyOn(Date.prototype, 'toLocaleTimeString')
      .mockReturnValue(new Date(Date.now()).toString());

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
    abilityFactory = module.get<AbilityFactory>(AbilityFactory);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should get a user by a unique value', async () => {
  //   prisma.user.findUniqueOrThrow.mockResolvedValueOnce(users);
  //   await service.findOne();

  //   expect(prisma.user.findUniqueOrThrow).toHaveBeenCalled();
  // });

  describe('create', () => {
    it('should create a user', async () => {
      expect(await service.create(dto)).toEqual(returnUser);

      expect(jest.spyOn(prisma.user, 'create')).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should get all the users in the database', async () => {
      expect(await service.findAll()).toEqual(users);

      expect(jest.spyOn(prisma.user, 'findMany')).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should get a single user based on a unique value', async () => {
      expect(await service.findOne(whereUniqueDto)).toEqual(returnUser);

      expect(jest.spyOn(prisma.user, 'findUniqueOrThrow')).toHaveBeenCalled();
    });
  });

  // TODO: check on
  // describe('update', () => {
  //   it('should update and return the user', async () => {
  //     const updateUser = await service.update(
  //       {
  //         data: {
  //           ...dto,
  //           is_u_18: expect.any(Boolean),
  //           role: 'USER',
  //         } as UserUncheckedUpdateInput,
  //         where: whereUniqueDto,
  //       },
  //       users[0],
  //     );
  //     expect(updateUser).toEqual(returnUser);

  //     expect(abilityFactory.defineAbility).toHaveBeenCalled();
  //     expect(jest.spyOn(prisma.user, 'update')).toHaveBeenCalled();
  //   });
  // });

  describe('delete', () => {
    it('should delete a user', async () => {
      expect(await service.remove(whereUniqueDto)).toEqual(returnUser);

      expect(jest.spyOn(prisma.user, 'delete')).toHaveBeenCalled();
    });
  });
});
