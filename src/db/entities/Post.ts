import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { Reaction } from './Reaction';
import { User } from './User';
import { Comment } from './Comment';

@ObjectType()
export class Post {
    @Field((type) => ID)
    id: string
    
    @Field()
    title: string

    @Field((type) => String, { nullable: true })
    content: string | null

    @Field()
    published: boolean

    @Field()
    viewCount: number

    @Field((type) => User)
    author: User

    @Field((type) => ID)
    authorId: string

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date

    @Field((type) => Reaction)
    reactions: Reaction[]

    @Field((type) => Comment)
    comment: Comment[]
}

