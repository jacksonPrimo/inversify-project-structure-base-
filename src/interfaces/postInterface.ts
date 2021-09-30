import { PostDto } from "../dtos/post.dto";
export interface PostInterface {
    findAll(): Array<PostDto>;
    create(post: PostDto): void;
    findById(id: number): PostDto | null | undefined;
    update(id: number, post: PostDto): void;
    delete(id: number): void
}