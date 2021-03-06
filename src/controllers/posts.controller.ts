import { Request, Response } from 'express';
import { inject } from 'inversify';
import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import TYPES from '../config/types';
import { PostRepository } from '../repositorys/post.repository';

@controller("/posts")
export class PostController implements interfaces.Controller {
  constructor(
    @inject(TYPES.PostInterface) private postRepository: PostRepository
  ){}
  @httpGet("/")
  public async index (@request() req: Request, @response() res: Response) {
    try {
      const posts = await this.postRepository.findAll();
      res.status(200).json(posts);
    } catch(error) {
      res.status(400).json(error);
    }
  }
}