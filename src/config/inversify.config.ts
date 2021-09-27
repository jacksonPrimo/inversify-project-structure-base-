import TYPES from './types';

import {Container} from 'inversify';
import { PostRepositoryImpl } from '../repositorys/post.repository';

const container = new Container();

container.bind<PostRepositoryImpl>(TYPES.PostRepositoryImpl ).to(PostRepositoryImpl).inSingletonScope();
export default container;