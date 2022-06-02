import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Comment } from './Comment';
import { Post } from './Post';

@ObjectType()
export class Reaction {
    @Field((type) => ID)
    id: string

    @Field((type) => User)
    author: User

    @Field((type) => ID)
    authorId: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
    
    @Field()
    reactionDescription: string

    @Field((type) => Post)
    post: Post

    @Field((type) => ID)
    postId: string


}