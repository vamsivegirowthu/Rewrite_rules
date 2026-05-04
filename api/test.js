export default async function handler(req, res) {
  // simulate cold start delay (3 seconds)
  await new Promise(resolve => setTimeout(resolve, 3000));

  res.status(200).json({ message: "API working" });
}