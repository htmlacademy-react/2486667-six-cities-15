import {User} from '@/types/user';

export type Review = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}

export type PostReviewArg = {
  offerId: string;
  comment: string;
  rating: number;
}
