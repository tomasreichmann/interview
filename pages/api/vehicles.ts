import vehicles from "../../vehicles.json";

export default function handler(req, res) {
  setTimeout(() => {
    res.status(200).json(vehicles);
  }, 1000);
}
