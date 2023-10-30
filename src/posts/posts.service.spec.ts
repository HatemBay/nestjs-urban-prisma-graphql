import { PostsService } from './posts.service';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '../@generated/prisma-nestjs-graphql/prisma/role.enum';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';

describe('PostsService', () => {
  let service: PostsService;
  let mockDate;
  let prisma: PrismaService;
  let usersService: UsersService;

  const dto = {
    title: '3ak3ek',
    content: '3ak3aka you3ak3ikou t3ak3ikan',
    published: expect.any(Boolean),
    likesCount: 1,
    dislikesCount: 30,
    isU18: expect.any(Boolean),
    createdAt: mockDate,
    updatedAt: mockDate,
    authorId: expect.any(Role),
  };

  const returnPost = {
    id: expect.any(Number),
    ...dto,
  };
  const posts: Post[] = [returnPost, returnPost];

  const db = {
    post: {
      findMany: jest.fn().mockResolvedValue(posts),
      findUniqueOrThrow: jest.fn().mockResolvedValue(returnPost),
      create: jest.fn().mockReturnValue(returnPost),
      update: jest.fn().mockResolvedValue(returnPost),
      delete: jest.fn().mockResolvedValue(returnPost),
    },
  };

  const user = {
    id: expect.any(Number),
    username: 'testUser',
    email: 'testUser@gmail.com',
    name: 'test user',
    password: 'test',
    role: expect.any(Role),
    createdAt: mockDate,
    updatedAt: mockDate,
    isU18: expect.any(Boolean),
    googleId: '1',
    googleProfile: {},
  };
  const mockUsersService = {
    findOne: jest.fn().mockResolvedValue(user),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: PrismaService,
          useValue: db,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    mockDate = jest
      .spyOn(Date.prototype, 'toLocaleTimeString')
      .mockReturnValue(new Date(Date.now()).toString());

    service = module.get<PostsService>(PostsService);
    prisma = module.get<PrismaService>(PrismaService);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a post', async () => {
      expect(
        await service.create({
          ...dto,
        }),
      ).toEqual(returnPost);

      expect(jest.spyOn(prisma.post, 'create')).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should get all the posts in the database', async () => {
      expect(await service.findAll()).toEqual(posts);

      expect(jest.spyOn(prisma.post, 'findMany')).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should get a single post based on a unique value', async () => {
      expect(await service.findOne({ id: expect.any(Number) })).toEqual(
        returnPost,
      );

      expect(jest.spyOn(prisma.post, 'findUniqueOrThrow')).toHaveBeenCalled();
    });
  });

  describe('findAuthor', () => {
    it('should return the author of the post', async () => {
      expect(await service.getAuthor(expect.any(Number))).toEqual(user);

      expect(usersService.findOne).toHaveBeenCalledWith({
        id: expect.any(Number),
      });
    });
  });

  describe('update', () => {
    it('should update and return the post', async () => {
      const updatePost = await service.update({
        data: {
          ...dto,
        },
        where: { id: expect.any(Number) },
      });
      expect(updatePost).toEqual(returnPost);

      expect(jest.spyOn(prisma.post, 'update')).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('should delete a post and return its value', async () => {
      expect(await service.remove({ id: expect.any(Number) })).toEqual(
        returnPost,
      );

      expect(jest.spyOn(prisma.post, 'delete')).toHaveBeenCalled();
    });
  });
});
