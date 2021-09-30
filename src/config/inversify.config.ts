import TYPES from './types';

import {Container} from 'inversify';
import { PostRepository } from '../repositorys/post.repository';

const container = new Container();

container.bind<PostRepository>(TYPES.PostInterface ).to(PostRepository).inSingletonScope();
export default container;