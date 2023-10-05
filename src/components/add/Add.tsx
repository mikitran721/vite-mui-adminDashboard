import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add new item
    // axios.post(`/api/${slug}`,{})
  };

  return (
    <div className="add">
      <div className="modal">
        <span onClick={() => props.setOpen(false)} className="close">
          X
        </span>
        <h2>Add new {props.slug}</h2>
        <form onSubmit={handleSubmit}>
          {/* khong them field: id & avatar */}
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div key={column.field} className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
