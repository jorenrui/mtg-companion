const COLORS = [
  {
    name: 'Red',
  },
  {
    name: 'Green',
  },
  {
    name: 'Black',
  },
  {
    name: 'White',
  },
  {
    name: 'Blue',
  }
]

const colors = (req, res) => {
  res.status(200).json(COLORS);
}

export default colors
