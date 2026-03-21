# CSV Data Handling (Python)

Simple CSV read-and-write template that loads rows, applies cleaning, and writes cleaned output.

## Files

- `data-handling.py`

## Behavior

- Reads `data.csv` using `csv.DictReader`.
- Collects rows into `cleaned_data`.
- Writes `cleaned_data.csv` using `csv.DictWriter`.
- Reuses source headers for the output file.

## Usage

1. Place an input file named `data.csv` in the same directory.
2. Add your row cleaning logic inside the loop.
3. Run:

```bash
python data-handling.py
```

4. Review `cleaned_data.csv`.

## Notes

- The script assumes at least one row exists before writing.
- Add a guard for empty inputs if needed.
