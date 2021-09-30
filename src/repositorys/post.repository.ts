import { injectable } from "inversify";
import { PostDto } from "../dtos/post.dto";
import { PostInterface } from "../interfaces/postInterface";

@injectable()
export class PostRepository implements PostInterface{
    private posts: Array<PostDto>;
    private id: number;
    constructor(){
        this.posts = []
        this.id = 0
    } 
    findAll() {
        return this.posts
    }

    create(post: PostDto) {
        this.posts.push({...post, id: this.id})
        this.id++
    }

    findById(id: number) {
        return this.posts.find(post=>post.id == id)
    }

    update(id: number, post: PostDto) {
        const index = this.posts.findIndex(post=>post.id == id)
        this.posts.splice(index, 1)
        this.posts[index] = post
    }

    delete(id: number) {
        const index = this.posts.findIndex(post=>post.id == id)
        this.posts.splice(index, 1)
    }
}