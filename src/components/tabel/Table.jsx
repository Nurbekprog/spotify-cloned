import { useEffect, useState } from "react";
import "./Table.scss";
import { useNavigate } from "react-router-dom";
import "../filter/Filter.scss";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Input, Table } from "antd";

const { Search } = Input;
function Tabel() {
  const [tableData, setTableData] = useState([
    {
      id: "1",
      firstName: "David",
      group: "N45",
      lastName: "King",
    },
    {
      id: "2",
      firstName: "John",
      lastName: "Doe",
      group: "N32",
    },
    {
      id: "3",
      firstName: "Jane",
      lastName: "Doe",
      group: "N30",
    },
    {
      id: "4",
      firstName: "Kane",
      lastName: "Laple",
      group: "N38",
    },
    {
      id: "5",
      firstName: "Worley",
      lastName: "James",
      group: "N44",
    },
  ]);
  const [columns, setColumns] = useState([
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Firstname",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Lastname",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ]);
  const navegate = useNavigate();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [group, setGroup] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const fetchData = () => {
    axios.get("http://localhost:3000/students").then((res) => {
      const data = res.data;
      setData(data);
      setData1(data);
      setTableData(data.students);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;
    setGroup(value);
    let newperson = data1?.filter((el) => {
      return value === "all" ? el : el?.group === value;
    });
    setData(newperson);
  };

  const deleteAdd = (id) => {
    if (window.confirm("Delete Student ")) {
      axios
        .delete(`http://localhost:3000/students/${id}`)
        .then((res) => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const edit = (id) => {
    navegate(`/edit/${id}`);
  };

  const search = (value) => {
    let v = value.toLowerCase();
    let search = data1?.filter((el) => {
      return (
        el?.lastName?.toLowerCase().includes(v) ||
        el?.firstName?.toLowerCase().includes(v) ||
        el?.group?.toLowerCase().includes(v)
      );
    });
    setData(search);
  };
  return (
    <>
      <div className="container">
        <div className="filter">
          <div>
            <Search
              enterButton="Search"
              size="large"
              type="text"
              placeholder="Search..."
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <div className="filter_item">
            <select value={group} onChange={handleChange}>
              <option value="all">Group</option>
              <option value="N45">N45</option>
              <option value="N44">N44</option>
              <option value="N38">N38</option>
              <option value="N32">N32</option>
              <option value="N30">N30</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "30px" }}>
        <Table columns={columns} dataSource={tableData} />
      </div>
    </>
  );
}

export default Tabel;
