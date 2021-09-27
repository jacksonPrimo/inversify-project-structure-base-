import { injectable } from "inversify";
interface Post {
  title: string;
}
@injectable()
export class PostRepositoryImpl {
    findAll() {
        console.log('something')
    }

    create(post: Post) {
        console.log('something')
    }

    findById(id: number) {
        console.log('something')
    }

    update(id: number, post: Post) {
        console.log('something')
    }

    delete(id: number) {
        console.log('something')
    }
}