export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  res.status(200).json({
    message: "Time: " + new Date().toLocaleTimeString()
  });
}