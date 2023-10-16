import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { Role } from '../@generated/prisma-nestjs-graphql/prisma/role.enum';
import { PostUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/post/post-unchecked-update.input';
import { Test, TestingModule } from '@nestjs/testing';

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let postsService: PostsService;
  let mockDate;
  const dto = {
    title: '3ak3ek',
    content: '3ak3aka you3ak3ikou t3ak3ikan',
    published: expect.any(Boolean),
    likes_count: 1,
    dislikes_count: 30,
    is_u_18: expect.any(Boolean),
    created_at: mockDate,
    updated_at: mockDate,
    author_id: expect.any(Role),
    email_verified: expect.any(Boolean),
  };

  const returnPost = {
    id: expect.any(Number),
    ...dto,
  };
  const posts: Post[] = [returnPost, returnPost];

  const user = {
    id: expect.any(Number),
    username: 'testUser',
    email: 'testUser@gmail.com',
    name: 'test user',
    password: 'test',
    role: expect.any(Role),
    created_at: mockDate,
    updated_at: mockDate,
    is_u_18: expect.any(Boolean),
    google_id: '1',
    google_profile: {},
    email_verified: expect.any(Boolean),
  };

  const whereUniqueDto = { id: expect.any(Number) };

  const mockPostsService = {
    // findAll: jest.fn().mockImplementation(() => users),
    create: jest.fn().mockResolvedValueOnce(returnPost),
    findAll: jest.fn().mockResolvedValueOnce(posts),
    findOne: jest.fn().mockResolvedValueOnce(returnPost),
    getAuthor: jest.fn().mockResolvedValueOnce(user),
    update: jest.fn().mockResolvedValueOnce(returnPost),
    remove: jest.fn().mockResolvedValueOnce(returnPost),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsResolver,
        { provide: PostsService, useValue: mockPostsService },
      ],
    }).compile();

    mockDate = jest
      .spyOn(Date.prototype, 'toLocaleTimeString')
      .mockReturnValue(new Date(Date.now()).toString());

    resolver = module.get<PostsResolver>(PostsResolver);

    postsService = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('create', () => {
    it('should create a post', async () => {
      const post = await resolver.create(dto, user);

      expect(post).toEqual(returnPost);
      expect(postsService.create).toHaveBeenCalled();
    });
  });

  describe('findAuthor', () => {
    it('should find the author of a post', async () => {
      const post = await resolver.author(returnPost);

      expect(post).toEqual(user);
      expect(postsService.getAuthor).toHaveBeenCalledWith(returnPost.author_id);
    });
  });

  describe('findAll', () => {
    it('should get all the posts', async () => {
      expect(await resolver.findAll()).toEqual(posts);
      expect(postsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should get a post by a unique value', async () => {
      expect(await resolver.findOne(whereUniqueDto)).toEqual(returnPost);
      expect(postsService.findOne).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a post', async () => {
      expect(
        await resolver.update(
          {
            ...dto,
          } as PostUncheckedUpdateInput,
          whereUniqueDto,
        ),
      ).toEqual(returnPost);
      expect(postsService.update).toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should delete a post', async () => {
      expect(await resolver.remove(whereUniqueDto)).toEqual(returnPost);
      expect(postsService.remove).toHaveBeenCalled();
    });
  });
});
