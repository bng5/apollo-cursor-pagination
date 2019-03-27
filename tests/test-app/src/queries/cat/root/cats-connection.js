import { knexPaginator as paginate } from 'apollo-cursor-pagination';
import Cat from '../../../models/Cat';

export default async (_, args) => {
  // const {
  //   first, last, before, after, orderBy, orderDirection, orderByMultiple, orderDirectionMultiple
  // } = args;

  const orderBy = args.orderBy || args.orderByMultiple;
  const orderDirection = args.orderDirection || args.orderDirectionMultiple;

  const baseQuery = Cat.query();

  const result = await paginate(
    baseQuery,
    {
      ...args,
      orderBy,
      orderDirection,
    },
  );
  return result;
};
