export default function handler(req, res) {
  const { id } = req.query;

  res.status(200).json({
    message: `User ID: ${id}`
  });
}