import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'

export abstract class AnswerCommentsRepository {
  abstract create: (answerComment: AnswerComment) => Promise<AnswerComment>
  abstract findById: (answerCommentId: string) => Promise<AnswerComment | null>
  abstract delete: (answerComment: AnswerComment) => Promise<void>
  abstract findManyByAnswerId: (
    answerId: string,
    params: { page: number },
  ) => Promise<AnswerComment[]>

  abstract findManyByAnswerIdWithAuthor(
    answerId: string,
    params: PaginationParams,
  ): Promise<CommentWithAuthor[]>
}
