import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'

export abstract class QuestionCommentsRepository {
  abstract create: (
    questionComment: QuestionComment,
  ) => Promise<QuestionComment>

  abstract findById: (
    questionCommentId: string,
  ) => Promise<QuestionComment | null>

  abstract delete: (questionComment: QuestionComment) => Promise<void>
  abstract findManyByQuestionId: (
    questioId: string,
    params: { page: number },
  ) => Promise<QuestionComment[]>

  abstract findManyByQuestionIdWithAuthor(
    questionId: string,
    params: PaginationParams,
  ): Promise<CommentWithAuthor[]>
}
