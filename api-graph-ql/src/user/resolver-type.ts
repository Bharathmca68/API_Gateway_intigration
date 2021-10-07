import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MessageDef {
    @Field()
    message: string
}

@ObjectType()
export class allUser {
    @Field()
    username: string

    @Field()
    email: string
}

@ObjectType()
export class Usertype {
    @Field(() => [allUser], { nullable: true })
    User: allUser[]
}