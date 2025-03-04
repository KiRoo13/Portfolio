import { useState } from "react";
import { useProjectsDispatch } from "../../context/projectsContext";
import "./FilterProject.css";

function FilterProject() {
  const [serchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("React");
  const dispatch = useProjectsDispatch();

  return (
    <div className="section">
      <div className="conteiner">
        <div className="filter">
          <input
            value={serchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
          />
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value={'React'}>1</option>
            <option value={'JS'}>2</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterProject;
