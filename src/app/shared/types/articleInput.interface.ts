import { TPopularTag } from "./popularTag.type"

export interface IArticleInput {
  title: string
  description: string
  body: string
  tagList: TPopularTag[]
} 

export interface IArticleFormInput {
  title: string
  description: string
  body: string
  tagList: string
} 