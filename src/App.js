import React, { useState, useEffect } from "react";
// import "./styles.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function App() {
  const [listOneChecked, setListOneChecked] = useState([]);
  const [listTwoChecked, setListTwoChecked] = useState([]);
  const [listOne, setListOne] = useState([
    { id: "1", checked: false },
    { id: "2", checked: false },
    { id: "3", checked: false },
    { id: "4", checked: false }
  ]);
  const [listTwo, setListTwo] = useState([]);

  const handleListOneChange = (id, checked) => {
    if (checked) {
      const filteredLs = listOne.filter((l) => {
        return l.id !== id;
      });
      const ls1 = [...filteredLs, { id, checked }];
      const sorted1 = ls1.sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setListOne(sorted1);
      setListOneChecked([...listOneChecked, { id, checked }]);
    } else {
      const filteredLs = listOne.filter((l) => {
        return l.id !== id;
      });
      const ls1 = [...filteredLs, { id, checked }];
      const sorted1 = ls1.sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setListOne(sorted1);

      const filtered = listOneChecked.filter((l) => {
        return l.id !== id;
      });
      setListOneChecked(filtered);
    }
  };

  const handleListTwoChange = (id, checked) => {
    if (checked) {
      const filteredLs = listTwo.filter((l) => {
        return l.id !== id;
      });
      const ls2 = [...filteredLs, { id, checked }];
      const sorted2 = ls2.sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setListTwo(sorted2);
      setListTwoChecked([...listTwoChecked, { id, checked }]);
    } else {
      const filteredLs = listTwo.filter((l) => {
        return l.id !== id;
      });
      const ls2 = [...filteredLs, { id, checked }];
      const sorted2 = ls2.sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setListTwo(sorted2);

      const filtered = listTwoChecked.filter((l) => {
        return l.id !== id;
      });
      setListTwoChecked(filtered);
    }
  };

  const moveToListTwo = () => {
    if (listOneChecked.length > 0) {
      console.log(listOneChecked);
      const checkedIds = listOneChecked.map((l) => {
        return l.id;
      });
      console.log({ listOne });
      const filtered = listOne.filter((l) => {
        return !checkedIds.includes(l.id);
      });
      console.log({ checkedIds, filtered });
      const sorted1 = filtered.sort((a, b) => parseInt(a.id) - parseInt(b.id));

      setListOne(sorted1);
      const appendFalse = listOneChecked.map((l) => {
        return { ...l, checked: false };
      });
      const ls2 = [...listTwo, ...appendFalse];
      const sorted2 = ls2.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      setListTwo(sorted2);
      setListOneChecked([]);
      // const unchecked1 = listOne.map((l) => {
      //   return { ...l, checked: false };
      // });
      // const unchecked2 = listTwo.map((l) => {
      //   return { ...l, checked: false };
      // });
      // setListOne(unchecked1);
      // setListTwo(unchecked2);
    }
  };

  const moveToListOne = () => {
    if (listTwoChecked.length > 0) {
      console.log(listTwoChecked);
      const checkedIds = listTwoChecked.map((l) => {
        return l.id;
      });
      console.log({ listTwo });
      const filtered = listTwo.filter((l) => {
        return !checkedIds.includes(l.id);
      });
      console.log({ checkedIds, filtered });
      const sorted2 = filtered.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      setListTwo(sorted2);
      const appendFalse = listTwoChecked.map((l) => {
        return { ...l, checked: false };
      });
      const ls1 = [...listOne, ...appendFalse];
      const sorted1 = ls1.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      setListOne(sorted1);
      setListTwoChecked([]);
      // const unchecked1 = listOne.map((l) => {
      //   return { ...l, checked: false };
      // });
      // const unchecked2 = listTwo.map((l) => {
      //   return { ...l, checked: false };
      // });
      // setListOne(unchecked1);
      // setListTwo(unchecked2);
    }
  };

  return (
    <div className="App">
      <div className="header" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      <Typography variant="h3">Meta Interview List Move Problem-ReactJS</Typography>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "30px",
            flexDirection: "column",
            border: "2px solid black",
            borderRadius: "10px"
          }}
        >
          <p>LIST 1</p>
          {listOne.map((l) => {
            return (
              <FormControlLabel
                // key={l.id}
                control={
                  <Checkbox
                    checked={l.checked}
                    onChange={(e) => {
                      handleListOneChange(l.id, e.target.checked);
                    }}
                  />
                }
                label={l.id}
              />
            );
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button variant="contained" onClick={moveToListTwo} color="info">
            {">>>>>>"}
          </Button>
          <br />
          <Button variant="contained" color="info" onClick={moveToListOne}>
            {"<<<<<<"}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <p>LIST 2</p>

          {listTwo.map((l) => {
            return (
              <FormControlLabel
                // key={l.id}
                control={
                  <Checkbox
                    checked={l.checked}
                    onChange={(e) => {
                      handleListTwoChange(l.id, e.target.checked);
                    }}
                  />
                }
                label={l.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
