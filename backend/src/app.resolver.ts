import { Resolver, InputType, Field, Args, Query, Mutation } from '@nestjs/graphql'
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts'

@InputType()
export class UploadImageInput {
  @Field(() => GraphQLUpload)
  imageFile!: Promise<FileUpload>
}

@Resolver()
export class AppResolver {
  constructor(){}

  @Query(() => String, { name: 'test' })
  test() {
    return 'test'
  }

  @Mutation(() => Boolean, { name: 'uploadImage' })
  async uploadImage(@Args('input') { imageFile }: UploadImageInput) {
    console.log(imageFile)
    const { createReadStream, filename } = await imageFile
    console.log('filename --->>', filename)
    console.log('createReadStream --->>', createReadStream)
    const stream = createReadStream()
    console.log(stream)
    return true
  }
}
