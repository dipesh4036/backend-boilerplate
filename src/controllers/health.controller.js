import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/apiResponse.js';

export const healthCheck = asyncHandler(async (req, res) => {
  const response = new ApiResponse(
    true,
    200,
    { status: 'ok', timestamp: new Date().toISOString() },
    'Health check successful'
  );
  res.status(200).json(response);
});
