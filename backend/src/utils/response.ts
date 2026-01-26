import { Response } from 'express';

export const successResponse = (
  res: Response,
  data: unknown,
  message = 'Success'
) => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};
