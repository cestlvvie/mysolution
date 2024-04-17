import Pagination from "@mui/material/Pagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { ChangeEvent } from "react";

interface IProps {
  totalPages: number;
  count: number;
  page: number;
  countChangeHandler: (event: SelectChangeEvent) => void;
  pageChangeHandler: (event: ChangeEvent<unknown>, page: number) => void;
}

const COUNTES = [5, 10, 25, 50];

const NewsPagination = ({
  totalPages,
  count,
  countChangeHandler,
  pageChangeHandler,
  page,
}: IProps) => {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <FormControl>
        <InputLabel id="count">Кол-во</InputLabel>
        <Select
          labelId="count"
          id="count"
          label="Количество "
          value={count.toString()}
          onChange={countChangeHandler}
          sx={{ width: 100, margin: 2 }}
          
        >
          {COUNTES.map((c) => {
            return (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Pagination
        count={totalPages}
        page={page}
        color="standard"
        onChange={pageChangeHandler}
        sx={{ margin: 2 }}
      />
    </Stack>
  );
};

export default NewsPagination;
